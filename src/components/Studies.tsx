import { useEffect, useState } from "react";
import studiesData from "../data/studies.json";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

interface Study {
  id: number;
  imageSrc: string;
  altText: string;
  url: string;
}

const faceInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.175 * index,
      },
    };
  },
};

export const Studies = () => {
  const [studies, setStudies] = useState<Study[]>([]);

  useEffect(() => {
    setStudies(studiesData);
  }, []);

  return (
    <motion.section
      className="select-none w-[90%] flex justify-center items-start max-w-screen-2xl m-auto py-24 px-6 lg:py-24"
      id="studies"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {studies.map((study, index) => (
          <StudyCard key={study.id} study={study} index={index}/>
        ))}
      </article>
    </motion.section>
  );
};

const StudyCard = ({ study, index }: { study: Study, index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.figure
      className="relative group overflow-hidden border-4 border-primaryLight dark:border-yellow-600 z-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={faceInAnimationVariants}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <img
        className="hover:drop-shadow-5xl sm:h-40 sm:w-72 xl:h-60 xl:w-96 hover:contrast-50"
        src={study.imageSrc}
        alt={study.altText}
      />
      {/* Capa de superposición */}
      <div className="absolute inset-0 bg-slate-500 dark:bg-slate-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-20"></div>

      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <Link to={study.url} target="_blank">
            <button type="button" className="p-3 w-auto text-white bg-slate-700 bg-gradient-to-r hover:dark:from-primaryDark hover:from-primaryLight hover:from-0% hover:dark:via-secondaryDark hover:via-secondaryLight hover:via-51% hover:dark:to-primaryDark hover:to-primaryLight hover:to-100% hover:transition hover:duration-300 z-30 flex items-center justify-center rounded-lg">
              <span>
                <FiSearch />
              </span>
              <span className="ml-2 font-bold">Ver Imagen</span>
            </button>
          </Link>
        </div>
      )}
    </motion.figure>
  );
};
