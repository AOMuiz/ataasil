import tw, { styled } from "twin.macro";

const CtaButton = ({ children, disabled, className }) => {
  return (
    <CTA disabled={disabled} className={className}>
      {children}
    </CTA>
  );
};

export default CtaButton;

const CTA = styled.button(({ disabled }) => [
  disabled
    ? tw`bg-[#D5D5D5] cursor-not-allowed`
    : tw` bg-primary-P300 cursor-pointer`,
  tw`rounded-full w-auto text-center text-white px-6 py-3`,
]);
