"use client";

import HamburgerMenu from "@/components/HamburgerMenu";
import { TopItem } from "@/components/TopItem";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
    console.log("currentUser:", currentUser);
  }, [isSignedIn, currentUser]);
  return (
    <div className="m-4">
      {isSignedIn && currentUser ? (
        <>
          <HamburgerMenu />
          <h1>{currentUser.name} さん、ようこそ！</h1>
          <TopItem />
        </>
      ) : (
        <>
          <HamburgerMenu />
          <TopItem />
        </>
      )}
    </div>
  );
}
