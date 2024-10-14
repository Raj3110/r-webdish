// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
// const IngredientsData = [
//   { title: "Flattened Rice (Poha)", image: "🍚", quantity: "As needed" },
//   { title: "Mustard Seeds", image: "🌰", quantity: "1 tsp" },
//   { title: "Curry Leaves", image: "🍃", quantity: "1 sprig" },
//   { title: "Turmeric Powder", image: "🌾", quantity: "1/2 tsp" },
//   { title: "Onions", image: "🧅", quantity: "1, finely chopped" },
//   { title: "Green Chillies", image: "🌶️", quantity: "2, finely chopped" },
//   { title: "Potatoes", image: "🥔", quantity: "2, boiled and diced" },
//   { title: "Peanuts", image: "🥜", quantity: "1/4 cup, roasted" },
//   { title: "Coriander Leaves", image: "🌿", quantity: "for garnish" },
//   { title: "Lemon Juice", image: "🍋", quantity: "1 tbsp" },
//   { title: "Oil", image: "🛢️", quantity: "2 tbsp" },
//   { title: "Salt", image: "🧂", quantity: "to taste" },
//   { title: "Cumin Seeds", image: "🌰", quantity: "1 tsp" },
//   { title: "Chopped Tomatoes", image: "🍅", quantity: "1, chopped" },
//   { title: "Green Peas", image: "🌱", quantity: "1/2 cup" },
//   { title: "Cashews", image: "💰", quantity: "2 tbsp" },
// ];


function RecipeSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setCurrentStep(data);

      } catch (e) {
        console.error("Error fetching recipe steps");

      }
    }
    fetchData();
  }, [])
  const goToNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const isLastStep = currentStep === currentStep.length - 1;
  const isFirstStep = currentStep === 0;

  const handleFeedbackSubmission = () => {
    alert("You have successfully created a dish!");
  };
  return (
    <div className="px-4 py-8 bg-[#f7f3cd] shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold text-center mb-8">Preparation Steps</h1>
      <div key={currentStep}>
        <div className="flex justify-between ">
          <div className="flex mb-4 items-center">

            <h2 className="text-2xl font-semibold p-2 ">
              {`${currentStep + 1}.`}
            </h2>
            <h2 className="text-2xl font-semibold ">
              {`${currentStep.title}`}
            </h2>
          </div >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              {(currentStep.time) >= 5 ? (
                <CountdownComponent initialTimer={(currentStep.time)} />
              ) : (
                <p>{currentStep.time}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Cooking videoSource={currentStep.videoSource} />
        </div>
        <Fade bottom cascade delay={500}>
          <ul className="list-disc pl-6 mb-6">
            {currentStep.instructions.map((instruction, i) => (
              <li key={i} className="mb-2">{instruction}</li>
            ))}
          </ul>
        </Fade>
        <Fade bottom cascade delay={500}>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
        </Fade>
        <Fade bottom cascade delay={500}>
          <ul className="mb-4 grid grid-cols-2 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {currentStep.ingredients.map((ingredient, j) => (
              <li key={j}>
                <IngredientCard title={ingredient.title} quantity={ingredient.quantity} />
              </li>
            ))}
          </ul>
        </Fade>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={goToPreviousStep}
          disabled={isFirstStep}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Previous Step"
        >
          {isFirstStep ? "First Step" : "Previous Step"}
        </button>
        <div>
          <span className="mr-2">{currentStep + 1}</span>
          <span>of</span>
          <span className="ml-2">{currentStep.length}</span>
        </div>
        {isLastStep ? (
          <Link to="/feedback">
            <button
              onClick={handleFeedbackSubmission}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
              aria-label="Submit Feedback"
            >
              Submit Feedback
            </button>
          </Link>
        ) : (
          <button
            onClick={goToNextStep}
            disabled={isLastStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Next Step"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

function PohaCook() {
  return (
    <div className="bg-[#f7f3cd] min-h-screen flex flex-col justify-center">
      <div className="flex-1 max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-semibold text-center mb-8">Masala Dosa Recipe</h1>
        <RecipeSteps />
      </div>
    </div>
  );
}



// function PohaCook() {
//   const cookingProps = {
//     videoSource: "./hls/inshot_20240103_185705791.m3u8",
//   };

//   return (
//     <div className="bg-[#f7f3cd]">
//       <Cooking {...cookingProps} />
//       <IngredientsSection ingredientsData={IngredientsData} />
//      </div>
//   );
// }

export default PohaCook;
