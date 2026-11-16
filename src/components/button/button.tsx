interface iButton {
    onClick: any;
    type: any;
    icon: any;
    textBtn: string;
}

export const Button = ({ onClick, type, icon, textBtn }: iButton) => {
    return (
        <button
            className="w-full max-w-[400px] bg-brand3 flex justify-center items-center gap-3 p-3 border-0 rounded-lg mt-3"
            onClick={onClick}
            type={type}
        >
            {icon}{textBtn}
        </button>
    )
}
