"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as String;
  console.log(title);
}
