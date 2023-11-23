"use client"
import { Fieldset } from "../fieldset"
import { TextArea } from "../textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailSchema } from "@/schemas/sendEmail.schema";
import "../../app/globals.css"
import "./style.css"
// import emailjs from '@emailjs/browser';
import sendEmail from "@/services/sendEmail.service";
import { useState } from "react";
import React from 'react';



export const Contact = () => {

    const [submiting, setSubmiting] = useState(false)
    

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: zodResolver(sendMailSchema),         
    })
    
    const submit = async (formData: any) => {   

      try {
        setSubmiting(true)
        await sendEmail(formData)
        reset()
      } catch (error) {
        console.log(error)
      } finally {
        setSubmiting(false)
      }
    }
    
    return (
        <section className={"contact__container"}>            
            <form className={"contact__wrapper"} noValidate onSubmit={handleSubmit(submit)}>
                <Fieldset id={"name"} type={"text"} label={"Nome:"} placeholder={"Informe seu nome"} register={register("name")}/>
                {errors.name && typeof errors.name.message === 'string' && (<p className={"fieldset__error"}>{errors.name.message}</p>)}

                <Fieldset id={"phone"} type={"number"} label={"Telefone:"} placeholder={"Informe seu número"} register={register("phone")}/>
                {errors.phone && typeof errors.phone.message === 'string' && (<p className={"fieldset__error"}>{errors.phone.message}</p>)}
                
                <Fieldset id={"email"} type={"email"} label={"E-mail:"} placeholder={"Informe seu e-mail"} register={register("email")}/>
                {errors.email && typeof errors.email.message === 'string' && (<p className={"fieldset__error"}>{errors.email.message}</p>)}

                <TextArea id={"text"} type={"text"} label={"Mensagem:"} placeholder={"Escreva sua mensagem"}  register={register("text")}/>
                {errors.text && typeof errors.text.message === 'string' && (<p className={"fieldset__error"}>{errors.text.message}</p>)}

                <button type="submit">{ submiting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </section>
    )
}
