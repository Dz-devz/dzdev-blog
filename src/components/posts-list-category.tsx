import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostListCategory({
  params,
}: {
  params: { category: string };
}) {
  const posts = await prisma.post.findMany({
    where: {
      category: params.category,
    },
  });
  return (
    <ul className="text-xl flex items-center flex-col justify-center mr-auto ml-auto">
      {posts.map((post) => (
        <li
          key={post.id}
          className="mb-3 hover:border-zinc-800 border-zinc-800 border-x-2 hover:border-y-2 hover:border-x-0 hover:animate-in hover:animate-out p-2 h-12 flex items-center justify-center"
        >
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
