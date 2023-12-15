import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useReactiveVar } from "@apollo/client";
import ReactPlayer from "react-player";

import Icon from "../Icon";
import { coursePreviewVar, presentCourseFileDetail } from "../../graphql/state";

const PreviewModal = ({ open, setOpen }) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const { openPreview, setOpenPreview } = useReactiveVar(coursePreviewVar);

  return (
    <Dialog.Root open={openPreview} onOpenChange={setOpenPreview}>
      {/* <Dialog.Trigger asChild>
        <button className="text-violet11 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Edit profile
        </button>
      </Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="mt-4 text-lg font-bold">
            كتاب التوحيد للشيخ عثيمين
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
            شرح كتاب التوحيد للإمام محمد بن عبد الوهاب - الشيخ أحمد الفلاني
          </Dialog.Description>
          <div>
            {courseDataFile.fileType === "Video" && (
              <div className="aspect-video w-full leading-none">
                <ReactPlayer
                  controls
                  light={true}
                  url={courseDataFile.fileUrl && courseDataFile.fileUrl}
                  width="100%"
                  height="100%"
                />
              </div>
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
