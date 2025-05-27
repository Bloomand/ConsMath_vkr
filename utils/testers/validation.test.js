import {
  validateEmail,
  validatePassword,
  validateLoginForm,
  validateRegistrationForm
} from '../helpers/validationFunctions';

// Тесты для функции validateEmail
describe('validateEmail', () => {
  // Проверка валидных email-адресов
  test('valid emails', () => {
    expect(validateEmail('user@example.com')).toBe(true); // Стандартный email
    expect(validateEmail('first.last@example.com')).toBe(true); // С точкой в локальной части
    expect(validateEmail('user+tag@example.com')).toBe(true); // С плюсом
  });

  // Проверка невалидных email-адресов
  test('invalid emails', () => {
    expect(validateEmail('userexample.com')).toBe(false); // Отсутствие @
    expect(validateEmail('user@example')).toBe(false);    // Нет домена верхнего уровня
    expect(validateEmail('user@.com')).toBe(false);      // Пустой домен после @
    expect(validateEmail('@example.com')).toBe(false);   // Отсутствие локальной части
    expect(validateEmail('user@example..com')).toBe(false); // Двойные точки в домене
  });

  // Проверка регистронезависимости
  test('case insensitive', () => {
    expect(validateEmail('USER@EXAMPLE.COM')).toBe(true); // Должен пропускать email в верхнем регистре
  });
});

// Тесты для функции validatePassword
describe('validatePassword', () => {
  // Проверка валидных паролей (длина ≥6 символов)
  test('valid passwords', () => {
    expect(validatePassword('123456')).toBe(true);      // Ровно 6 символов
    expect(validatePassword('longpassword')).toBe(true); // Более 6 символов
  });

  // Проверка невалидных паролей
  test('invalid passwords', () => {
    expect(validatePassword('12345')).toBe(false);      // 5 символов (меньше минимума)
    expect(validatePassword('')).toBe(false);           // Пустая строка
  });
});

// Тесты для функции validateLoginForm
describe('validateLoginForm', () => {
  // Проверка полностью валидной формы
  test('valid form', () => {
    const result = validateLoginForm('user@example.com', 'password');
    expect(result.isValid).toBe(true); // Форма должна быть валидной
    expect(result.errors).toEqual({}); // Не должно быть ошибок
  });

  // Проверка пустого email
  test('empty email', () => {
    const result = validateLoginForm('', 'password');
    expect(result.isValid).toBe(false); // Форма невалидна
    expect(result.errors).toEqual({
      email: 'Email is required', // Должна быть ошибка о необходимости email
    });
  });

  // Проверка невалидного email
  test('invalid email', () => {
    const result = validateLoginForm('invalid', 'password');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      email: 'Please enter a valid email', // Должна быть ошибка формата email
    });
  });

  // Проверка пустого пароля
  test('empty password', () => {
    const result = validateLoginForm('user@example.com', '');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      password: 'Password is required', // Ошибка о необходимости пароля
    });
  });

  // Проверка короткого пароля
  test('short password', () => {
    const result = validateLoginForm('user@example.com', '12345');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      password: 'Password must be at least 6 characters', // Ошибка о минимальной длине
    });
  });

  // Проверка нескольких ошибок одновременно
  test('multiple errors', () => {
    const result = validateLoginForm('', '123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      email: 'Email is required', // Ошибка email
      password: 'Password must be at least 6 characters', // Ошибка пароля
    });
  });
});

// Тесты для функции validateRegistrationForm
describe('validateRegistrationForm', () => {
  // Проверка полностью валидной формы регистрации
  test('valid form', () => {
    const result = validateRegistrationForm('user@example.com', 'password');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  // Проверка наследования ошибок валидации от loginForm
  test('inherits login validation errors', () => {
    const result = validateRegistrationForm('invalid', '123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      email: 'Please enter a valid email', // Ошибка email
      password: 'For better security, use at least 8 characters', // Уже сообщение для регистрации
    });
  });

  // Проверка дополнительного требования к длине пароля (8+ символов)
  test('additional password length requirement', () => {
    const result = validateRegistrationForm('user@example.com', '1234567');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual({
      password: 'For better security, use at least 8 characters', // Специфичное для регистрации сообщение
    });
  });

  // Проверка приоритета сообщений об ошибках пароля
  test('password length message priority', () => {
    // Для коротких паролей (даже <6) показываем регистрационное сообщение
    const resultShort = validateRegistrationForm('user@example.com', '12345');
    expect(resultShort.errors.password).toBe('For better security, use at least 8 characters');

    // Для паролей 7 символов - то же сообщение
    const resultMedium = validateRegistrationForm('user@example.com', '1234567');
    expect(resultMedium.errors.password).toBe('For better security, use at least 8 characters');

    // Для валидных паролей (8+) нет ошибок
    const resultLong = validateRegistrationForm('user@example.com', '12345678');
    expect(resultLong.errors.password).toBeUndefined();
  });
});