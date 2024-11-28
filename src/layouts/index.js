"use client";
import { usePathname } from "next/navigation";
import "@/themes/styles/globals.css";
import MainLayout from "./MainLayout";

const layouts = {
  MainLayout,
};

const AppLayout = ({ children }) => {
  const pathname = usePathname();

  let LayoutWrapper = layouts["MainLayout"];
  if (pathname.startsWith("/auth")) {
    LayoutWrapper = layouts["AuthLayout"];
  }

  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
};

export default AppLayout;

