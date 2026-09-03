import { GripHorizontal, MessageCircle, Send, Star, X } from "lucide-react";
import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { answerSiteQuestion, type ChatMessage } from "@/lib/site-chat";

const storageKey = "blumebyte-smart-chat";
const welcome: ChatMessage = {
  from: "bot",
  text: "Hi — I can help with Blumebyte services, products, project enquiries and contact details. What would you like to know?",
};

export function SmartChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcome]);
  const [question, setQuestion] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [position, setPosition] = useState({ x: 20, y: 96 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const value = JSON.parse(saved);
        setMessages(value.messages?.length ? value.messages : [welcome]);
        setRating(value.rating ?? 0);
        setFeedback(value.feedback ?? "");
      }
    } catch {
      /* session storage may be disabled */
    }
  }, []);
  useEffect(() => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({ messages, rating, feedback }));
    } catch {
      /* no-op */
    }
  }, [messages, rating, feedback]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const text = question.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { from: "user", text },
      { from: "bot", text: answerSiteQuestion(text, siteConfig) },
    ]);
    setQuestion("");
  };
  const feedbackText = `Blumebyte website chat feedback\nRating: ${rating || "Not rated"}/5\nFeedback: ${feedback || "No written feedback"}`;
  const beginDrag = (event: PointerEvent) => {
    if (window.innerWidth < 640) return;
    drag.current = { x: event.clientX, y: event.clientY, px: position.x, py: position.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: PointerEvent) => {
    if (!drag.current) return;
    setPosition({
      x: Math.max(
        8,
        Math.min(window.innerWidth - 388, drag.current.px + event.clientX - drag.current.x),
      ),
      y: Math.max(
        72,
        Math.min(window.innerHeight - 480, drag.current.py + event.clientY - drag.current.y),
      ),
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Blumebyte smart chat"
        className="fixed bottom-6 left-5 z-40 grid size-13 place-items-center rounded-full bg-black text-white shadow-2xl transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <MessageCircle aria-hidden="true" />
      </button>
      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-label="Blumebyte smart chat"
          style={{ left: position.x, top: position.y }}
          className="fixed z-[60] flex h-[min(70vh,35rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl max-sm:!left-4 max-sm:!top-auto max-sm:bottom-4"
        >
          <header
            onPointerDown={beginDrag}
            onPointerMove={moveDrag}
            onPointerUp={() => {
              drag.current = null;
            }}
            className="flex cursor-move touch-none items-center justify-between bg-black px-4 py-3 text-white"
          >
            <div className="flex items-center gap-2">
              <GripHorizontal className="size-4 text-white/50" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Blumebyte smart chat</p>
                <p className="text-[11px] text-white/55">Answers from this website</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-4" />
            </button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f5f5f3] p-4" aria-live="polite">
            {messages.map((message, index) => (
              <p
                key={index}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.from === "user" ? "ml-auto bg-primary text-white" : "bg-white text-black shadow-sm"}`}
              >
                {message.text}
              </p>
            ))}
            {messages.length > 3 ? (
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider">Was this useful?</p>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      aria-label={`Rate ${value} out of 5`}
                      className="rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Star
                        className={`size-5 ${value <= rating ? "fill-[#b68a35] text-[#b68a35]" : "text-black/25"}`}
                      />
                    </button>
                  ))}
                </div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  aria-label="Written feedback"
                  placeholder="Optional feedback"
                  className="mt-2 min-h-16 w-full rounded-xl border border-black/10 p-2 text-sm"
                />
                <div className="mt-2 flex gap-2 text-xs font-semibold">
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Website chat feedback")}&body=${encodeURIComponent(feedbackText)}`}
                    className="text-primary underline"
                  >
                    Email feedback
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(feedbackText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ) : null}
          </div>
          <form onSubmit={submit} className="flex gap-2 border-t border-black/10 bg-white p-3">
            <label className="sr-only" htmlFor="smart-chat-question">
              Ask a question
            </label>
            <input
              id="smart-chat-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about services…"
              className="min-w-0 flex-1 rounded-full border border-black/15 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              aria-label="Send question"
              className="grid size-11 place-items-center rounded-full bg-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Send className="size-4" />
            </button>
          </form>
        </section>
      ) : null}
    </>
  );
}
