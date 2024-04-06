import { defineTable } from "convex/server";
import { v } from "convex/values";

// User ID map to email, issuer, subject, and tokenIdentifier
export const user = defineTable({
  email: v.string(),
  name: v.string(),
  tokenIdentifier: v.string(),
})
  .index("by_token", ["tokenIdentifier"])
  .index("by_email", ["email"]);
