import type React from "react";
import "@/app/globals.css";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Fluent application",
  description: "An application built with the Fluent design system",
  generator: "Fluent reigstry",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <main className="flex justify-center w-full">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
