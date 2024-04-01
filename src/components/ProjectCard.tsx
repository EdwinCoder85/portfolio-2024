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
  return (
    <article className="bg-gray-200 dark:bg-gray-800 h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto dark:text-gray-300 rounded-2xl shadow-lg overflow-hidden">
      <header className="flex justify-center items-center">
        <img
          src={project.img}
          alt={project.name}
          className="h-40 sm:44 md:h-52 lg:h-60 w-full object-fill"
        />
      </header>
      <div className="flex flex-col gap-4 p-4 sm:p-6 md:p-7 lg:p-8">
        <main className="flex flex-col items-center gap-3 md:gap-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">{project.name}</p>
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-normal text-justify">
            {project.description}
          </p>
        </main>
        <footer className="flex items-center justify-between gap-3 md:gap-4 sm:flex-wrap md:flex-wrap lg:justify-between">
          <div className="flex gap-1.5 sm:gap-3 md:gap-4 lg:gap-5">
            {project.technologies.map((tech, index) => (
              <a
                key={index}
                className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:w-12 lg:h-12 rounded-full"
                style={{ backgroundColor: tech.color }}
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
          <div className="flex gap-1.5 sm:gap-3 md:gap-4 lg:gap-5">
            {project.networks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:w-12 lg:h-12 rounded-full bg-black bg-gradient-to-r hover:dark:from-primaryDark hover:from-primaryLight hover:from-0% hover:dark:via-secondaryDark hover:via-secondaryLight hover:via-51% hover:dark:to-primaryDark hover:to-primaryLight hover:to-100%  hover:scale-110"
              >
                <img
                  src={network.img}
                  alt={network.name}
                  title={network.name}
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 hover:scale-110"
                />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
};
