import React from "react";
import BookShelf from "../../images/bookshelves.svg";
import Hero from "../Navbar/Hero/Hero";
import Nav from "../Navbar/Nav";
import GlassCard from "./GlassCard";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
const HomeBody = () => {
  return (
    <div>
     
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-5 mt-14 lg:mt-28 ">
        <div className="flex flex-1 flex-col items-center lg:items-between">
          <h2 className="text-blue-500 font-thin shadow-md rounded text-2xl lg:text-4xl text-center lg:text-left -mt-2 lg:mx-6 mb-10">
            A Place For your Books
          </h2>
          <GlassCard></GlassCard>
        </div>
        <div className="flex justify-center flex-1 mb-6 md:mb-16 lg:mb-0 z-10">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2" src={BookShelf} alt="" />
        </div>
      </div>
      <WhatWeDo></WhatWeDo>
      <Hero></Hero>
    </div>
  );
};

export default HomeBody;
