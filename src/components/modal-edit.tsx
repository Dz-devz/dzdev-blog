import { editThoughts } from "@/actions/update-actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

interface ModalEditProps {
  params: { id: string };
  title: string;
  desc: string;
  btn: string;
}

export async function ModalEdit(props: ModalEditProps) {
  const { params, title, desc, btn } = props;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  // const parsed = parseInt(post.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>

        <form action={editThoughts}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <input name="id" value={post.id} type="hidden" />
              <Input
                name="title"
                defaultValue={post.title}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="" className="text-right">
                Thoughts
              </Label>
              <input name="id" value={post.id} type="hidden" />
              <Input
                name="body"
                defaultValue={post.body}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{btn}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
