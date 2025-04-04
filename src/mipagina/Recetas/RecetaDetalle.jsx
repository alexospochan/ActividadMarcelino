import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecetaDetalle() {
    const { id } = useParams(); 
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const obtenerReceta = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const result = await response.json();
                setMeal(result.meals[0]);
            } catch (error) {
                console.error("Error al obtener los detalles de la receta:", error);
            }
        };
        obtenerReceta();
    }, [id]);

    if (!meal) return <div>Cargando...</div>;

  
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) {
            ingredients.push({
                ingredient: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`]
            });
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{meal.strMeal}</h1>
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "50%", maxWidth: "300px", marginBottom: "20px" }}
            />
            <h2>Ingredientes:</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>
                        {item.measure} {item.ingredient}
                    </li>
                ))}
            </ul>
            <h2>Instrucciones para preparar la comida </h2>
            <p>{meal.strInstructions}</p>

            {meal.strYoutube && (
                <div>
                    <h2>Video de como se cocina:</h2>
                    <iframe
                        width="100%"
                        height="400px"
                        src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}
