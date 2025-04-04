
import { z } from "zod";

export const transactionSchema = z.object({
    value: z.string().transform((value) => Number(value)),
    description: z.string().min(3, "digite pelo menos 3 caractaeres"),
    confirmPassword: z.string(),
});