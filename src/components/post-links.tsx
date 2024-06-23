import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostLinks() {
  const linkName = await prisma.link.findMany();
  return (
    <>
      <nav className="flex justify-center items-center py-4 px-4 text-zinc-400 gap-2 text-xl">
        {linkName.map((linkN) => (
          <ul key={linkN.id}>
            <Link href={`post-link/${linkN.link}`}>
              <li>
                {linkN.link.charAt(0).toUpperCase() + linkN.link.slice(1)}
              </li>
            </Link>
          </ul>
        ))}
      </nav>
    </>
  );
}
