import React, { useState } from "react"; // Hook useState 
import { TextField, Button, Card, CardMedia, CardContent, Typography } from "@mui/material"; // el material UI

// Variables de mis biomas
const biomasData = [
  { nombre: "Bosque", descripcion: "Un bioma con muchos árboles y animales.", imagen: "/imagenes/ola.jpg" },
  { nombre: "Desierto", descripcion: "Un bioma árido con cactus y arena.", imagen: "/imagenes/desierto.jpg" }, 
  { nombre: "Taiga", descripcion: "Un bioma frío con abetos y nieve.", imagen: "/imagenes/taiga.jpg" },
  { nombre: "Sabana", descripcion: "Un bioma con pasto amarillo y acacias.", imagen: "/imagenes/sabana.jpg" }
];

// el componente de mi Props
const Biomas = ({ biomas = biomasData }) => {
  const [busqueda, setBusqueda] = useState(""); // Hook useState (Estado de búsqueda)
  const [mostrar, setMostrar] = useState(false); // Hook useState (Estado de visibilidad)

  //  Función para filtrar biomas según mi busqueda en la barra
  const biomasFiltrados = biomas.filter((bioma) =>
    bioma.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/*  Input */}
      <TextField
        label="Buscar bioma"
        variant="outlined"
        onChange={(e) => setBusqueda(e.target.value)} // Función del input
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      
      {/* Botón de mostrar/ocultar biomas */}
      <Button variant="contained" color="primary" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Biomas" : "Mostrar Biomas"} {/* Condicional ternario */}
      </Button>

      {/* Condicional para mostrar los biomas */}
      {mostrar &&
        (biomasFiltrados.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
            {biomasFiltrados.map((bioma, index) => (

              // Uso de .map para recorrer y renderizar cada uno de mis biomas
              <Card key={index} style={{ width: "250px", margin: "10px" }}>
                <CardMedia component="img" height="140" image={bioma.imagen} alt={bioma.nombre} />
                <CardContent>
                  <Typography variant="h6">{bioma.nombre}</Typography>
                  <Typography variant="body2">{bioma.descripcion}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (

          // Este es mi mensaje de error por si no encuentra algo en mi busqueda 
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            No se encontraron biomas.
          </Typography>
        ))}
    </div>
  );
};

export default Biomas;
