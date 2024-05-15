import { useState } from 'react';

interface Technology {
  name: string;
  color: string;
  img: string;
}

interface Network {
  name: string;
  link: string;
  img: string;
}

interface Project {
  name: string;
  description: string;
  img: string;
  technologies: Technology[];
  networks: Network[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article className="relative group bg-gray-200 dark:bg-gray-800 h-auto max-w-sm sm:max-w-md md:max-w-md lg:max-w-xl mx-auto dark:text-gray-300 rounded-2xl shadow-lg overflow-hidden z-10" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="absolute inset-0 bg-slate-500 dark:bg-slate-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-20"></div>
      {hovered && (
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-30">
          {project.networks.map((network, index) => (
            <a
              key={index}
              href={network.link}
              rel="noreferrer"
              target="_blank"
              className="p-2 w-48 text-white bg-slate-700 bg-gradient-to-r hover:dark:from-primaryDark hover:from-primaryLight hover:from-0% hover:dark:via-secondaryDark hover:via-secondaryLight hover:via-51% hover:dark:to-primaryDark hover:to-primaryLight hover:to-100% hover:transition hover:duration-300 rounded-lg flex items-center justify-center gap-2"
            >
              <img
                src={network.img}
                alt={network.name}
                title={network.name}
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
              />
              {network.name}
            </a>
          ))}
        </div>
      )}

      {/* </div> */}
      <header className="flex justify-center items-center">
        <img
          src={project.img}
          alt={project.name}
          className="h-40 sm:44 md:h-52 lg:h-60 w-full object-fill"
        />
      </header>
      <div className="flex flex-col gap-4 p-4 sm:p-6 md:p-7 lg:p-8">
        <main className="flex flex-col items-center gap-3 md:gap-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
            {project.name}
          </p>
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-normal text-justify">
            {project.description}
          </p>
        </main>
        <footer className="flex items-center justify-start gap-3 md:gap-4">
          <div className="flex gap-1.5 sm:gap-3 md:gap-4 lg:gap-5">
            {project.technologies.map((tech, index) => (
              <a
                key={index}
                className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:w-12 lg:h-12 rounded-full"
                // style={{ backgroundColor: tech.color }}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  title={tech.name}
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-8 lg:w-8"
                />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
};
