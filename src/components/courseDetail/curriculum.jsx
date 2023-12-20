import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "../../utils/helpers";
import Icon from "../Icon";
import TopicResource from "../Course/TopicResource";
import PreviewModal from "./PreviewModal";

const Curriculum = ({ curriculum }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Accordion.Root
        className="rounded-md border shadow-neutral-200"
        type={curriculum?.course_getSections.length > 1 ? "multiple" : "single"}
        defaultValue={
          curriculum.course_getSections.length > 1
            ? curriculum.course_getSections[0]._id
            : ""
        }
        collapsible="true"
      >
        {curriculum &&
          curriculum.course_getSections.map((section) => (
            <AccordionItem value={section._id} key={section._id}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {section.files.map((file) => (
                    <TopicResource
                      topicFile={file}
                      key={file.title}
                      sectionId={section._id}
                      format={"file"}
                      previewMode={true}
                      setShowPreviewModal={setOpen}
                    />
                  ))}
                  {section.test && (
                    <TopicResource
                      format={"test"}
                      sectionId={section._id}
                      testDetail={section.test}
                      previewMode={true}
                    />
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion.Root>
      <PreviewModal open={open} setOpen={setOpen} />
    </>
  );
};

// eslint-disable-next-line react/display-name
const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        `mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-neutral-N60`,
        className && `${className}`
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

// eslint-disable-next-line react/display-name
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex bg-[#f7f9fa]">
      <Accordion.Trigger
        className={cn(
          "hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] font-bold  leading-none text-gray-950 shadow-[0_1px_0] shadow-gray-200 outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Icon
          id="chevron-down"
          className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// eslint-disable-next-line react/display-name
const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "text-mauve11 bg-mauve2 overflow-hidden text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-[15px]">{children}</div>
    </Accordion.Content>
  )
);

export default Curriculum;
