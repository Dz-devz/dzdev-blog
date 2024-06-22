"use server";

import prisma from "@/lib/db";
import { linkCreateSchema } from "./schema";

export async function createLinkAction(formData: FormData) {
  const parsedSchema = linkCreateSchema.parse({
    id: formData.get("createId"),
    link: formData.get("link"),
  });

  const parsed = parseInt(parsedSchema.id);

  await prisma.link.create({
    data: {
      id: parsed,
      link: parsedSchema.link,
    },
  });
}
