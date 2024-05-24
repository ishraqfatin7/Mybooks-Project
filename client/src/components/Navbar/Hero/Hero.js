import React from "react";
import { NavLink } from "react-router-dom";
import Quotes from "../../Quotes/Quotes";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-80 bg-gray-700" >
        
        <div className="text-center hero-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">What's the purpose here?</h1>
            <p className="mb-5">
              A bibliophile can read unlimited numbers of books but can never remember the name of those. So, How about you keep a record of your books here? 
            </p>
            <NavLink to ="/addBook" className="btn btn-primary">Get Started</NavLink>
          </div>
        </div>
      </div>
      <Quotes></Quotes>
    </div>
  );
};

export default Hero;
