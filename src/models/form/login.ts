import * as z from "zod";

export const LoginFormSchema = z.object({
  username:
    z.string().regex(/^[a-z\d]+_?[a-z\d]+$/, {
      message: "Enter a valid username or email-id.",
    }) || z.string().email(),
  password: z.string(),
});
