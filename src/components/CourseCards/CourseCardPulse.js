import React from "react";

const CourseCardPulse = () => {
  return (
    <div className="group h-full min-w-[270px] flex-1 overflow-hidden rounded-[30px] border-2 bg-white">
      <div className="aspect-square min-h-[200px] animate-pulse bg-gray-300"></div>
      <div className="animate-pulse space-y-5 p-6">
        <div className="flex justify-between">
          <p className="flex h-4 w-12 items-center gap-2 bg-gray-300"></p>
          <p className="flex h-4 w-12 items-center gap-2 bg-gray-300"></p>
        </div>
        <div class="h-8  animate-pulse rounded-md bg-gray-300"></div>
        <div class="flex animate-pulse flex-col space-y-3">
          <div class="h-20  rounded-md bg-gray-300"></div>
          <div class="h-6 w-24 rounded-md bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardPulse;
