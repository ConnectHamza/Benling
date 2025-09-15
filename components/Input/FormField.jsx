import React from 'react'
function FormField({
  type = "text",
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  options = [],
  ...restProps
}) {
  const inputClass = `w-full p-3 rounded-md border font-jakarta focus:outline-none focus:ring-2 ${error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-300"
    }`;

  if (type === "textarea") {
    return (
      <div className="mb-4">
        <textarea
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          rows={4}
          {...restProps}
        />
        {error && <p className="text-red-500 text-sm mt-1 font-jakarta">{error}</p>}
      </div>
    );
  }
  if (type === "custom-select") {
    return (
      <CustomSelect
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        error={error}
        inputClass={inputClass}
        {...restProps}
      />
    );
  }
  if (type === "select") {
    return (
      <div className="mb-4">
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${inputClass} bg-white`}
          {...restProps}
        >
          <option className='font-jakarta font-normal' value="">{label}</option>
          {options.map(({ name: optName, value: optValue }, idx) => (
            <option key={idx} value={optValue}>
              {optName}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1 font-jakarta">{error}</p>}
      </div>
    );
  }
  if (type === "radio") {
    return (
      <div className="mb-4">
        <div className="flex gap-6">
          {options.map(({ name: optName, value: optValue }, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={optValue}
                checked={value === optValue}
                onChange={onChange}
                onBlur={onBlur}
                className="accent-crownOrange"
                {...restProps}
              />
              <span>{optName}</span>
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1 font-jakarta">{error}</p>}
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div className="mb-4">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name={name}
            checked={!!value}
            onChange={onChange}
            onBlur={onBlur}
            className="mt-1 accent-crownOrange"
            {...restProps}
          />
          {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1 font-jakarta">{error}</p>}
      </div>
    );
  }
  // Default input (text, email, password, etc)
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass}
        {...restProps}
      />
        {error && <p className="text-red-500 text-sm mt-1 font-jakarta">{error}</p>}
    </div>
  );
}


export default FormField;
