import { defineSchema } from "convex/server";
import { user, user_settings } from "./schemas/users.schema";

export default defineSchema({
  user,
  user_settings,
});
