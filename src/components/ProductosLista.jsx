import React from 'react'
import { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ProductoVerdura from './ProductoVerdura'

const ProductosLista = () => {
    const [luz, setLuz] = useState(false)

    const cambioestado = () => {
        setLuz(!luz)
    }
    console.log('Luz esta en: ', luz)


  return (


    <div>
      <FormControlLabel
        label="Luz Cuarto"
        control={
          <Switch
            value={luz}
            checked={luz}
            onChange={cambioestado}
            
          />
        }
      />


 <Typography variant={luz ? "h1" : "h3"} color={luz ? "success":"error"}>Luz Cuarto</Typography>

<Divider color="true" />


<ProductoVerdura/>

    </div>



  )
}

export default ProductosLista