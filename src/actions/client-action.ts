import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { schema } from "../utils/schema";
import { createThoughts } from "./create-actions";

export const clientAction = async (formData: FormData) => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
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
