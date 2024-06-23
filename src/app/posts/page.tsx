import ButtonCreate from "@/components/button-create";
import PostLinks from "@/components/post-links";
import PostList from "@/components/posts-list";
import prisma from "@/lib/db";
import { Suspense } from "react";

export default async function Page() {
  const linkName = await prisma.link.findMany();
  return (
    <main className="text-center pt-6 px-5">
      <div className="mt-0 mb-10">
        <PostLinks />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">List of Thoughts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
      <ButtonCreate />
    </main>
  );
}
