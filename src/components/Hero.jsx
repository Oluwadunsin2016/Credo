import { Button } from "@nextui-org/react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import tablet from '../assets/HeroImage.webp'
import phone from '../assets/homepageHeroMobile.png'
import users from '../assets/gatewayUsers.svg'
import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  const textArray = ["Merchants", "Creators", "Startups"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Remove animation class to reset it
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Update text
        setAnimate(true); // Trigger animation after text change
      }, 50); // Small delay to reset animation
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="px-6 md:px-24 bg-[#070611] min-h-[80vh] pt-8">
    <div className="md:px-20 z-[999]">
    
      <MobileNavbar />
      <Navbar />
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-[3rem] md:mt-[10rem] mb-8">
      <div className="text-white flex flex-col gap-3 animate__animated animate__fadeInUp">
          <h1 className="text-3xl md:text-5xl font-bold leading-8 overflow-hidden">
      Getting{" "}
      <span
         className={`text-blue-500 inline-block ${
          animate ? "animate__animated animate__bounceInUp" : ""
        }`}
      >
        {textArray[currentIndex]}
      </span>{" "}
      their next millions
    </h1>
        <p className="text-lg">
          No matter your line of business, Credo enables you to get paid,
          increase profits and build trust through seamless payment experiences.
        </p>

        <div className="mt-4 flex items-center gap-6">
          <Button color="primary" className="text-lg font-semibold rounded-lg">
            Get started <span className="ml-1"><IoMdArrowForward size={18}/></span>
          </Button>
          <Button className="text-lg font-semibold bg-transparent text-white">
            Learn More
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-1">
        <img src={users} alt="" />
        <p className="text-gray-500 font-semibold">Over 1M happy users</p>
        </div>
      </div>
      <div className="animate__animated animate__zoomIn">
    <img className="hidden md:block" src={tablet} alt="" />
    <img className="block md:hidden" src={phone} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Hero;
