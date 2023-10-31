import "../../app/globals.css"
import { Fieldset } from "../fieldset"
import { TextArea } from "../textarea"
import "./style.css"

// const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     mode: "onBlur"
//     // resolver: zodResolver(sendMailSchema)
// })

const submit = (formData: any) => {
    console.log(formData)
    // reset()
}

export const Contact = () => {
    return (
        <section className={"contact__container"}>
            <h1>Contato</h1>
            <form className={"contact__wrapper"} noValidate 
            // onSubmit={handleSubmit(submit)}
            >
                <Fieldset id={"name"} type={"text"} label={"Nome:"} placeholder={"Informe seu nome"} errors={"O campo nome precisa estar preenchido"}
                // register={register("name")}
                />
                <Fieldset id={"phone"} type={"number"} label={"Telefone:"} placeholder={"Informe seu número"} errors={"numero com até 11 caracteres"}
                // register={register("phone")}
                />
                <Fieldset id={"email"} type={"email"} label={"E-mail:"} placeholder={"Informe seu e-mail"} errors={"Informe um e-mail válido"}
                // register={register("email")}
                />
                <TextArea id={"message"} type={"text"} label={"Mensagem:"} placeholder={"Escreva sua mensagem"} errors={"Mensagem inválida"}
                // register={register("message")}
                />
                {/* <Fieldset id={"message"} type={"text"} label={"Mensagem:"} placeholder={"Escreva sua mensagem"} errors={"Mensagem inválida"}
                // register={register("message")}
                /> */}
                <button type="submit">Enviar</button>

            </form>
        </section>
    )
}