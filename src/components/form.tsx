"use client";
import { clientAction } from "@/actions/client-action";
import { searchAction } from "@/actions/search-action";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { AutoComplete, ConfigProvider } from "antd";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./button";

export default function Form() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const ref = useRef<HTMLFormElement>(null);
  const { isAuthenticated } = useKindeBrowserClient();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const uniqueCategories = await searchAction();
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  if (isAuthenticated === false) {
    redirect("/api/auth/login");
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <form
      ref={ref}
      action={async (create) => {
        await clientAction(create);
        ref.current?.reset();
        setSelectedCategory("");
      }}
      className="gap-2 my-3 flex flex-col mx-auto max-w-[600px]"
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000000",
            fontSize: 16,
            colorBgContainer: "#ffffff",
          },
        }}
      >
        <AutoComplete
          className="rounded font-semibold h-10 text-left"
          placeholder="Category"
          value={selectedCategory}
          options={categories.map((category) => ({ value: category }))}
          onSelect={handleCategorySelect}
          onChange={handleCategoryChange}
        />
      </ConfigProvider>

      <input
        className="border rounded px-3 h-10 bg-slate-100"
        type="text"
        name="category"
        placeholder="Category"
        value={selectedCategory}
        hidden
        required
      />

      <input
        className="border hover:border-black rounded px-3 h-10 bg-slate-100"
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <textarea
        name="body"
        placeholder="Thoughts"
        className="border hover:border-black rounded px-3 py-2 bg-slate-100"
        rows={6}
        required
      />
      <Button btnName="Submit" />
    </form>
  );
}
