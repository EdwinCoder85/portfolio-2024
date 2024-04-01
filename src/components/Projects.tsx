import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projects.json";

export const Projects = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    initialSlide: 0,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="flex justify-center items-center h-screen lg:h-full select-none"
      id="projects"
    >
      <div className="w-[90%] max-w-screen-md sm:max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl py-24 px-6 lg:py-24">
        <Slider {...sliderSettings}>
          {projectsData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};