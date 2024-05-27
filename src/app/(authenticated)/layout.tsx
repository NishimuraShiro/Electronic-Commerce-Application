import React from "react";
import { AuthProvider } from "@/context/AuthContext";

export type User = {
  id: string;
  name: string;
  email: string;
};

export default function AuthenticatedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
