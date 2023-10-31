import "../../app/globals.css"
import "./style.css"

export const TextArea = ({ id, type, label, placeholder, errors, register }: any ) => {
    return (
        <fieldset className={"textarea__container"}>
            <label className={"textarea__label"} htmlFor={id}>{label}</label>
            <textarea className={"textarea__input"} id={id} type={type} placeholder={placeholder} {...register} />
            <p className={"textarea__error"}>{ errors }</p>
        </fieldset>
    )
}