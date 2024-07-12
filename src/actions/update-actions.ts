"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { updateSchema } from "../utils/schema";

export async function editThoughts(formData: FormData) {
  const parsedSchema = updateSchema.parse({
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
