import { z } from "zod";

export const schema = z.object({
  id: z.number().optional(),
  category: z.string({ message: "Category Already Exist Must be Unique." }),
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

export type FormS = z.infer<typeof schema>;

export const updateSchema = z.object({
  id: z.coerce.number().optional(),
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

export type UpdateS = z.infer<typeof updateSchema>;

export const deleteSchema = z.object({
  id: z.string(),
});

export type DeleteS = z.infer<typeof deleteSchema>;
