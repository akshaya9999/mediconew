import React from "react";
import Carousel from "./Carousel";
import medp6Image from '../assets/medp6.jpg';
import Cards from "./cards";

const Home = () => {
  return (
    <div className="mt-8 px-4 md:px-8 overflow-y-auto">
      <div className="max-w-screen-xl mx-auto h-full flex overflow-hidden relative">
        <Carousel />
      </div>
      <h1 className="text-left pt-10">ABOUT</h1>
    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-8 flex items-center">
  <img src={medp6Image} className="w-1/2" alt="Medico" />
  <div className="ml-8 w-1/2">
    <p>
      Medico offers a platform to investigate symptoms associated with specific medications. It allows you to assess whether your reactions are potentially related to the medicine. You can also contribute your own symptoms to the platform.
    </p>
  </div>
  
</div>
<div>
  <Cards/>
  </div>

    </div>
  );
};

export default Home;
