import toast from "react-hot-toast";
import { createThoughts } from "./create-actions";
import { schema } from "./schema";

export const clientAction = async (formData: FormData) => {
  const newThoughts = {
    category: formData.get("category"),
    title: formData.get("title"),
    body: formData.get("body"),
  };

  const result = schema.safeParse(newThoughts);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    toast.error(errorMessage);
    return;
  }
  console.log(result.data);

  try {
    const response = await createThoughts(result.data);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("Thoughts created successfully!");
    }
  } catch (error) {
    toast.error("Failed to create thoughts. Please try again later.");
  }
};
