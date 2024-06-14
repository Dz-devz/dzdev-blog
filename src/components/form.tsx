"use client";
import { createPost } from "@/actions/actions";
import { useRef } from "react";
import Button from "./button";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (create) => {
        await createPost(create);
        ref.current?.reset();
      }}
      className="gap-2 my-10 flex flex-col mx-auto max-w-[600px]"
    >
      <input
        className="border rounded px-3 h-10"
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <textarea
        name="body"
        placeholder="Thoughts"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <Button />
    </form>
  );
}
