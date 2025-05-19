import React from "react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-8">
        Skills
      </h1>
      <div className="w-full max-w-4xl text-left">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold capitalize text-lime-300 mb-3">
              {category}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-lg text-[#F0EDE3]">
              {skillList.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
