import { z } from "zod";

export const orderValidationSchema = z.object({
    body: z.object({
        // email: z.string().email("Invalid email format").min(1, "Email is required"),
        product: z.string().min(1, "Product is required"), // Assuming ObjectId is stored as a string
        quantity: z.number().min(1, "Quantity must be greater than 0"),
        totalPrice: z.number().min(0, "Total Price must be a positive number"),
    })
});


export default orderValidationSchema;