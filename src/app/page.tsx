import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold md:text-5xl">
        Share your Profound Thoughts.
      </h1>
      <p className="max-w-[750px] mx-auto leading-8 mt-4 text-2xl md:text-xl">
        Everytime you share, it will leave a mark in someones heart or in your
        heart. those Profound Thoughts you share can create miracle.
      </p>
      <div className="space-x-3 mt-5">
        <LoginLink className="bg-zinc-900 text-white py-2 px-5 rounded-md mt-10">
          Login
        </LoginLink>
        <RegisterLink className="bg-white text-zinc-900 py-2 px-5 rounded-md mt-10">
          Sign up
        </RegisterLink>
      </div>
    </main>
  );
}
