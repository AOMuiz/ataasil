const SectionListCard = ({ title, content, number }) => {
  return (
    <>
      {/* {alternative version using flexbox and negative margin} */}
      {/* <article className="bg-white flex gap-3 px-7 py-5">
        <div className="bg-primary-P300 rounded-full self-center -mr-[50px] text-center h-12 w-12 flex items-center justify-center">
          <span className="text-2xl text-white">{number}</span>
        </div>
        <div className="flex-1">
          <p className="text-lg pb-5 font-normal">{title}</p>
          <p className="text-gray-G30">{content}</p>
        </div>
      </article> */}
      {/* -------------------- */}
      {/* initial version using relative abd absolute positioning */}
      <article className="relative bg-white px-7 py-5">
        <div className="absolute -right-1 top-2/4 flex h-12 w-12 -translate-y-2/4 translate-x-2/4 items-center justify-center rounded-full bg-primary-P300 text-center">
          <span className="text-2xl text-white">{number}</span>
        </div>
        <p className="pb-5 text-lg font-normal">{title}</p>
        <p className="text-gray-G30">{content}</p>
      </article>
    </>
  );
};

export default SectionListCard;
