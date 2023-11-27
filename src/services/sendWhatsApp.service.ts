const handleWhatsApp = () => {        
    const urlMessage = "Oi Samir tudo bem ? Estou entrando em contato através do seu portfólio"
    const urlWhatsApp = "https://wa.me/5511991268979/?text=${urlMessage}"
    window.open(urlWhatsApp, "_blank");
};

export default handleWhatsApp