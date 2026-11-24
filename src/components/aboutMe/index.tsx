import { aboutMe } from "@/database/aboutMe.database";

export const AboutMe = () => {
  return (
    <section className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start">
      {aboutMe.map((about, i) => (
        <p key={i} className="w-full max-w-xl text-lg text-center md:text-left">
          {about}
        </p>
      ))}
    </section>
  );
};
