import React from "react";
import { AuthProvider } from "@/context/AuthContext";

export type User = {
  id: string;
  name: string;
  email: string;
};

export default function PortalAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
