
import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(2).trim(),
    email: z.string().nonempty("email é obrigatório").email().toLowerCase(),
    password: z.string().min(4, "digite pelo menos 4 caractaeres"),
    confirmPassword: z.string(),
}).refine((data) => data.password == data.confirmPassword,{
    message: "as senhas não correspondem",
    path:["confirmPassword"]
} )