import { AboutDashboard } from "../aboutDashboard";
import { AboutMe } from "../aboutMe";

export const Overview = () => {
  return (
    <main className="w-full mx-auto bg-whiteFixed flex flex-col items-center ">
      <div className="w-full max-w-7xl flex flex-col gap-12 px-gutter xl:px-0 pt-36 pb-10">
        <h2 className="w-full text-4xl font-bold text-grey1 text-center">
          Sobre mim
        </h2>
        <div className="w-full flex flex-col md:flex-row md:items-stretch gap-14">
          <AboutMe />
          <AboutDashboard />
        </div>
      </div>
    </main>
  );
};
