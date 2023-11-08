export const ChangeProfileInput = ({
  label,
  value,
  disabled,
  onChange,
  editMode,
  htmlFor,
  name,
  type,
  ...otherAttributes
}) => (
  <div className="max-w-[200px]">
    <label
      htmlFor={htmlFor}
      className="mb-3 inline-block text-sm font-bold text-gray-G30"
    >
      {label}
    </label>
    <div>
      {disabled ? (
        <input
          className="w-full rounded border-2 bg-[#F9F9F9] p-2 text-neutral-N70"
          value={value}
        />
      ) : (
        <input
          type={type ? type : "text"}
          className="w-full rounded border-2 bg-[#fbfbfb]  p-2 text-gray-G30  placeholder:py-1"
          value={value}
          name={name}
          htmlFor={htmlFor}
          onChange={onChange}
          {...otherAttributes}
        />
      )}
    </div>
  </div>
);
