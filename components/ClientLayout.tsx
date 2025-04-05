"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { isEqual } from "lodash";
import Providers from "@/redux/providers/Providers";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = isEqual(pathname, "/login");

  return (
    <ConfigProvider>
      <Providers>
        <ToastContainer />
        {!isLoginPage && <Header />}
        {children}
        {!isLoginPage && <Footer />}
      </Providers>
    </ConfigProvider>
  );
} 