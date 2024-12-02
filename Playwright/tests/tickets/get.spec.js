const { test, expect } = require("@playwright/test");
import Ticket from "./Ticket.js";

test("get all teste", async ({ request }) => {
  const response = await Ticket.getAllTickets({ request });
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
});

test("get teste", async ({ request }) => {
  const id = "9FL0lg0PFnz3lQjM";
  const response = await Ticket.getTickets({ request }, id);
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody.userId).toBe("dwadaf3wf3");
});
