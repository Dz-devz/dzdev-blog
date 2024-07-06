import prisma from "@/lib/db";
import Link from "next/link";

// interface PostProps {
//     id: number;
//     title: string;
// }

export default async function PostList() {
  const posts = await prisma.post.findMany();
  return (
    <ul className="text-xl w-[600px] mr-auto ml-auto">
      {posts.map((post) => (
        <li
          key={post.id}
          className="mb-3 hover:border-[#CA8787] hover:text-[#CA8787] border-[2px] border-black h-16 flex items-center justify-center p-2"
        >
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
