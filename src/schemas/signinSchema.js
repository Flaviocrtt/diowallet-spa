import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().nonempty("email é obrigatório").email().toLowerCase(),
    password: z.string().min(4, "digite pelo menos 4 caractaeres")
});