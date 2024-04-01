import { useEffect, useState } from "react";
import studiesData from "../data/studies.json";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

interface Study {
  id: number;
  imageSrc: string;
  altText: string;
  url: string;
}

export const Studies = () => {
  const [studies, setStudies] = useState<Study[]>([]);

  useEffect(() => {
    setStudies(studiesData);
  }, []);

  return (
    <section className="select-none w-[90%] flex justify-center items-start max-w-screen-2xl m-auto py-24 px-6 lg:py-24" id="studies">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {studies.map((study) => (
          <figure key={study.id} className="relative overflow-hidden border-4 border-primaryLight dark:border-yellow-600">
            <img className="hover:drop-shadow-5xl sm:h-40 sm:w-72 xl:h-60 xl:w-96 hover:contrast-50" src={study.imageSrc} alt={study.altText} />
            <div className="absolute inset-0 bg-blue-300 dark:bg-yellow-300 opacity-0 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center">
              <Link to={study.url} target="_blank" className="text-white">
                <button className="p-3 rounded-full bg-blue-950 dark:bg-yellow-950 transition-colors duration-300 flex items-center">
                  <span><FiSearch /></span>
                  <span className="ml-2 font-bold">Ver Imagen</span>
                </button>
              </Link>
            </div>
          </figure>
        ))}
      </article>
    </section>
  );
};
