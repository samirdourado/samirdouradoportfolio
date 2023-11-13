"use client"
import { Fieldset } from "../fieldset"
import { TextArea } from "../textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailSchema } from "@/schemas/sendEmail.schema";
import "../../app/globals.css"
import "./style.css"

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: zodResolver(sendMailSchema)
    })
    
    const submit = (formData: any) => {
        console.log(formData)
    }
    
    return (
        <section className={"contact__container"}>
            <h1>Contato</h1>
            <form className={"contact__wrapper"} noValidate onSubmit={handleSubmit(submit)}>
                <Fieldset id={"name"} type={"text"} label={"Nome:"} placeholder={"Informe seu nome"} register={register("name")}/>
                {errors.name && typeof errors.name.message === 'string' && (<p className={"fieldset__error"}>{errors.name.message}</p>)}

                <Fieldset id={"phone"} type={"number"} label={"Telefone:"} placeholder={"Informe seu número"} register={register("phone")}/>
                {errors.phone && typeof errors.phone.message === 'string' && (<p className={"fieldset__error"}>{errors.phone.message}</p>)}

                <Fieldset id={"email"} type={"email"} label={"E-mail:"} placeholder={"Informe seu e-mail"} register={register("email")}/>
                {errors.email && typeof errors.email.message === 'string' && (<p className={"fieldset__error"}>{errors.email.message}</p>)}

                <TextArea id={"text"} type={"text"} label={"Mensagem:"} placeholder={"Escreva sua mensagem"}  register={register("text")}/>
                {errors.text && typeof errors.text.message === 'string' && (<p className={"fieldset__error"}>{errors.text.message}</p>)}

                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}
