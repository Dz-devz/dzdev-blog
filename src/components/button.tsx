import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="h-10 px-5 rounded text-white bg-gray-500 disabled:opacity-70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white mr-auto ml-auto"></div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
