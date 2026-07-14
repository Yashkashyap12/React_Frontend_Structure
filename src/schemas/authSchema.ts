import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be minimum 3 characters"),

    email: z.string().email("Invalid email"),

    password: z.string().min(8, "Password must be minimum 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),

  password: z.string().min(8, "Password must be minimum 8 characters"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;
