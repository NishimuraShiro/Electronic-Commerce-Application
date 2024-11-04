"use client";
import React, { useState, useEffect } from "react";
import { TopItem } from "@/components/TopItem";

const Page = ({ params }: { params: { id: string } }) => {
  const [userName, setUserName] = useState<string | null>(null);

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/users/${params.id}`,
        { next: { revalidate: 30 } } // ISR
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserName(data.name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // 以下の方法でもデータの取得はできる、しかし、Next特有のSSGやISRができない。
  // useEffect(() => {
  //   // APIからユーザー情報を取得
  //   axios
  //     .get(`http://localhost:3001/api/v1/users/${params.id}`)
  //     .then((response) => setUserName(response.data.name))
  //     .catch((error) => console.error("Error fetching user data:", error));
  // }, []);

  if (!userName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1>{userName} さん、ようこそ！</h1>
      <TopItem />
    </div>
  );
};

export default Page;
