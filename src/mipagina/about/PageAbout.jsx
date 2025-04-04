import React from "react";

const foodData = [
  {
    title: "Comida a Base de Puerco",
    description:
      "La carne de cerdo es muy versátil y se disfruta en diversas culturas. Platos como el lechón asado, el chicharrón, el pulled pork y la cochinita pibil son solo algunos ejemplos de cómo se puede preparar esta deliciosa carne.",
    image: "/imagenes/lechon.webp",
    color: "#6C757D",
  },
  {
    title: "Comida a Base de Pollo",
    description:
      "El pollo es una de las carnes más consumidas en el mundo. Desde el pollo frito de estilo sureño en Estados Unidos, hasta el pollo al curry en la India y el pollo a la naranja en la cocina china, es un ingrediente clave en muchas gastronomías.",
    image: "/imagenes/pollo.jpg",
    color: "#6C757D",
  },
  {
    title: "Comida Mexicana",
    description:
      "Con sabores intensos y picantes, la comida mexicana es un festín para el paladar. Desde tacos y tamales hasta enchiladas y guacamole, su variedad es impresionante. Ingredientes como el maíz, los chiles y el frijol son fundamentales en esta cocina llena de tradición.",
    image: "/imagenes/tacos.jpg",
    color: "#6C757D",
  },
  {
    title: "Comida Estadounidense",
    description:
      "La comida estadounidense es conocida por su influencia multicultural y por platillos icónicos como las hamburguesas, las costillas BBQ, los hot dogs y el mac & cheese. Es una fusión de sabores y estilos que reflejan la diversidad del país.",
    image: "/imagenes/food.jpeg",
    color: "#6C757D",
  },
];

export default function PageAbout() {
  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ color: "#ff5733", marginBottom: "20px" }}>Acerca de la Comida</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        La comida es una parte esencial de nuestra cultura y forma de vida. Existen diferentes tipos de gastronomía en el mundo,
        cada una con sabores, ingredientes y tradiciones únicas. Aquí te presentamos algunos de los tipos más populares:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {foodData.map((food, index) => (
          <div key={index} style={{ backgroundColor: food.color, padding: "15px", borderRadius: "10px", color: "white", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}>
            <h2>{food.title}</h2>
            <img src={food.image} alt={food.title} style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
            <p>{food.description}</p>
          </div>
        ))}
      </div>
      <p style={{ fontStyle: "italic", marginTop: "20px", fontSize: "16px" }}>
        "Comer es una necesidad, pero disfrutar de la comida es un arte." 
      </p>
    </div>
  );
}
