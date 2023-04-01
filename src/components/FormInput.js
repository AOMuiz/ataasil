const FormInput = ({ label, htmlFor, type, value, ...otherAttributes }) => (
  <>
    {label && (
      <label htmlFor={htmlFor} className="py-2">
        {label}
      </label>
    )}
    <input
      type={`${type ? type : "text"}`}
      value={value}
      className="rounded border-2 bg-[#F9F9F9] py-3 px-2 placeholder:py-1"
      {...otherAttributes}
    />
  </>
);

export default FormInput;
