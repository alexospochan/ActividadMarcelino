import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function ContenidoLibro(props) {


    return (       
         <div>
             <Grid container padding={2} spacing={4}>

                {
                props.libros.map((libro, index) => (
                    <p>pochan</p>
                ))}

                
            
                 <Grid size={{ xs:12, md:4 }}>
                    <Paper style={{padding:20}}>
                    soy hijo 1
                     </Paper>
                 </Grid>
            
                  </Grid>


        </div>
    )
}


