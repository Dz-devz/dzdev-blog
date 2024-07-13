import prisma from "@/lib/db";
import Link from "next/link";

export default async function CategoryLinks({
  params,
}: {
  params: { category: string };
}) {
  const allThoughts = await prisma.post.findMany();

  const categorySet: Set<string> = new Set();

  allThoughts.forEach((thought) => {
    categorySet.add(thought.category);
  });

  const uniqueCategories: string[] = Array.from(categorySet);

  return (
    <>
      <nav className="flex justify-center items-center py-4 px-4 text-zinc-500 gap-2 text-xl">
        {uniqueCategories.map((categoryName) => (
          <ul key={categoryName}>
            {`/category-post/${categoryName}` !==
            `/category-post/${params.category}` ? (
              <Link href={`/category-post/${categoryName}`}>
                <li className="hover:text-zinc-800 border-zinc-800 border-y-2 hover:border-x-2 hover:border-zinc-800 hover:border-y-0 hover:animate-in hover:animate-out p-2">
                  {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                </li>
              </Link>
            ) : null}
          </ul>
        ))}
      </nav>
    </>
  );
}
