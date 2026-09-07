type MailtoAnchor = {
  style: Record<string, string>;
  href: string;
  click: () => void;
  remove: () => void;
};

type MailtoDocument = {
  createElement: (tag: "a") => MailtoAnchor;
  body: { appendChild: (anchor: MailtoAnchor) => void };
};

export function openMailtoFromUserGesture(href: string, documentRef: MailtoDocument = document) {
  const anchor = documentRef.createElement("a");
  anchor.href = href;
  anchor.style.display = "none";
  documentRef.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
