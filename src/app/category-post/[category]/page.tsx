import CategoryLinks from "@/components/category-link";
import PostListCategory from "@/components/posts-list-category";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="text-center pt-6 px-5">
      <div className="mt-0 mb-10">
        <CategoryLinks />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        List of {params.category}
      </h1>

      <Suspense fallback="Loading...">
        <PostListCategory params={params} />
      </Suspense>
    </main>
  );
}
