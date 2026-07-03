"use client"
import { Fieldset } from "../fieldset"
import { TextArea } from "../textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMailSchema } from "@/schemas/sendEmail.schema";
import sendEmail from "@/services/sendEmail.service";
import { useState } from "react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import "../../app/globals.css"
import "./style.css"

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "")
  const ddd = digits.slice(0, 2)
  const rest = digits.slice(2)

  if (digits.length <= 2) return `(${digits}`
  if (rest.length <= 4) return `(${ddd}) ${rest}`

  if (rest[0] === "9") {
    if (rest.length <= 5) return `(${ddd}) ${rest}`
    if (rest.length <= 9) return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`
  }

  if (rest.length <= 4) return `(${ddd}) ${rest}`
  if (rest.length <= 8) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`
  return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4, 8)}`
}

export const Contact = () => {

    const [submiting, setSubmiting] = useState(false)    

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
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
          {errors.name && typeof errors.name.message === "string" && (<p className={"fieldset__error"}>{errors.name.message}</p>)}

          <Fieldset id={"phone"} type={"tel"} label={"Telefone:"} placeholder={"DDD + Número"} inputMode={"tel"} register={register("phone", {
            onChange: (event) => {
              const masked = formatPhone(event.target.value)
              event.target.value = masked
              setValue("phone", masked, { shouldValidate: true })
            }
          })}/>
          {errors.phone && typeof errors.phone.message === "string" && (<p className={"fieldset__error"}>{errors.phone.message}</p>)}
          
          <Fieldset id={"email"} type={"email"} label={"E-mail:"} placeholder={"Informe seu e-mail"} register={register("email")}/>
          {errors.email && typeof errors.email.message === "string" && (<p className={"fieldset__error"}>{errors.email.message}</p>)}

          <TextArea id={"text"} type={"text"} label={"Mensagem:"} placeholder={"Escreva sua mensagem"}  register={register("text")}/>
          {errors.text && typeof errors.text.message === "string" && (<p className={"fieldset__error"}>{errors.text.message}</p>)}

          <button type="submit">{ submiting ? <><SiMinutemailer size={25}  />Enviando...</> : <><MdEmail size={25} />Enviar</> }</button>                
        </form>
      </section>
    )
}
