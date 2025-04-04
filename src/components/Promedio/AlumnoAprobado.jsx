import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export const AlumnoAprobado = (props) => {
  return (
    <div>
        <Typography variant="h2" color="succes">Aprobado</Typography>
        <h2>Tu calificacion es : {props.calificacion}</h2>
        <Button onClick={props.sumanumeros} color="primary">
          Click Suma
        </Button>
        <h3>Conteo:{props.conteo}</h3>
        </div>
  )
}
