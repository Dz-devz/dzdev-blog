import prisma from "@/lib/db";
import Link from "next/link";

export default async function CategoryLinks() {
  const allThoughts = await prisma.post.findMany();
  return (
    <>
      <nav className="flex justify-center items-center py-4 px-4 text-zinc-400 gap-2 text-xl">
        {allThoughts.map((categoryN) => (
          <ul key={categoryN.id}>
            <Link href={`/category-post/${categoryN.category}`}>
              <li>
                {categoryN.category.charAt(0).toUpperCase() +
                  categoryN.category.slice(1)}
              </li>
            </Link>
          </ul>
        ))}
      </nav>
    </>
  );
}
