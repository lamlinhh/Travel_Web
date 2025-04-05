import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Your ultimate travel companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 