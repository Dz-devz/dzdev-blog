import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import DeleteButton from "./delete-button";
import { ModalEdit } from "./modal-edit";

interface SinglePostProps {
  params: {
    id: string;
  };
}

interface ModalEditProps {
  params: {
    id: string;
  };
  title: string;
  desc: string;
  btn: string;
}

export default async function SinglePost({ params }: SinglePostProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  const modalEditProps: ModalEditProps = {
    params: {
      id: params.id,
    },
    title: "Edit",
    desc: "Make changes to your Thoughts here. Click save when you are done.",
    btn: "Save Changes",
  };
  return (
    <>
      <h1 className="font-semibold text-5xl mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <div className="mt-20 items-center justify-center flex gap-2">
        <ModalEdit {...modalEditProps} />
        <DeleteButton
          params={{
            id: params.id,
          }}
        />
      </div>
    </>
  );
}
