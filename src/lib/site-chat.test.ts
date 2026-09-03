import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "../config/site.ts";
import { answerSiteQuestion } from "./site-chat.ts";

test("answers service questions from the published service list", () => {
  const answer = answerSiteQuestion("What services do you offer?", siteConfig);
  assert.match(answer, /web design/i);
  assert.match(answer, /e-commerce/i);
});

test("uses the configured public contact details", () => {
  const answer = answerSiteQuestion("How do I contact a human?", siteConfig);
  assert.match(answer, new RegExp(siteConfig.email.replace(".", "\\.")));
  assert.match(answer, new RegExp(siteConfig.phone.replaceAll("+", "\\+")));
});

test("does not invent an answer outside published site content", () => {
  assert.match(
    answerSiteQuestion("What is tomorrow's exchange rate?", siteConfig),
    /only answer from information published/i,
  );
});
