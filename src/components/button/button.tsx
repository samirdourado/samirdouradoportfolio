import "../../app/globals.css"
import "./style.css"

interface iButton {    
    onClick: any;
    type: any;
    icon: any;
    textBtn: string;
} 

export const Button = ({ onClick, type, icon, textBtn }: iButton) => {
    return (
        <button className={"button__container"} onClick={ onClick } type={ type }>{ icon }{ textBtn }</button>
    )
}