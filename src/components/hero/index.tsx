import Link from "next/link";
import Image from "next/image";
import { ImNewTab } from "react-icons/im";
import { ReactNode } from "react";
import { geGitHubProfile } from "@/services/githubApi.service";

export const Hero = async () => {
  const profile = await geGitHubProfile("samirdourado");
  if (!profile) return null;
  type iContactLinks = {
    label: string;
    href: string;
    ariaLabel: string;
    icon: ReactNode;
  };

  const contactLinks = [
    {
      label: "Currículo",
      href: "https://drive.google.com/file/d/1RXV5blashO10GzbmgV3jE71_eCkiQHOT/view?usp=sharing",
      ariaLabel:
        "Abrir currículo do Samir Dourado desenvolvedor fullstack no Google Drive em uma nova aba",
      icon: <ImNewTab />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samirdourado/",
      ariaLabel: "Visitar perfil do Samir Dourado no LinkedIn em uma nova aba",
      icon: <ImNewTab />,
    },
    {
      label: "GitHub",
      href: "https://github.com/samirdourado",
      ariaLabel: "Visitar perfil do Samir Dourado no GitHub em uma nova aba",
      icon: <ImNewTab aria-hidden="true" />,
    },
  ];

  return (
    <main
      id={"home"}
      className="w-full flex flex-col justify-center items-center bg-brand1"
    >
      <section className="w-full max-w-7xl flex flex-col items-center gap-10 px-gutter md:flex-row md:justify-between md:items-center xl:px-0 pt-5">
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg">Olá, me chamo</p>
            <h1 className="text-2xl font-bold flex md:text-4xl">
              Samir Dourado
            </h1>
            <p className="text-lg">sou desenvolvedor de software.</p>
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            {contactLinks.map((contact: iContactLinks) => (
              <Link
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
                className="w-full relative overflow-hidden flex items-center justify-center gap-2 border rounded-full border-brand5 py-3 px-6  transition-colors duration-300 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-brand5 before:transition-all before:duration-300 before:ease-out hover:before:w-full"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 hover:font-bold transition-all">
                  {contact.icon} {contact.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <figure className="flex flex-col justify-center items-center">
          <Image
            src={profile.avatar_url}
            alt={`Foto de ${profile.name}` || "Foto de perfil."}
            width={350}
            height={350}
            priority
            className="border-4 border-solid rounded-full border-brand5"
          />
        </figure>
      </section>
    </main>
  );
};
