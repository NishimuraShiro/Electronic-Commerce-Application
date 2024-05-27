"use client";
import HamburgerMenu from "@/components/HamburgerMenu";
import { TopItem } from "@/components/TopItem";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect } from "react";

const TopPage = () => {
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
        <h1>Not Signed In</h1>
      )}
    </div>
  );
};

export default TopPage;
