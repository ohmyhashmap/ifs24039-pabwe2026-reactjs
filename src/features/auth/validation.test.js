import { expect, it } from "vitest";
import { isValidEmail } from "./validation";

it.each(["a@b.co", "first.last@domain.example"])("accepts valid email %s", (email) => {
  expect(isValidEmail(email)).toBe(true);
});

it.each(["", "no-at-sign.example", "a@@b.co", "a@b", "a@b.c ", "a @b.co"])(
  "rejects invalid email %s",
  (email) => {
    expect(isValidEmail(email)).toBe(false);
  },
);
