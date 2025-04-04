import React, { useState } from "react";
import { Grid, TextField, IconButton, Button, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redirigir

export default function HomeRecets() {
    const [textobuscar, setTextoBuscar] = useState('');
    const [data, setData] = useState({ meals: [] });
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const buscarcomida = async () => {
        if (textobuscar.trim() === "") {
            alert('Escribe algo por ejemplo "chickenpollo"');
            return;
        }

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textobuscar.trim()}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    React.useEffect(() => {
        const obtenerdatapre = async () => {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`, requestOptions);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerdatapre();
    }, []);

    const handleVerMas = (meal) => {
        navigate(`/receta/${meal.idMeal}`); // Redirige a la página de detalles con el ID de la receta
    };

    return (
        <div>
            <Grid container padding={4} spacing={2}>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        label="Buscar tu comida y su preparación"
                        variant="outlined"
                        onChange={(e) => setTextoBuscar(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={buscarcomida} color="primary" size="large">
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Mostrar las recetas */}
            <Grid container spacing={2}>
                {data.meals && data.meals.map((meal) => (
                    <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
                        <Paper elevation={3} style={{ padding: "10px", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" style={{ marginTop: "10px" }}>
                                {meal.strMeal}
                            </Typography>
                            <Button
                                onClick={() => handleVerMas(meal)} // Redirige al detalle con el ID de la receta
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: "10px" }}
                            >
                                Ver más
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
