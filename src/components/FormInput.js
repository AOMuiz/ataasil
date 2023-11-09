const FormInput = ({
  label,
  htmlFor,
  type,
  value,
  details,
  onChange,
  disabled,
  ...otherAttributes
}) => (
  <>
    {label && (
      <label htmlFor={htmlFor} className="py-2">
        {label}
      </label>
    )}
    <input
      type={`${type ? type : "text"}`}
      value={value}
      className="rounded border-2 bg-[#F9F9F9] px-2 py-3 text-gray-G30 placeholder:py-1 placeholder:text-neutral-400"
      disabled={disabled}
      {...otherAttributes}
    />
  </>
);

export default FormInput;
