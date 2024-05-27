"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const HomePage: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  console.log(isSignedIn);
  console.log(currentUser);

  return (
    <>
      {isSignedIn && currentUser ? (
        <>
          <h1>Signed in successfully!</h1>
          <h2>Email: {currentUser?.email}</h2>
          <h2>Name: {currentUser?.name}</h2>
        </>
      ) : (
        <h1>Not signed in</h1>
      )}
    </>
  );
};

export default HomePage;
