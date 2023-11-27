import { SendEmail } from "@/interfaces/sendEmail.interface"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

const sendEmail = async (formData: SendEmail) => {

    const templateParams  = {
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.text
      };

      await emailjs.send("service_svg6xev", "portfolio-contato", templateParams, "YQ1eb23BlZct2MFH4")
      .then(() => {          
          toast.success("Email enviado")
        }, (error) => {
          console.log(error)
          toast.error("Algo deu errado")
        }) 
};

export default sendEmail