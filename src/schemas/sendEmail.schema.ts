import * as z from 'zod';

export const sendMailSchema = z.object({
    name: z.string().min(1, { message: "Insira seu nome" }),
    phone: z.string().min(11, { message: "Telefone com DDD." }),
    email: z.string().email({ message: "Insira um email válido." }),
    text: z.string().min(1, {message: "A mensagem não pode ser vazia" }).max(600, { message: "Máximo 600 caracteres" })
})
