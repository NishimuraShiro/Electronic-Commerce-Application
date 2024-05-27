import React from "react";
import { InfoIcon } from "./InfoIcon";

export const AccountProfile = () => {
  return (
    <div className="flex justify-center mr-6">
      <div className="flex">
        <InfoIcon path="/sampleImage/icon_sample.jpeg" />
        <div className="flex items-center">
          <div className="flex flex-col">
            <h2 className="text-4xl">username</h2>
            <div className="text-2xl mt-1">
              <span className="">@</span>
              123abc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
