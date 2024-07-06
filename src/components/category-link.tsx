import prisma from "@/lib/db";
import Link from "next/link";

export default async function CategoryLinks() {
  const allThoughts = await prisma.post.findMany();

  // Use a Set to track unique categories
  const categorySet: Set<string> = new Set();

  // Populate the Set with unique category names
  allThoughts.forEach((thought) => {
    categorySet.add(thought.category);
  });

  // Convert Set to Array using Array.from
  const uniqueCategories: string[] = Array.from(categorySet);

  return (
    <>
      <nav className="flex justify-center items-center py-4 px-4 text-zinc-400 gap-2 text-xl">
        {/* Iterate over the Array of unique category names */}
        {uniqueCategories.map((categoryName) => (
          <ul key={categoryName}>
            <Link href={`/category-post/${categoryName}`}>
              <li>
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              </li>
            </Link>
          </ul>
        ))}
      </nav>
    </>
  );
}
