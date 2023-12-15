import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useReactiveVar } from "@apollo/client";
import ReactPlayer from "react-player/lazy";
import dynamic from "next/dynamic";

import Icon from "../Icon";
import { presentCourseFileDetail } from "../../graphql/state";

const SinglePage = dynamic(() => import("../Pdf/SinglePage"), {
  ssr: false,
});

const PreviewModal = ({ open, setOpen }) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="mt-4 text-lg font-bold">
            {courseDataFile?.fileTitle}{" "}
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] text-[15px] leading-normal">
            {courseDataFile?.fileDescription}{" "}
          </Dialog.Description>
          <div>
            {courseDataFile?.fileType === "Video" && (
              <div className="aspect-video w-full leading-none">
                <ReactPlayer
                  controls
                  light={true}
                  url={courseDataFile?.fileUrl && courseDataFile?.fileUrl}
                  width="100%"
                  height="100%"
                />
              </div>
            )}
            {courseDataFile?.fileType === "Document" && (
              <SinglePage pdf={courseDataFile.fileUrl} />
            )}
          </div>
          <Dialog.Close asChild>
            <button
              className="hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px]  inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Icon id={"cancel"} size={25} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PreviewModal;
