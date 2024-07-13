"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { schema } from "../utils/schema";

export async function createThoughts(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const newThoughts = {
    category: formData.get("category"),
    title: formData.get("title"),
    body: formData.get("body"),
  };

  const result = schema.safeParse(newThoughts);

  // const result = schema.safeParse(formData);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return {
      error: errorMessage,
    };
  }

  await prisma.post.create({
    data: result.data,
  });

  revalidatePath("/posts");
  redirect("/posts");
}
