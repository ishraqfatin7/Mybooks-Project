import React from "react";
import Card from "./Cards/Card";
import category from '../../../images/icons/category.svg';
import details from '../../../images/icons/details.svg';
import showcase from '../../../images/icons/showcase.svg';
const cardData = [
  { purpose: "Select Your Category", name: "bookshop",image: category },
  { purpose: "Enter Details", name: "bookshop",image:details },
  { purpose: "Add To Showcase", name: "bookshop",image:showcase },
  
];

const WhatWeDo = () => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row lg:items-center items-center gap-5 mt-14 lg:mt-28">
      <div className="flex flex-1 flex-col lg:flex-row items-center lg:items-center lg:justify-center lg:gap-28 ">
        
          {
              cardData.map((info)=><Card card={info}></Card>)
          }
     
    </div>
    </div>
  );
};

export default WhatWeDo;
