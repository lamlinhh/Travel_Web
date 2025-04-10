"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/redux/providers/Providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { roboto } from './fonts';
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/auth/login" ||
    pathname === "/auth/register" ||
    pathname === "/auth/forgot-password";

  return (
    <html lang="en" className={roboto.className}>
      <body>
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
