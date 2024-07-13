"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteSchema } from "../utils/schema";

export async function deleteThoughts(formData: FormData) {
  const parsedSchema = deleteSchema.parse({
    id: formData.get("deleteId"),
  });
  const parId = parseInt(parsedSchema.id);

  try {
    await prisma.post.delete({
      where: {
        id: parId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/posts");
  redirect("/posts");
}
