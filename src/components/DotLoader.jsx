import React from "react";

const DotLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="grid gap-2">
        <div className="flex animate-pulse items-center justify-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default DotLoader;
