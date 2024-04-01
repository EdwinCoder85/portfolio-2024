import languages from "/images/icons/languages.svg";
import { LuBookMarked } from "react-icons/lu";

export const AboutMe = () => {
  return (
    <>
      <section
        className="flex flex-col h-screen justify-center items-center lg:h-auto lg:flex-row select-none w-[90%] max-w-screen-2xl mx-auto gap-6 px-6 my-6 lg:py-24"
        id="aboutme"
      >
        <article className="flex flex-col gap-1 md:gap-2 lg:gap-3 lg:w-1/2 p-0 lg:p-6">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51% dark:to-primaryDark to-primaryLight to-100%">
              Bienvenidos a mi mundo!
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug sm:leading-relaxed md:leading-relaxed lg:leading-loose font-light text-justify my-4 lg:my-10">
            Apasionado y altamente competente con especialización en desarrollo
            frontend y habilidades destacadas en el desarrollo fullstack.
            Destaco por mi enfoque disruptivo y mi dominio de lenguajes y
            frameworks vanguardistas. Constantemente busco la excelencia a
            través de soluciones innovadoras y equilibradas. Mantengo un estilo
            de vida activo, combinando mi pasión por el desarrollo de software
            con actividades físicas como caminatas y ejercicio. Mi versatilidad
            y ética profesional me permiten adaptarme fácilmente a nuevos
            desafíos y trabajar de manera colaborativa en equipo. En resumen,
            ofrezco soluciones de calidad con un enfoque dinámico, innovador y
            colaborativo en el desarrollo fullstack.
          </p>
          <div className="bg-cover w-auto mx-auto p-6 flex items-center justify-center bg-gradient-to-r dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51% dark:to-primaryDark to-primaryLight to-100%  bg-center hover:bg-right-center text-white shadow-md rounded-lg text-sm sm:text-base md:text-lg lg:text-xl text-center font-bold cursor-pointer">
            <LuBookMarked className="icon mr-2" />
            <a
              href="https://drive.google.com/file/d/1r5pHD2tGXzLaE9cwBvp7pptaLKJG4Sgz/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="inline-block"
            >
              Descargar mi currículum
            </a>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center gap-6 lg:flex lg:flex-row lg:w-1/2 p-0 lg:p-6 relative">
          <div className="lg:bg-[#646464] lg:dark:bg-[#f8f2ca] absolute h-[30rem] w-[30rem] rounded-full blur-[18rem]"></div>
          <figure className="hidden lg:block">
            <img src={languages} alt="Logo" className="h-150 w-full img" />
          </figure>
        </article>
      </section>
    </>
  );
};
