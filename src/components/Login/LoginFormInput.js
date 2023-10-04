import React from "react";

const FormInput = ({ register, type, label, placeholder, id, errors }) => {
  return (
    <div className="mb-12 md:mb-6">
      <label
        htmlFor={id}
        className="mb-4 block pb-4 text-sm font-bold text-gray-G30"
      >
        {label}
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border-2 bg-primary-P700 p-4 text-gray-G30 outline-none placeholder:text-lg placeholder:placeholder-gray-G30 2md:w-2/3 md:w-full"
      />
      {errors && <p tw="text-red-400">{errors?.message}</p>}
    </div>
  );
};

export default FormInput;
