"use client"
import Image from "next/image";
import Logo from "../../public/assets/512x5112.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-4 border-b">
      <Link href="/">
        <Image src={Logo} alt="" width="35" height="35" className="w-[35px] h-[35px]"/>
      </Link>

    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className={`${link.href === pathName ? "text-zinc-900" : "text-zinc-400"}`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
}
