import React, { useState } from "react";

function MainIngradients({mainIngredients}) {

  
    return <div>
      <h1 className=" text-green-700 font-bold mt-5 text-2xl md:text-3xl">Main Ingredients</h1>
      <div className="m-4 ">
        <ul className="list-none text-lg ">
          {mainIngredients.map((item, index) => (
            
            <li className="flex items-center border-b border-black pb-4 mb-2 w-full  max-w-sm  sm:w-96" key={index}>
             
              <img  
              className="w-10 h-10  mr-4 object-cover" // 40px image with circular shape
              src={`${item.image}`} // Placeholder for ingredient images
              alt={item.title} 
              />
            <div className="flex flex-col">
            <span className="font-semibold mb-2 sm:mb-0 flex flex-col justify-center sm:text-left">
              {item.title}
            </span>
            <div className="text-sm font-norma">
              {item.quantity}
            </div>
            </div>
            
          </li>
          
          ))}
        </ul>
      </div>
  </div>;
}




export default MainIngradients;
