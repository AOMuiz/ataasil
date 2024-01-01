import { cn } from "../utils/helpers";

const SectionHeader = ({ title, className }) => {
  return <p className={cn("mb-8 text-3xl font-bold", className)}>{title}</p>;
};

export default SectionHeader;
