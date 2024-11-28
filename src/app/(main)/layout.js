"use client";
import AppLayout from "@/layouts";
// import ThemeComponent from "@/themes";
import dynamic from "next/dynamic";

export default function RootLayout({ children }) {
  return (
      <AppLayout>{children}</AppLayout>
  );
}
