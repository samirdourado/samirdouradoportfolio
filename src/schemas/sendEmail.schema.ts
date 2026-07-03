import * as z from "zod";
import { regexTel } from "@/utils/regex";

export const sendMailSchema = z.object({
    name: z.string().min(1, { message: "Insira seu nome" }),
    phone: z.string().regex(regexTel, { message: "Informe um telefone válido no formato (11) 91234-5678 ou (11) 5555-5555" }),
    email: z.string().email({ message: "Insira um email válido." }),
    text: z.string().min(1, {message: "A mensagem não pode ser vazia" }).max(600, { message: "Máximo 600 caracteres" })
})
