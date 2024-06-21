"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { schema } from "./schema";

export async function editThoughts(formData: FormData) {
  const parsedSchema = schema.parse({
    id: formData.get("id"),
    title: formData.get("title"),
    body: formData.get("body"),
  });

  await prisma.post.update({
    where: {
      id: parsedSchema.id,
    },
    data: {
      title: parsedSchema.title,
      body: parsedSchema.body,
    },
  });
  revalidatePath("/");
}
