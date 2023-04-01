import React from "react";
import tw, { styled } from "twin.macro";

const SectionCategory = ({ content, active }) => {
  return (
    <>
      <List active={active}>{content}</List>
    </>
  );
};

const List = styled.p(({ active }) => [
  active && tw`border-primary-P300 text-primary-P300 border-2 font-bold`,
  tw`cursor-pointer my-8 rounded-3xl border text-center px-4 py-2 bg-white`,
  `width:fit-content`,
]);

export default SectionCategory;
