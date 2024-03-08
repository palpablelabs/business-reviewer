import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import StickyNavBar from "../components/stickyNavBar";
import { SimpleFooter } from "../components/footer";
import PageContainerComponent from "../components/pageContainer";
import { SessProvider } from "../components/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Reviewer",
  description: "An App to help small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageContainerComponent>
          <StickyNavBar />
          <SessProvider>{children}</SessProvider>
          <SimpleFooter />
        </PageContainerComponent>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
