import { createPost } from "@/actions/actions";
import Logout from "@/components/logout";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <form
        action={createPost}
        className="gap-2 my-10 flex flex-col mx-auto max-w-[600px]"
      >
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <textarea
          name="body"
          placeholder="New Post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        />
        <button className="h-10 px-5 rounded text-white bg-gray-500">
          Submit
        </button>
      </form>
      <Logout />
    </main>
  );
}
