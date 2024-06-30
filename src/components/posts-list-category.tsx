import prisma from "@/lib/db";
import Link from "next/link";

// interface PostProps {
//     id: number;
//     title: string;
// }

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
    <ul className="text-xl">
      {posts.map((post) => (
        <li key={post.id} className="mb-3 hover:text-[#CA8787]">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
