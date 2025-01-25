import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email. Please provide valid email."),
        password: z.string().min(5, "Password must be at least 6 characters long"),
    })
})

export default createUserValidationSchema;