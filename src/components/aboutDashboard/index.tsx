import { aboutDashboard, aboutExperience } from "@/database/aboutMe.database";

export const AboutDashboard = () => {
  return (
    <aside className="w-full md:w-1/2 grid grid-cols-2 content-stretch gap-3 text-center md:text-left">
      <div className="col-span-2 rounded-xl border border-brand2 p-4 flex items-baseline justify-center md:justify-start gap-2 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand1">
        <span className="text-5xl font-bold text-brand1">
          {aboutExperience.years}
        </span>
        <span className="text-lg text-grey2">{aboutExperience.label}</span>
      </div>

      {aboutDashboard.map((about) => {
        const Icon = about.icon;
        return (
          <div
            key={about.title}
            className="rounded-xl border border-brand2 p-4 flex flex-col gap-2 items-center md:items-start transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand1"
          >
            <Icon className="text-2xl text-brand1" aria-hidden="true" />
            <h3 className="text-sm uppercase text-grey3">{about.title}</h3>
            <p className="text-grey1">{about.text}</p>
          </div>
        );
      })}
    </aside>
  );
};
