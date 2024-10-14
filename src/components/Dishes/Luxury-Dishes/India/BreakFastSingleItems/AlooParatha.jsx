import React, { useState } from "react";
import SingleDish from "../../../../../pages/SingleDish";
//import NewMultiSelect from '../../../../../components/SingleDishItems/NewMultiSelect';
import RecommendedDishes from "../../../../RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from '../../../../../components/SingleDishItems/KitchenEquipments';
import NumberOfPeople from '../../../../../components/SingleDishItems/NumberOfPeople';
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import { Link } from "react-router-dom";
import { IndianBreakFast } from "../../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
import Marquee from 'react-fast-marquee';
import { useSpring, animated } from 'react-spring';
import Flip from 'react-reveal/Flip';  
import 'animate.css/animate.min.css';
import Card2 from "../../../../Card2";
import RecommendedData from "../../../../../Data/RecommendedData";
import Footer from "../../../../FooterItem/Footer";
 
const mainIngredients = [
  { title: "Whole Wheat Flour", quantity: "2 cups", image:"/images/wheat_flour.avif" },
  { title: "Potatoes ", quantity: "4 medium-sized, boiled and mashed", image:"/images/potatoes.avif" },
  { title: "Ghee ", quantity: "2 tbsp", image:"/images/ghee.avif" },
  { title: "Green Chillies ", quantity: "2, finely chopped", image:"/images/green_chilli.avif" },
  { title: "Ginger ", quantity: "1 inch, grated", image:"/images/ginger.avif" },
  { title: "Coriander Leaves ", quantity: "2 tbsp, finely chopped", image:"/images/coriander_leaves.avif" },
  { title: "Cumin Powder ", quantity: "1 tsp", image:"/images/cumin_powder.avif" },
  { title: "Salt", quantity: "to taste", image:"/images/salt.avif" },
  { title: "Water", quantity: "as needed", image:"/images/water.avif" },
];

const kitchenEq = [
  { title: "Rolling Pin ", image:"/images/rolling_pin.png" },
  { title: "Griddle ", image:"/images/griddle.png" },
  { title: "Spatula ", image:"/images/spatula.png" },
];

 
function AlooParatha() {
  const [fadeIn, setFadeIn] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

const dishProps = {
dishTitle: IndianBreakFast[3].dishName ,
dishImage: IndianBreakFast[3].dishImage,
  dishDescription: "Aloo Paratha: A popular Indian breakfast dish made with whole wheat flour and stuffed with spiced mashed potatoes. It's cooked on a griddle with ghee until golden brown and served hot with yogurt, pickles, or chutney.",
dishAlt: IndianBreakFast[3].dishImage,
dishType: "Vegetarian",
  preprationTime: "30 min",  
  dishIngredients: mainIngredients.length,   
  dishCalories: "350  kcal",  
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
        {/*<NewMultiSelect multiple options={options} isValue={isValue} onChange={(opt)=> setValue(opt)} />*/}
        <KitchenEquipments kitchenEquipments={kitchenEq} />
        <NumberOfPeople />
    </div>

    <div className="flex items-center justify-center my-8">
        <Link to='/Aloo-Paratha-Cook'>
            <button className="p-2 px-4 bg-[#00544f] text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
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

export default AlooParatha;
