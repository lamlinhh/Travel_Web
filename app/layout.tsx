"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/redux/providers/Providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { isEqual } from "lodash";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isAuthPage =
    isEqual(pathname, "/login") || isEqual(pathname, "/register");

  return (
    <html lang="en">
      <body className={roboto.className}>
        <AntdRegistry>
          <ToastContainer />
          <ConfigProvider>
            <Providers>
              {!isAuthPage && <Header />}
              {children}
              {!isAuthPage && <Footer />}
            </Providers>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
