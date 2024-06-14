import prisma from "@/lib/db";
import Link from "next/link";

// interface PostProps {
//     id: number;
//     title: string;
// }

export default async function PostList() {
  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
