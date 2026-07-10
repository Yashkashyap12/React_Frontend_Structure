type FormFieldName =
  | "name"
  | "email"
  | "password"
  | "confirmPassword";

export interface FormField {
  id: number;
  name: FormFieldName;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  required: boolean;
}

export const registerForm: FormField[] = [
  {
    id: 1,
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter Full Name",
    required: true,
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
    required: true,
  },
  {
    id: 4,
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter Confirm Password",
    required: true,
  },
];