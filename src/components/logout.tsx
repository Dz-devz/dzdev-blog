"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Logout() {
  return (
    <button className="h-10 w-[600px] px-5 max-[600px]:w-[400px] rounded text-white bg-gray-900 disabled:opacity-70 first-letter:text-white hover:opacity-[0.8] mr-auto ml-auto max-[400px]:w-[350px] max-[355px]:w-[300px]">
      <LogoutLink>Log out</LogoutLink>
    </button>
  );
}
