import { z } from "zod";

const orderItemSchema = z.object({
    product: z.string(),
    quantity: z.number()
});

export const orderValidationSchema = z.object({
    body: z.object({
        items: z.array(orderItemSchema).min(1, "At least one item is required"),
        totalQuantity: z.number().min(1, "Total quantity must be at least 1"),
        totalPrice: z.number().min(0, "Total price must be a positive number"),
    })
});



export default orderValidationSchema;