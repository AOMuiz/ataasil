import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { useReactiveVar } from "@apollo/client";
import {
  presentCourseFileDetail,
  presentCourseSectionTest,
  coursePreviewVar,
} from "../../graphql/state";
import { cn } from "../../utils/helpers";

const TopicResource = ({
  topicFile,
  format,
  sectionId,
  testDetail,
  preview,
}) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const courseSectionTest = useReactiveVar(presentCourseSectionTest);
  const previewState = useReactiveVar(coursePreviewVar);

  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [active, setActive] = useState("");

  const setPresentFile = () => {
    presentCourseSectionTest({
      sectionId: "",
      test: [],
    });
    presentCourseFileDetail({
      ...courseDataFile,
      ...{
        sectionId,
        fileType: topicFile.format,
        fileUrl: topicFile.src,
        fileTitle: topicFile.title,
        fileDescription: topicFile.description,
        isPreview: topicFile.isPreview,
      },
    });
  };

  const setPresentTest = () => {
    presentCourseFileDetail({
      sectionId: "",
      fileType: "",
      fileUrl: "",
      fileTitle: "",
      fileDescription: "",
    });
    presentCourseSectionTest({
      ...courseSectionTest,
      ...{ sectionId, test: testDetail },
    });
  };

  // Function to update both reactive variable and local state
  const updatePreviewState = (newOpenPreview) => {
    console.log(previewState);
    coursePreviewVar({
      openPreview: newOpenPreview,
      setOpenPreview: () => setShowPreviewModal(newOpenPreview),
    });
    setShowPreviewModal(newOpenPreview);
  };

  useEffect(() => {
    setActive(courseDataFile.fileTitle);
  }, [active, courseDataFile.fileTitle]);

  const getIconName = (type) => {
    switch (type) {
      case "Video":
        return (
          <Icon
            id={topicFile?.title === active ? "play" : "video"}
            size={20}
            className={cn(
              "rounded-full text-gray-G30 group-hover:text-primary-P100",
              topicFile?.title === active &&
                topicFile?.format === "Video" &&
                "animate-pulse border-[3px] border-primary-P100"
            )}
          />
        );
      case "test":
        return (
          <Icon
            id="assignment"
            size={20}
            className={cn(
              `text-gray-G30 group-hover:text-primary-P100`,
              sectionId === courseSectionTest.sectionId && "text-primary-P200"
            )}
          />
        );
      case "Document":
        return (
          <Icon
            id="FileText"
            size={20}
            className={cn(
              "text-gray-G30 group-hover:text-primary-P100",
              topicFile?.title === active &&
                topicFile?.format === "Document" &&
                "animate-pulse text-primary-P100"
            )}
          />
        );
    }
  };

  return (
    <>
      {format === "file" ? (
        <li>
          <button
            disabled={topicFile.isPreview === false}
            onClick={() => {
              setPresentFile();
              preview && updatePreviewState(showPreviewModal);
            }}
            className={cn(
              "group flex w-full cursor-pointer items-center justify-between gap-4 border-b border-gray-G20 pb-4"
            )}
          >
            <p className="flex gap-4">
              {getIconName(topicFile?.format)}
              {
                <span
                  className={cn(
                    "flex-1",
                    topicFile?.title === active && "text-primary-P200",
                    topicFile.isPreview && "text-primary-P600 underline"
                  )}
                >
                  {topicFile?.title}
                </span>
              }
            </p>

            <p className={cn("self-end font-medium")}>
              <span
                className={cn(
                  "self-end pe-2 font-medium",
                  topicFile.isPreview && "text-primary-P600 underline"
                )}
              >
                {topicFile.isPreview && "العَرْض المُسَبَّق"}
              </span>
              {topicFile?.format === "Video" && <span>01:30</span>}
            </p>
          </button>
        </li>
      ) : (
        <li
          onClick={() => setPresentTest()}
          className="group flex cursor-pointer items-center gap-4 border-b border-gray-G20 pb-4"
        >
          {getIconName("test")}
          <span
            className={cn(
              sectionId === courseSectionTest.sectionId && "text-primary-P200",
              "flex-1"
            )}
          >
            تقييم
          </span>

          <span className="self-end font-medium">
            أسئلة {testDetail.length}
          </span>
        </li>
      )}
    </>
  );
};

export default TopicResource;
