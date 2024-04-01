import PortadaPersonal from "/images/portada/PortadaPersonal.png";
import networksData from "../data/networks.json";

export const Home = () => {
  return (
    <>
      <section className="select-none mx-auto relative" id="home">
        <div className="relative">
          <img
            src={PortadaPersonal}
            alt="Portada Personal"
            className="h-screen lg:h-220 w-full object-cover blur-md lg:blur"
          />
          <article className="absolute inset-0 flex items-center justify-start w-[90%] max-w-screen-2xl mx-auto px-6 py-24 lg:mt-20">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hola!</h2>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51% dark:to-primaryDark to-primaryLight to-100%">
                  Soy Edwin Amaranto
                </span>
              </div>
              <h3 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-bold">
                Desarrollador Full Stack
              </h3>
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal">
                con Especialización en
                <span className="dark:text-yellow-500 text-primaryLight font-bold ml-2">
                  Front-End
                </span>
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl text-center font-normal">
                ¡Contáctame y conversemos sobre mi perfil!
              </p>
              <ul className="flex flex-row justify-start gap-4 list-none mt-4">
                {networksData.map((network, index) => (
                  <li key={index}>
                    <a
                      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-slate-900"
                      href={network.url}
                      rel="noreferrer"
                      target="_blank"
                      title={network.name}
                    >
                      <img
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                        src={network.iconSrc}
                        alt={network.name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
