import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function SinglePost({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  return (
    <>
      <h1 className="font-semibold text-5xl mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
}
