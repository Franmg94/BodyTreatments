import { useEffect, useState } from "react";
import backgroundImage from "../assets/images/almendro-3.jpg";

const Banner = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen w-screen mt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: `center ${-offsetY * 0.1}px`,
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-10">
        <div className="text-center ">
          <h3 className="subtitle-sm md:subtitle-md">
            Massages makes bodies better
          </h3>
          <h1 className="title-sm md:title-md">Body Treatments Berlin</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
