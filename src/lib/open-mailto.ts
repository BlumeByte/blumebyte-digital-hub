type MailtoAnchor = {
  style: { display: string };
  href: string;
  click: () => void;
  remove: () => void;
};

type MailtoDocument = {
  createElement: (tag: "a") => MailtoAnchor;
  body: { appendChild: (anchor: MailtoAnchor) => void };
};

export function openMailtoFromUserGesture(
  href: string,
  documentRef: MailtoDocument = document as unknown as MailtoDocument,
) {
  const anchor = documentRef.createElement("a");
  anchor.href = href;
  anchor.style.display = "none";
  documentRef.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}
