import Icon from "../Icon";

export const ChangeProfileInput = ({
  label,
  value,
  disabled,
  onChange,
  ...otherAttributes
}) => (
  <div>
    <label
      htmlFor=""
      className="mb-3 inline-block text-sm font-bold text-gray-G30"
    >
      {label}
    </label>
    {/* <p className=" rounded border-2 bg-[#F9F9F9] px-2 py-2  text-neutral-N70 outline-none placeholder:py-1">
      {value && value}
    </p> */}
    <div className="flex items-center rounded border-2 bg-[#F9F9F9]">
      <input
        type="text"
        className="bg-[#F9F9F9] px-2 py-1 text-gray-G30 outline-none placeholder:py-1"
        value={value}
        disabled={disabled}
        {...otherAttributes}
      />
      <span className="h-full border-r-2 bg-[#F9F9F9] p-2 ltr:border-l-2 ltr:border-r-0">
        <Icon id={"pencil"} size={20} />
      </span>
    </div>
  </div>
);
