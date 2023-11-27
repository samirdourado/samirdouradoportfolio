import * as z from "zod";

export const sendMailSchema = z.object({
    name: z.string().min(1, { message: "Insira seu nome" }),
    phone: z.string().min(10, { message: "Minimo 10 caracteres." }).max(11, { message: "Máximo 11 caracteres" }),
    email: z.string().email({ message: "Insira um email válido." }),
    text: z.string().min(1, {message: "A mensagem não pode ser vazia" }).max(600, { message: "Máximo 600 caracteres" })
})
