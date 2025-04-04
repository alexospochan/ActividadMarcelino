import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Divider, Button } from '@mui/material'
import TablaProductos2 from './tablaproductos/TablaProductos2'
import Dialogo from './Dialogo'

const ProductoVerdura = () => {

    const [productosverduras, setProductosVerduras] = useState([
        {id: 1, nombre: "Lechuga", categoria: "verdura", precio: 21, cantidad: 10},
        {id: 2, nombre: "Tomate", categoria: "verdura", precio: 15, cantidad: 20},
        {id: 3, nombre: "Pimiento", categoria: "verdura", precio: 12, cantidad: 15},
        {id: 4, nombre: "Cebolla", categoria: "verdura", precio: 20, cantidad: 8},
        {id: 5, nombre: "Ajo", categoria: "verdura", precio: 5, cantidad: 30}
    ]);

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const mostrarCantidad = (producto) => {
        setProductoSeleccionado(producto);
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
    }

    return (
        <div>
            <Typography variant="h4" color="initial">Lista de Verduras</Typography>
            {productosverduras.length > 0 ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosverduras.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.categoria}</td>
                                    <td>{producto.precio}</td>
                                    <td>
                                        <Button variant="contained" color="primary" onClick={() => mostrarCantidad(producto)}>
                                            Cuantas verduras nos quedan
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Divider />
                  
                        <Dialogo 
                            open={dialogOpen} 
                            onClose={handleCloseDialog} 
                            data={productoSeleccionado} 
                        />
                    )
                    <TablaProductos2 data={productosverduras} />
                </div>
            ) : (
                <Typography variant="h6" color="initial">No hay datos de verduras compra mas :V</Typography>
            )}
        </div>
    )
}

export default ProductoVerdura