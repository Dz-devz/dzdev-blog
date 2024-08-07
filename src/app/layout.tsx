import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevThoughts",
  description: "DevThoughts aim to keep your Profound ideas.",
  icons: [
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className}text-zinc-900 min-h-screen bg-[#FFD0D0]`}
      >
        <Container>
          <Header />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
