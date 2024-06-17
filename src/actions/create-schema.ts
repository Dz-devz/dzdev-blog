import { z } from "zod";

export const CreateSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(2, { message: "Title must atleast have 2 characters long" })
    .trim(),
  body: z
    .string()
    .min(25, {
      message:
        "Thoughts must have 25 characters long don't limit yourself on sharing this is a safe space <3",
    })
    .trim(),
});

export type FormS = z.infer<typeof CreateSchema>;
