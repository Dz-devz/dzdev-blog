"use server";
import prisma from "../lib/db";

export async function searchAction() {
  const allThoughts = await prisma.post.findMany();

  const categorySet: Set<string> = new Set();

  allThoughts.forEach((thought) => {
    categorySet.add(thought.category);
  });

  const uniqueCategories: string[] = Array.from(categorySet);

  return uniqueCategories;
}
