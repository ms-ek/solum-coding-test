import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "../constants/measures";
import isEmail from "validator/lib/isEmail";

export type FieldStateProps = {
  value: string;
  isInvalid?: boolean;
  errorMessage?: string;
};

function getErrorMessageIsEmpty(label: string) {
  return `${label} is mandatory.`;
}

function validateEmail(email: string): FieldStateProps {
  const trimmedEmail = email.trim();
  const isEmailEmpty = trimmedEmail === "";
  if (isEmailEmpty) {
    return {
      value: trimmedEmail,
      isInvalid: true,
      errorMessage: getErrorMessageIsEmpty("Email"),
    };
  }
  if (!isEmail(trimmedEmail)) {
    return {
      value: trimmedEmail,
      isInvalid: true,
      errorMessage: "Email is not valid",
    };
  }
  return {
    value: trimmedEmail,
  };
}

function validatePassword(password: string): FieldStateProps {
  const trimmedPassword = password.trim();
  const isPasswordEmpty = trimmedPassword === "";
  if (isPasswordEmpty) {
    return {
      value: trimmedPassword,
      isInvalid: true,
      errorMessage: getErrorMessageIsEmpty("Password"),
    };
  }
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
  const isInvalidPasswordLength = trimmedPassword.length < PASSWORD_MIN_LENGTH || trimmedPassword.length > PASSWORD_MAX_LENGTH;
  const isInvalidPasswordFormat = !regex.test(trimmedPassword);
  if (isInvalidPasswordLength || isInvalidPasswordFormat) {
    return {
      value: trimmedPassword,
      isInvalid: true,
      errorMessage: `Password must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters and must contain one uppercase letter, one lowercase letter, one number and one symbol.`,
    };
  }
  return {
    value: trimmedPassword,
  };
}

export { validateEmail, validatePassword };
