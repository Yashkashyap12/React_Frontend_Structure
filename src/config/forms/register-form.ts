import type { RegisterFormData } from "../../schemas/authSchema";

interface FormField {
  name: keyof RegisterFormData;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  required?: boolean;
}

export const registerForm: FormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm password",
    required: true,
  },
];
