export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Минимум 6 символов, как требует Firebase
  return password.length >= 6;
};

export const validateLoginForm = (email, password) => {
  const errors = {};
  
  if (!email) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email";
  }
  
  if (!password) {
    errors.password = "Password is required";
  } else if (!validatePassword(password)) {
    errors.password = "Password must be at least 6 characters";
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegistrationForm = (email, password) => {
  const loginValidation = validateLoginForm(email, password);
  
  // Можно добавить дополнительные проверки для регистрации
  // Например, проверку на сложность пароля
  if (password && password.length < 8) {
    loginValidation.errors.password = "For better security, use at least 8 characters";
    loginValidation.isValid = false;
  }
  
  return loginValidation;
};