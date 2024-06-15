import toast from "react-hot-toast";
import { createPost } from "./actions";
import { FormSchema } from "./form-schema";

export const clientAction = async (formData: FormData) => {
  const newThoughts = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  const result = FormSchema.safeParse(newThoughts);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    toast.error(errorMessage);
    return;
  }
  console.log(result.data);

  const response = await createPost(result.data);
  if (response?.error) {
    toast.error(response.error);
  }
};
