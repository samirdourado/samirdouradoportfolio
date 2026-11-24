import { AboutMe } from "../aboutMe";

export const Overview = () => {
  return (
    <main className="w-full mx-auto bg-whiteFixed flex flex-col items-center ">
      <div className="w-full max-w-4xl flex flex-col md:flex-row md:justify-start gap-12 px-gutter xl:px-0 pt-36 pb-10">
        <AboutMe />
      </div>
    </main>
  );
};
