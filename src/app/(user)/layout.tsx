import Navbar from "@components/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
