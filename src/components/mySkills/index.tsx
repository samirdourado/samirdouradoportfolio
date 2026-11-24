"use client";
import {
  skillCategories,
  SkillCategory,
  skillsDatabase,
} from "@/database/mySkills.database";
import Image from "next/image";
import { useState } from "react";

export const MySkills = () => {
  const [active, setActive] = useState<SkillCategory>("fullstack");
  const visible = skillsDatabase.filter((skill) =>
    skill.categories.includes(active),
  );

  return (
    <aside className="w-full h-full max-w-7xl flex flex-col gap-4 items-center px-gutter xl:px-0 pt-20 pb-20 m-auto">
      <h2 className="text-4xl font-bold text-grey1 mb-4">Habilidades</h2>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div
          role="group"
          aria-label="Filtrar habilidades"
          className="w-full grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3"
        >
          {skillCategories.map((categorie) => (
            <button
              key={categorie.id}
              type="button"
              aria-pressed={active === categorie.id}
              onClick={() => setActive(categorie.id)}
              className={`min-w-0 whitespace-nowrap rounded-full px-1 py-2 text-sm transition-colors duration-200 ${
                active === categorie.id
                  ? "bg-brand1 text-whiteFixed"
                  : "border border-grey5 text-grey1 hover:bg-brand1/30"
              }`}
            >
              {categorie.label}
            </button>
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="w-full text-center text-lg text-grey2 py-10">
            Nenhuma habilidade registrada nesta categoria.
          </p>
        ) : (
          <div
            key={active}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 m-auto"
          >
            {visible.map((skill, i) => (
              <article
                key={skill.name}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-card-in h-40 w-full flex flex-col items-center justify-center gap-3 rounded-xl border border-grey5 p-2 capitalize transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:animate-none"
              >
                <p>{skill.name}</p>
                <Image
                  src={skill.image}
                  alt={skill.alt}
                  width={50}
                  height={50}
                  aria-label={skill.aria}
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};
