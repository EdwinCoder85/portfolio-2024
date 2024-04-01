import useDragDrop from "../hooks/useDragDrop";
import skillsData from "../data/skills.json";

interface Skill {
  id: number;
  name: string;
}

interface TechnicalSkill extends Skill {
  imageSrc: string;
  altText: string;
}

interface SoftSkill extends Skill {
  imageSrc: string;
  altText: string;
  name: string;
}

export const Skills = () => {
  const {
    skills: technicalSkills,
    handleDragStart: handleTechDragStart,
    handleDragOver: handleTechDragOver,
    handleDrop: handleTechDrop,
  } = useDragDrop<TechnicalSkill[]>(skillsData.technicalSkills);

  const {
    skills: softSkills,
    handleDragStart: handleSoftDragStart,
    handleDragOver: handleSoftDragOver,
    handleDrop: handleSoftDrop,
  } = useDragDrop<SoftSkill[]>(skillsData.softSkills);

  return (
    <section
      className="flex flex-col h-screen justify-end items-center md:justify-center md:items-center lg:justify-center lg:items-start lg:h-auto select-none w-[90%] max-w-screen-2xl mx-auto md:flex-row lg:py-24 md:gap-4 lg:gap-4"
      id="skills"
    >
      <article className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-6 lg:w-1/2 px-6 py-2 md:p-4 lg:p-6 mx-auto md:h-117 lg:h-auto">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium lg:font-bold dark:text-yellow-500 text-primaryLight">
          Habilidades Técnicas
        </h3>
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {technicalSkills.map((skill, index) => (
            <figure
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg w-24 lg:w-32 xl:w-36 lg:h-36 p-2 lg:p-4 hover:dark:bg-gray-500 hover:bg-gray-400/60 mx-auto"
              draggable
              onDragStart={(event) => handleTechDragStart(index)(event)}
              onDragOver={(event) => handleTechDragOver(event)}
              onDrop={(event) => handleTechDrop(index)(event)}
            >
              <img
                className="hover:scale-110 hover:drop-shadow-5xl lg:mt-4"
                src={skill.imageSrc}
                alt={skill.altText}
              />
            </figure>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-6 lg:w-1/2 px-6 py-2 md:p-4 lg:p-6 mx-auto md:h-117 lg:h-auto">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium lg:font-bold dark:text-yellow-500 text-primaryLight">
          Habilidades Blandas
        </h3>
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {softSkills.map((skill, index) => (
            <figure
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg w-24 lg:w-32 xl:w-36 lg:h-36 p-2 lg:p-4 hover:dark:bg-gray-500 hover:bg-gray-400/60 mx-auto"
              draggable
              onDragStart={(event) => handleSoftDragStart(index)(event)}
              onDragOver={(event) => handleSoftDragOver(event)}
              onDrop={(event) => handleSoftDrop(index)(event)}
            >
              <img
                className="hover:scale-125 hover:drop-shadow-5xl"
                src={skill.imageSrc}
                alt={skill.altText}
              />
              {skill.name && (
                <h3 className="text-center font-bold text-xs sm:text-xs md:text-xs lg:mb-4 lg:text-sm xl:text-sm">
                  {skill.name}
                </h3>
              )}
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
};
