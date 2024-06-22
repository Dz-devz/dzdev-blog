import ButtonCreate from "@/components/button-create";
import PostList from "@/components/posts-list";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold mb-5">List of Thoughts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
      <ButtonCreate />
    </main>
  );
}
