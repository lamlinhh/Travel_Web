"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/providers/Providers";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import { isEqual } from "lodash";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isLoginPage = isEqual(pathname, "/login");

  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
=======
    <html lang="en">
      <body className={roboto.className}>
>>>>>>> 38ae0f2e7e9c5029da5b34db238a3d4841cb457d
        <ToastContainer />
        <ConfigProvider>
          <Providers>
            {!isLoginPage && <Header />}
            {children}
            {!isLoginPage && <Footer />}
          </Providers>
        </ConfigProvider>
      </body>
    </html>
  );
}
