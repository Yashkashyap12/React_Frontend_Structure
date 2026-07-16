import {z} from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "Name must be minimum 3 characters"),
    email: z.string().email("Invalid email")
})

export type userFormValues = z.infer<typeof userSchema>;