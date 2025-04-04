import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importar las páginas principales
import PageHome from './home/PageHome';
import PageAbout from './about/PageAbout';
import PageContact from './contact/PageContact';
import PageRecetas from './recetas/PageRecetas';
import RecetaDetalle from './Recetas/RecetaDetalle'; 
import NotFound from './NotFound'
import PageDash from './dash/PageDash'
import DetallesDash from './dash/DetallesDash'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/contact" element={<PageContact />} />
                <Route path="/receta" element={<PageRecetas />} />
                
                <Route path="/receta/:id" element={<RecetaDetalle />} />

                <Route path='/dash'>
                    <Route index element={<PageDash />} />
                    <Route path=':city' element={<DetallesDash />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
