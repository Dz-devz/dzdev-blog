"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteThoughts(formData: FormData) {
  const deleteId = formData.get("deleteId") as string;

  const delId = parseInt(deleteId);
  // const parsedSchema = deleteSchema.parse({
  //   id: formData.get("deleteId"),
  // });

  await prisma.post.delete({
    where: {
      id: delId,
    },
  });
  revalidatePath("/");
}
