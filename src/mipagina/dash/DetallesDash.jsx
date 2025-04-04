import react from 'react';
import { useParams } from 'react-router-dom';


export default function DetalleDash(){

    
let{city} = useParams ();


return(
<div>
   detalles dash
   <br/>
   
<h1>
   Datos obtenidos GET:{city}
   </h1>
</div>
)
}