import * as z from "zod";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters." })
    .max(30, {
      message: "Name must not exceed 30 characters.",
    }),
  username: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(20, {
      message: "Username must not exceed 20 characters.",
    })
    .regex(/^[a-z\d]+_?[a-z\d]+$/, {
      message:
        "Username can only be alpha-numeric, without spaces. '_' can be used.",
    }),
  email: z.string().email({ message: "Enter a valid email." }),
  password: z.string().regex(/^(?=.*\d)(?=.*\W).{6,}$/, {
    message:
      "Password must contain at least a digit, and a symbol. Min length should be 6 characters.",
  }),
});
