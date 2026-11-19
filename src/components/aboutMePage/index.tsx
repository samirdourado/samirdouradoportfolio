import { aboutMe } from "@/database/aboutMe.database";

export const AboutMePage = () => {
  return (
    <main className="w-full h-full mx-auto bg-whiteFixed flex flex-col justify-center items-center px-gutter xl:px-0 pt-[140px] pb-[40px]">
      <h2 id="about" className="text-6xl font-bold text-grey1 mb-4">
        Sobre mim
      </h2>
      <section className="w-full mx-auto flex flex-col items-center gap-4 xl:flex-row xl:justify-evenly">
        <section className="max-w-[600px] flex flex-col gap-2 justify-center items-center">
          {aboutMe.map((about, i) => (
            <p
              key={i}
              className="w-full max-w-[600px] flex items-center justify-center gap-2 text-lg text-center xl:text-left xl:justify-start"
            >
              {about}
            </p>
          ))}
        </section>
      </section>
    </main>
  );
};
