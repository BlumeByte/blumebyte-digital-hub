import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "../config/site.ts";
import { answerSiteQuestion } from "./site-chat.ts";

test("answers service questions from the published service list", () => {
  const answer = answerSiteQuestion("What services do you offer?", siteConfig);
  assert.match(answer.text, /web design/i);
  assert.match(answer.text, /e-commerce/i);
  assert.deepEqual(answer.source, { label: "Explore services", href: "/services" });
});

test("uses the configured public contact details", () => {
  const answer = answerSiteQuestion("How do I contact a human?", siteConfig);
  assert.match(answer.text, new RegExp(siteConfig.email.replace(".", "\\.")));
  assert.match(answer.text, new RegExp(siteConfig.phone.replaceAll("+", "\\+")));
  assert.deepEqual(answer.source, { label: "Contact Blumebyte", href: "/contact" });
});

test("does not invent an answer outside published site content", () => {
  assert.match(
    answerSiteQuestion("What is tomorrow's exchange rate?", siteConfig).text,
    /don't have a reliable answer/i,
  );
});

test("answers natural product questions including plural and misspelled ProSME queries", () => {
  const answer = answerSiteQuestion("know more about prosmes", siteConfig);
  assert.match(answer.text, /ProSME/i);
  assert.match(answer.text, /small and growing businesses/i);
  assert.deepEqual(answer.source, { label: "Learn more about ProSME", href: "/projects/prosme" });
});

test("searches the knowledge library and returns the most relevant website page", () => {
  const answer = answerSiteQuestion("Can you build an online shop with payments?", siteConfig);
  assert.match(answer.text, /store design/i);
  assert.deepEqual(answer.source, {
    label: "View e-commerce services",
    href: "/services#ecommerce",
  });
});
