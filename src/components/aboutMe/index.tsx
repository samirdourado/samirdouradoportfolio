import { aboutMe } from "@/database/aboutMe.database";

export const AboutMe = () => {
  return (
    <section id="about" className="w-full flex flex-col gap-4 items-center">
      <h2 className="text-6xl font-bold text-grey1 mb-4">Sobre mim</h2>
      <div className="flex flex-col gap-2 justify-center items-center">
        {aboutMe.map((about, i) => (
          <p
            key={i}
            className="w-full max-w-[600px] flex items-center justify-center gap-2 text-lg text-center xl:text-left xl:justify-start"
          >
            {about}
          </p>
        ))}
      </div>
    </section>
  );
};
