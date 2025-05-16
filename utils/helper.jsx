export const validateField = (name, value, type = "text") => {
  let error = "";
  const trimmed = typeof value === "string" ? value.trim() : value;

  if (type === "checkbox") {
    if (!value) error = "This field is required";
  } else if (!trimmed) {
    error = "This field is required";
  } else {
    switch (name) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
          error = "Invalid email address";
        break;
      case "phone":
        if (!/^\+?[0-9]{7,15}$/.test(trimmed))
          error = "Invalid phone number";
        break;
      default:
        break;
    }
  }
  return error;
};
