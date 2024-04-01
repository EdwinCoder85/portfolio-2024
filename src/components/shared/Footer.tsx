import networksData from "../../data/networks.json";

export const Footer = () => {
  return (
    <footer className="bg-white w-full dark:bg-gray-800 shadow select-none py-2 sm:py-2 md:py-3 lg:py-4">
      <p className="text-center text-xs sm:text-sm lg:text-lg">
        © Created with 💖 by
        <span className="font-bold dark:text-yellow-500 text-primaryLight mx-2">
          EdwinCoder85
        </span>
        | all rights reserved!
      </p>
      <ul className="list-none flex flex-row justify-center items-center gap-3 pt-2">
        {networksData.map((network, index) => (
          <li key={index}>
            <a
              className="flex items-center justify-center w-8 h-8 rounded-full"
              rel="noreferrer"
              href={network.url}
              target="_blank"
              style={{ backgroundColor: network.backgroundColor }}
            >
              <img
                src={network.iconSrc}
                className="w-5 h-5"
                title={network.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
