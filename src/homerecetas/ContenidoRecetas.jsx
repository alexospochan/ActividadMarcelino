import React, { useState } from 'react';
import { Grid, Paper, Typography, Card, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, IconButton, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function ContenidoRecetas({ data }) {
    const [open, setOpen] = useState(false);
    const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

    const handleOpen = (receta) => {
        setRecetaSeleccionada(receta);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setRecetaSeleccionada(null);
    };

    return (
        <div>
            {!data || data.length === 0 ? (
                <Typography variant="h6" color="textSecondary">No se encontraron resultados</Typography>
            ) : (
                <Grid container padding={4} spacing={4}>
                    {data.map((receta, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card 
                                sx={{ 
                                    maxWidth: 345, 
                                    backgroundColor: "lightblue",
                                    borderRadius: 5,               
                                    boxShadow: 5,                 
                                    padding: 1                    
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={receta.strMealThumb}
                                    alt={receta.strMeal}
                                    style={{ cursor: 'pointer', borderRadius: "8px" }}
                                    onClick={() => handleOpen(receta)}
                                />
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="h6">{receta.strMeal}</Typography>
                                    <Typography variant="body2" color="textSecondary">ID: {receta.idMeal}</Typography>

                                    {/* Aqui es donde modifico el bton de youtube */}
                                    {receta.strYoutube && (
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                            <Button 
                                                variant="contained" 
                                                color="secondary" 
                                                startIcon={<YouTubeIcon />} 
                                                href={receta.strYoutube} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                sx={{ 
                                                    bgcolor: "green", 
                                                    "&:hover": { bgcolor: "red" }
                                                }}
                                            >
                                                Pica para verlo en youtube
                                            </Button>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}


            {/*Aqui muestro lo que son los dettalles de la receta*/}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                {recetaSeleccionada && (
                    <>
                        <DialogTitle>
                            {recetaSeleccionada.strMeal}
                            <IconButton edge="end" color="inherit" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            <img src={recetaSeleccionada.strMealThumb} alt={recetaSeleccionada.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
                            <Typography variant="h6" gutterBottom>Ingredientes:</Typography>
                            <ul>
                                {Array.from({ length: 20 }).map((_, i) => {
                                    const ingrediente = recetaSeleccionada[`strIngredient${i + 1}`];
                                    const medida = recetaSeleccionada[`strMeasure${i + 1}`];
                                    return ingrediente ? <li key={i}>{ingrediente} - {medida}</li> : null;
                                })}
                            </ul>
                            <Typography variant="h6" gutterBottom>Instrucciones:</Typography>
                            <Typography variant="body1">{recetaSeleccionada.strInstructions}</Typography>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </div>
    );
}
