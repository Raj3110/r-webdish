import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DishList.css'; // For custom styles

const Dish = () => {
    const [dishes, setDishes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/dishes`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Data:', data); // Log the data for debugging
                setDishes(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/start-cooking/${id}`);
    };

    return (
        
        <div className="card-container">
            {dishes.map((dish, index) => (
                <div key={index} className="card" onClick={() => handleCardClick(dish.id)}>
                    <img src={dish.image} alt={dish.dish_name} className="card-image" />
                    <h1><b>{dish.dish_name}</b></h1>
                    <p>{dish.description}</p>
                </div>
            ))}
        </div>
        
    );
};

export default Dish;
