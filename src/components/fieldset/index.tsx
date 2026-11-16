export const Fieldset = ({ id, type, label, placeholder, register }: any ) => {
    return (
        <fieldset className="w-full mx-auto flex flex-col justify-center items-start gap-1">
            <label className="w-full text-lg" htmlFor={id}>{label}</label>
            <input
                className="w-full h-9 pl-2 border-0 rounded-lg border-grey9 bg-grey9 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </fieldset>
    )
}
