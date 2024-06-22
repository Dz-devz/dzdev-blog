"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteThoughts(formData: FormData) {
  const deleteId = formData.get("deleteId") as string;

  const delId = parseInt(deleteId);
  // const parsedSchema = deleteSchema.parse({
  //   id: formData.get("deleteId"),
  // });
  try {
    await prisma.post.delete({
      where: {
        id: delId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
  redirect("/posts");
}
