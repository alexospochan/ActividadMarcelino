import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { AlumnoAprobado } from './Promedio/AlumnoAprobado';
import { AlumnoReprobado } from './Promedio/AlumnoReprobado';

export const ComponenteAlumno = () => {
  const materia1 = 10;
  const materia2 = 10;
  const promedio = (materia1 + materia2) / 2;

  const [conteo, setConteo] = useState(-1); 

  const sumanumeros = () => {
    setConteo(conteo + 1);
  }

  if (promedio > 8) {
    return (
      <AlumnoAprobado
        calificacion={promedio}
        conteo={conteo}
        sumanumeros={sumanumeros}
      />
    )
  } else {
    return (
      <AlumnoReprobado
        calificacion={promedio}
        conteo={conteo}
        setConteo={setConteo}  
      />
    )
  }
}

export default ComponenteAlumno;
