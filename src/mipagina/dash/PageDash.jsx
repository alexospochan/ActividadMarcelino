import react from 'react';
import {Link} from "react-router-dom";
import { Button } from '@mui/material';
export default function PageDash(){
return(
<div>
   detalles dash

<Link to='/dash/mexico'>Mexico</Link>
<br/>
<Link to='/dash/usa'>USA</Link>
<br/>
<Link to='/dash/34'>ID 34</Link>
<br/>
<Button 
LinkComponent={Link}
to= '/dash/holamundo'
variant="contained" color="primary">
    Ver mas
    </Button>

</div>
)
}