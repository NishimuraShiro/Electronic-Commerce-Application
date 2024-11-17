"use client";
import { HamburgerMenu } from "@/components/HamburgerMenu";
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
          <HamburgerMenu hasLogoutIcon={true} />
          <h1 className="text-xl font-bold mt-2">
            {currentUser.name} さん、ようこそ！
          </h1>
          <TopItem />
        </>
      ) : (
        <>
          <HamburgerMenu hasLogoutIcon={false} />
          <h1>Not Signed In</h1>
          <TopItem />
        </>
      )}
    </div>
  );
};

export default TopPage;
