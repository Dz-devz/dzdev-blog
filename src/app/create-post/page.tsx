import { createPost } from "@/actions/actions";

export default function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          className="border rounded px-3 h-full"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <button className="h-full px-5 rounded text-white bg-gray-500">
          Submit
        </button>
      </form>
    </main>
  );
}
