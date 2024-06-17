"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function editThoughts(formData: FormData) {
  const thoughtsId = formData.get("id") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  const id = parseInt(thoughtsId);

  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      body: body,
    },
  });
  revalidatePath("/");
}
