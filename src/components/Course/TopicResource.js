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
  previewMode,
  showPreviewModal,
  setShowPreviewModal,
}) => {
  const courseDataFile = useReactiveVar(presentCourseFileDetail);
  const courseSectionTest = useReactiveVar(presentCourseSectionTest);

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

  useEffect(() => {
    setActive(courseDataFile.fileTitle);
  }, [active, courseDataFile.fileTitle]);

  const getIconName = (type) => {
    switch (type) {
      case "Video":
        return (
          <Icon
            id={topicFile?.title === active ? "play" : "video"}
            size={22}
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
            disabled={previewMode && topicFile.isPreview === false}
            onClick={() => {
              setPresentFile();
              previewMode && setShowPreviewModal(true);
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
                    previewMode &&
                      topicFile.isPreview &&
                      "text-primary-P600 underline"
                  )}
                >
                  {topicFile?.title}
                </span>
              }
            </p>

            <p className={cn("self-end font-medium")}>
              {previewMode && (
                <span
                  className={cn(
                    "self-end pe-2 font-medium",
                    topicFile.isPreview && "text-primary-P600 underline"
                  )}
                >
                  {topicFile.isPreview && "العَرْض المُسَبَّق"}
                </span>
              )}
              {topicFile?.format === "Video" && <span>01:30</span>}
            </p>
          </button>
        </li>
      ) : (
        <li>
          <button
            disabled={previewMode}
            onClick={() => setPresentTest()}
            className={cn(
              "group flex w-full cursor-pointer items-center justify-between gap-4 border-b border-gray-G20 pb-4"
            )}
          >
            <p className="flex gap-4">
              {getIconName("test")}
              <span
                className={cn(
                  sectionId === courseSectionTest.sectionId &&
                    "text-primary-P200",
                  "flex-1"
                )}
              >
                تقييم
              </span>
            </p>

            <span className="font-medium">أسئلة {testDetail.length}</span>
          </button>
        </li>
      )}
    </>
  );
};

export default TopicResource;
