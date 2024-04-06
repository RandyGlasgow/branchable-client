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

export const user_settings = defineTable({
  user_id: v.id("user"),
  first_name: v.string(),
  last_name: v.string(),
  email: v.string(),
  avatar: v.string(),
}).index("by_user_id", ["user_id"]);
