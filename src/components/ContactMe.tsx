import { ContactForm } from "./ContactForm";
import { AiOutlinePhone } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import Calling from "/images/icons/calling.svg";
import { motion } from "framer-motion";

export const ContactMe = () => {
  return (
    <>
      <section
        className="flex flex-col-reverse lg:flex-row select-none w-[90%] max-w-screen-2xl mx-auto gap-2 lg:gap-6 px-6 lg:pt-24"
        id="contactme"
      >
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-5 lg:w-2/5 p-3 lg:p-6 lg:mb-6 relative"
        >
          <div className="lg:bg-[#646464] lg:dark:bg-[#f8f2ca] absolute lg:h-[18rem] lg:w-[18rem] left-[6rem] top-[-1rem] rounded-full blur-[18rem]"></div>
          <figure className="hidden lg:block">
            <img
              src={Calling}
              alt="icon supervisor"
              className="h-88 w-full img"
            />
          </figure>
          <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl dark:text-yellow-500 text-primaryLight">
            Más Información
          </h4>
          <ul className="mt-2">
            <li className="text-xs sm:text-sm md:text-base lg:text-lg flex flex-row">
              <AiOutlinePhone className="icon mr-2" />
              (+51) 954 647 683
            </li>
            <li className="text-xs sm:text-sm md:text-base lg:text-lg flex flex-row">
              <BsEnvelope className="icon mr-2" />
              edwinamarantovillegas@gmail.com
            </li>
          </ul>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            También puedes contactarme a través de mis redes sociales.
          </p>
        </motion.article>
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 lg:w-3/5 p-4 sm:p-5 md:p-6 lg:p-7 bg-[#eaeef4] dark:bg-gray-800 lg:mb-6 rounded-2xl"
        >
          <ContactForm />
        </motion.article>
      </section>
    </>
  );
};
