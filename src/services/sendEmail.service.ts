import { SendEmail } from "@/interfaces/sendEmail.interface"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const apiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const sendEmail = async (formData: SendEmail) => {

  if (!serviceId || !apiKey) {
    toast.error("Tente outra forma de contato");
    return;
  }

  const templateParams  = {
    from_name: formData.name,
    phone: formData.phone,
    email: formData.email,
    message: formData.text
  };

      await emailjs.send(serviceId, "portfolio-contato", templateParams, apiKey)
      .then(() => {          
          toast.success("Email enviado")
        }, (error) => {
          console.log(error)
          toast.error("Algo deu errado")
        }) 
};

export default sendEmail