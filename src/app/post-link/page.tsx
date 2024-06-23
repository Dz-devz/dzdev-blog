import PostLinks from "@/components/post-links";
import prisma from "@/lib/db";

export default async function Page() {
  const linkName = await prisma.link.findMany();
  return (
    <>
      <h1 className="mt-10 text-4xl text-center font-bold">Thoughts Links</h1>
      <PostLinks />
    </>
  );
}
