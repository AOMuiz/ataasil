import { cn } from "../utils/helpers";

const CtaButton = ({ children, disabled, className, ...rest }) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        `w-auto cursor-pointer rounded-full bg-primary-P300 px-6 py-3 text-center text-white`,
        className && `${className}`,
        disabled && `cursor-not-allowed bg-[#D5D5D5]`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CtaButton;
