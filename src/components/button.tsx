"use client";
import { useFormStatus } from "react-dom";

export default function Button({ btnName }: { btnName: String }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="h-10 px-5 rounded text-white bg-gray-900 disabled:opacity-70 hover:opacity-[0.8] max-[600px]:w-[400px] max-[400px]:w-[350px] max-[355px]:w-[300px] max-[600px]:mx-auto"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white mr-auto ml-auto"></div>
      ) : (
        <>{btnName}</>
      )}
    </button>
  );
}
