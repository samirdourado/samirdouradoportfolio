import "../../app/globals.css"
import "./style.css"

export const Fieldset = ({ id, type, label, placeholder, register }: any ) => {
    return (
        <fieldset className={"fieldset__container"}>
            <label className={"fieldset__label"} htmlFor={id}>{label}</label>
            <input className={"fieldset__input"} id={id} type={type} placeholder={placeholder} {...register} />            
        </fieldset>
    )
}