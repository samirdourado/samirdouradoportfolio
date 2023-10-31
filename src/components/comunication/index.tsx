import "../../app/globals.css"
import "./style.css"
import { Contact } from "../contact"

export const Comunication = () => {
    return (
        <section className={"comunication__container"}>
            <div className={"comunication__container__distort"}>
                <div className={"comunication__container__normalize"}>
                    <Contact/>
                    
                </div>

            </div>

        </section>
    )
}