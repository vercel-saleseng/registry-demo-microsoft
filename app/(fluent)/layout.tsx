"use client";

import type React from "react";
import "@/app/globals.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

/**
 * All generations and components should use the Fluent UI webLightTheme
 * with components imported from @fluentui/react-components before using shadcn/ui.
 */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <main className="flex justify-center w-full">
          <div className="container">
            <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
