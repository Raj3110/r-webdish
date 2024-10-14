import React from "react";

const KitchenEquipments = ({ kitchenEquipments }) => {
  return (
    <div className="">
      <h1 className=" text-green-700 text-2xl font-bold mt-5">Kitchen Equipments</h1>

      <div className="m-4">
        <ul className="list-none text-lg">
          {kitchenEquipments.map((item, index) => (
            <li className="flex border-b border-black pb-4 mb-2 w-full  max-w-sm  sm:w-96" key={index}>
              <img  
              className="w-10 h-10  mr-4 object-cover" // 40px image with circular shape
              src={`${item.image}`} // Placeholder for ingredient images
              alt={item.title} 
              />
              <span className="font-semibold mb-2 sm:mb-0 flex flex-col justify-center sm:text-left"> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KitchenEquipments;
