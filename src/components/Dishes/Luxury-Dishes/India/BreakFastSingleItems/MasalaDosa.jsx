import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IndianBreakFast } from "../../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
import Marquee from "react-fast-marquee";
import { Flip } from "react-reveal";
import { useSpring, animated } from 'react-spring';
import RecommendedData from '../../../../../Data/RecommendedData';
import SingleDish from "../../../../../pages/SingleDish";
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import KitchenEquipments from '../../../../../components/SingleDishItems/KitchenEquipments';
import NumberOfPeople from '../../../../../components/SingleDishItems/NumberOfPeople';
import Card2 from "../../../../Card2";
import Footer from '../../../../FooterItem/Footer';
 
const mainIngredients = [
  { title: " Dosa Batter ",quantity: "Rice + Urad Dal + Fenugreek Seeds", image:"/images/dosa_batter.avif"},
  { title: " Onion ", quantity: "1 large, finely chopped", image:"/images/onion.avif" },
  { title: " Rice", quantity: "2 cups", image:"/images/rice.avif" },
  { title: " Potatoes ", quantity: "4 medium-sized, boiled and mashed", image:"/images/potatoes.avif" },
  { title: " Urad Dal ", quantity: "1 cup", image:"/images/urad_dal.avif" },
  { title: " Fenugreek Seeds ", quantity: "1/2 teaspoon", image:"/images/fenugreek_seeds.avif" },
  { title: " Green Chillies ", quantity: "2-3, finely chopped", image:"/images/green_chilli.avif" },
  { title: " Asafoetida ", quantity: "as needed", image:"/images/asafoetida.avif" },
  { title: " Mustard Seeds", quantity: "1 tsp", image:"/images/mustard_seeds.avif" },
  { title: " Curry Leaves ", quantity: "1 sprig", image:"/images/curry_leaves.avif" },
  { title: " Cumin Seeds ", quantity: "1 tsp", image:"/images/cumin_seeds.avif" },
  { title: " Turmeric Powder ", quantity: "1/2 tsp", image:"/images/turmeric.avif" },
  { title: " Oil ", quantity: "2 tbsp", image:"/images/oil.avif" },
  { title: " Coriander Leaves ", quantity: "as needed", image:"/images/coriander_leaves.avif" },
  { title: " Salt ", quantity: "to taste", image:"/images/salt.avif" },
  { title: " Water ", quantity: "as needed", image:"/images/water.avif" },
];

const kitchenEq = [
  { title: "Oven ", image:"/images/oven.png" },
  { title: "Food Processor ", image:"/images/food_processor.png" },
  { title: "Pressure Cooker ", image:"/images/cooker.png" },
  { title: "Air Fryer ", image:"/images/air_fryer.png" },
  { title: "Blender ", image:"/images/blender.png" },
  { title: "Microwave ", image:"/images/microwave.jpg" },
  { title: "Dosa Tawa ", image:"/images/dosa_tawa.png" },
  { title: "Spatula ", image:"/images/spatula.png" },
  { title: "Mixing Bowl ", image:"/images/mixing_bowl.png" },
];

function MasalaDosa() {
  const [fadeIn, setFadeIn] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

  const dishProps = {
    dishTitle: IndianBreakFast[0].dishName,
    dishImage: IndianBreakFast[0].dishImage,
    dishDescription: "Masala Dosa: A South Indian classic, boasts a thin, crisp rice crepe embracing a spiced potato filling. The blend of mustard seeds, turmeric, and curry leaves infuses every bite with aromatic delight. Boiled and seasoned potatoes add a hearty contrast. Served with coconut chutney and sambar, Masala Dosa is a flavorful journey in just one mouthful.",
    dishAlt: IndianBreakFast[0].dishImage,
    dishType: "Vegetarian",
    preprationTime: "20 min",
    dishIngredients: "14",
    dishCalories: "500 kcal",
  };

  return (
    <div className="bg-[#f7f3cd] min-h-screen">
      <SingleDish
        dishTitle={dishProps.dishTitle}
        dishImage={dishProps.dishImage}
        dishDescription={dishProps.dishDescription}
        dishAlt={dishProps.dishAlt}
        dishType={dishProps.dishType}
        preprationTime={dishProps.preprationTime}
        dishIngredients={dishProps.dishIngredients}
        dishCalories={dishProps.dishCalories}
      />

      <div className="px-12">
        <MainIngradients mainIngredients={mainIngredients} />
        <KitchenEquipments kitchenEquipments={kitchenEq} />
        <NumberOfPeople />
      </div>

      <div className="flex items-center justify-center my-8">
        <Link to='/Masala-Dosa-Cook'>
          <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={() => window.scrollTo(0, 0)}>Start Cooking</button>
        </Link>
      </div>

      <div className='mb-5'>
        <div className="pb-6 pt-6 px-4 md:px-8">
          <h1 className='text-center text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold'>Recommended Dishes</h1>
        </div>
        <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden">
            {RecommendedData.map((dish, index) => (
              <Flip key={index} cascade left>
                <animated.div style={fadeIn} className="flex-grow h-full">
                  <Card2 key={index} title={dish.dishName} time={dish.time} rating={dish.rating} imageUrl={dish.dishImage} />
                </animated.div>
              </Flip>
            ))}
          </div>
        </Marquee>
      </div>
      <Footer />
     </div>
  );
}

export default MasalaDosa;
