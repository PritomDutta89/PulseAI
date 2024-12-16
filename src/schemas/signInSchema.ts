import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(), //identifier means userName - in prod it calls like this
  password: z.string(),
});
