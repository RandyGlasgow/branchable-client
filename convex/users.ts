import { mutation } from "./_generated/server";
import { validateUserIdentity } from "./utils/auth/validateUserIdentity";

/**
 * Insert or update the user in a Convex table then return the document's ID.
 *
 * The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
 * to look up identities.
 *
 * Keep in mind that `UserIdentity` has a number of optional fields, the
 * presence of which depends on the identity provider chosen. It's up to the
 * application developer to determine which ones are available and to decide
 * which of those need to be persisted. For Clerk the fields are determined
 * by the JWT token's Claims config.
 */
export const user_id = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await validateUserIdentity(ctx);

    // look up the user by tokenIdentifier
    const user = await ctx.db
      .query("user")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    // if the user doesn't exist, insert a new user
    if (!user) {
      const id = await ctx.db.insert("user", {
        name: identity.name!,
        email: identity.email!,
        tokenIdentifier: identity.tokenIdentifier,
      });

      const [first_name, last_name] = identity.name!.split(" ");
      await ctx.db.insert("user_settings", {
        user_id: id,
        first_name,
        last_name,
        email: identity.email!,
        avatar: identity.pictureUrl || "",
      });
      return id;
    }

    // if the user exists but the name or email has changed, update the user
    if (user.name !== identity.name || user.email !== identity.email) {
      await ctx.db.patch(user._id, {
        name: identity.name!,
        email: identity.email!,
      });

      // find the user settings by user_id
      const settings = await ctx.db
        .query("user_settings")
        .withIndex("by_user_id", (q) => q.eq("user_id", user._id))
        .unique();

      if (settings) {
        await ctx.db.patch(settings._id, {
          first_name: identity.nickname,
          last_name: identity.familyName,
          email: identity.email,
          avatar: identity.pictureUrl,
        });
      }
    }

    return user._id;
  },
});
