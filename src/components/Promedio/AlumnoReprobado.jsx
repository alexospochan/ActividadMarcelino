import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export const AlumnoReprobado = (props) => {

  const restarNumeros = () => {
    if (props.conteo > -1) {
      props.setConteo(props.conteo - 1);
    }
  }

  return (
    <div>
      <Typography variant="h2" color="error">Reprobado</Typography>
      <h2>Tu calificación es: {props.calificacion}</h2>
      <Button variant="contained" color="secondary" onClick={restarNumeros}>
        Restar Conteo
      </Button>
      <h3>Conteo: {props.conteo}</h3>

    </div>
  )
}
