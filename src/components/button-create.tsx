import { createLinkAction } from "@/actions/create-link-action";

export default function ButtonCreate() {
  return (
    <form action={createLinkAction}>
      <input type="hidden" name="createId" value={1}></input>
      <input type="text" name="link" required />
      <button type="submit">Submit</button>
    </form>
  );
}
