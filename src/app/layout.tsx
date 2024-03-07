import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import StickyNavBar from "../components/stickyNavBar";
import { SimpleFooter } from "../components/footer";
import PageContainerComponent from "../components/pageContainer";

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
          {children}
          <SimpleFooter />
        </PageContainerComponent>
      </body>
    </html>
  );
}
