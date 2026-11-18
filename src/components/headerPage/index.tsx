import Link from "next/link";
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs";

export const HeaderPage = () => {
  return (
    <main
      id={"home"}
      className="w-full h-screen flex flex-col justify-center items-center px-gutter xl:px-0 bg-brand1"
    >
      <section className="w-full flex flex-col max-w-[310px] md:max-w-[660px] xl:max-w-[900px]">
        <p className="text-whiteFixed text-lg md:text-3xl">
          Olá, me chamo <span className="text-black">Samir Dourado</span>, sou
        </p>
        <h2 className="text-whiteFixed text-4xl md:text-8xl xl:text-9xl font-black tracking-[3.9px] md:tracking-[6px] xl:tracking-[10px]">
          FULLSTACK
        </h2>
        <h2 className="text-whiteFixed text-4xl md:text-8xl xl:text-9xl font-black tracking-wider">
          DEVELOPER
        </h2>
        <div className="w-full flex flex-col items-center justify-between gap-3 max-w-[310px] h-[145px] md:max-w-[580px] md:h-[270px] xl:flex-row-reverse xl:max-w-[860px] xl:h-[62px] xl:w-full">
          <p className="text-whiteFixed text-right text-lg md:text-3xl xl:text-2xl">
            tenho 41 anos, sou de São Paulo, role a página e saiba um pouco mais
            sobre mim.
          </p>
          <nav className="flex justify-between items-center self-center h-8 w-[134px] md:h-[60px] md:w-[253px] xl:h-[62px] xl:w-[220px]">
            <Link href={"https://github.com/samirdourado"} target="_blank">
              <BsGithub size={30} color="white" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/samirdourado"}
              target="_blank"
            >
              <BsLinkedin size={30} color="white" />
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1sQw3VcfjjOjVzP8cgS9JKSkSQN7TlKIG/view?usp=drive_link"
              }
              target="_blank"
            >
              <BsFillFilePdfFill size={30} color="white" />
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
};
