import Form from "@/components/form";
import Logout from "@/components/logout";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Wants on your mind?
      </h1>

      <Form />

      <Logout />
    </main>
  );
}
