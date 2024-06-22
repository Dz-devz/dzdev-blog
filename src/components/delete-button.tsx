import { deleteThoughts } from "@/actions/delete-actions";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Button from "./button";
import { Input } from "./ui/input";

export default async function DeleteButton({
  params,
}: {
  params: { id: string };
}) {
  const deletePost = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!deletePost) {
    notFound();
  }

  return (
    <>
      <form action={deleteThoughts}>
        <Input name="deleteId" value={deletePost.id} type="hidden" />
        <Button btnName="Delete" />
      </form>
    </>
  );
}
