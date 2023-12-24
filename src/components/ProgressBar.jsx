import React, { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";
import { cn } from "../utils/helpers";

const ProgressDemo = ({ progressCovered, height }) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className={cn(
        "relative h-[6px] w-full overflow-hidden rounded-full bg-neutral-N40"
      )}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progressCovered}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-[#35CCBC] transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progressCovered}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;
