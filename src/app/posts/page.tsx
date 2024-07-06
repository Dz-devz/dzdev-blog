import CategoryLinks from "@/components/category-link";
import PostList from "@/components/posts-list";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="text-center pt-6 px-5">
      <div className="mt-0 mb-10">
        <p className="text-2xl">Categories</p>
        <CategoryLinks params={params} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">List of Thoughts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
}
