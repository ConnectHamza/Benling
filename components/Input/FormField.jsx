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
  const inputClass = `w-full p-3 rounded-md border ${error ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-orange-400`;

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
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
          <option value="">{label}</option>
          {options.map(({ name: optName, value: optValue }, idx) => (
            <option key={idx} value={optValue}>
              {optName}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div className="mb-4">
        <label className="block mb-2 font-medium">{label}</label>
        <div className="flex gap-4">
          {options.map(({ name: optName, value: optValue }, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={optValue}
                checked={value === optValue}
                onChange={onChange}
                onBlur={onBlur}
                {...restProps}
              />
              {optName}
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name={name}
            checked={!!value}
            onChange={onChange}
            onBlur={onBlur}
            {...restProps}
          />
          {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}


export default FormField;
const CustomSelect = ({
  name,
  label,
  value,
  options,
  onChange,
  onBlur,
  error,
  inputClass,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const selectedOption = options.find(opt => opt.value === value);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        onBlur?.(); // Trigger validation on close
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBlur]);

  const handleSelect = (value) => {
    const syntheticEvent = {
      target: {
        name,
        value,
        type: "select",
      },
    };
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  return (
    <div className="mb-4 relative" ref={containerRef}>
      <div
        className={`${inputClass} cursor-pointer flex items-center justify-between`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span>{selectedOption?.name || label}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-3 cursor-pointer hover:bg-orange-50 ${
                option.value === value ? "bg-orange-50" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};