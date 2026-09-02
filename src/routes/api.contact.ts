import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as Record<string, unknown>;
          const name = String(body.name ?? "").trim();
          const email = String(body.email ?? "").trim();
          const phone = String(body.phone ?? "").trim();
          const company = String(body.company ?? "").trim();
          const service = String(body.service ?? "").trim();
          const message = String(body.message ?? "").trim();
          const privacyAccepted = String(body.privacyAccepted ?? "").trim();

          if (!name || !email || !message || privacyAccepted !== "yes") {
            return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
          }

          const apiKey = process.env.RESEND_API_KEY;
          const from = process.env.CONTACT_FROM_EMAIL || "Blumebyte Website <onboarding@resend.dev>";
          const to = process.env.CONTACT_TO_EMAIL || "blumebyte@gmail.com";

          if (!apiKey) {
            console.error("RESEND_API_KEY is not configured");
            return Response.json({ ok: false, error: "Mail service is not configured" }, { status: 503 });
          }

          const safe = (value: string) =>
            value
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\"/g, "&quot;")
              .replace(/'/g, "&#039;");

          const html = `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
              <h2>New Blumebyte website enquiry</h2>
              <p><strong>Name:</strong> ${safe(name)}</p>
              <p><strong>Email:</strong> ${safe(email)}</p>
              <p><strong>Phone:</strong> ${safe(phone || "Not provided")}</p>
              <p><strong>Company:</strong> ${safe(company || "Not provided")}</p>
              <p><strong>Service:</strong> ${safe(service || "Not selected")}</p>
              <p><strong>Message:</strong></p>
              <p>${safe(message).replace(/\n/g, "<br>")}</p>
            </div>
          `;

          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from,
              to: [to],
              reply_to: email,
              subject: `New Blumebyte enquiry from ${name}`,
              html,
            }),
          });

          if (!response.ok) {
            console.error("Resend error", await response.text());
            return Response.json({ ok: false, error: "Unable to send email" }, { status: 502 });
          }

          return Response.json({ ok: true });
        } catch (error) {
          console.error(error);
          return Response.json({ ok: false, error: "Unexpected error" }, { status: 500 });
        }
      },
    },
  },
});
