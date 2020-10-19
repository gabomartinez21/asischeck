import React from 'react';
import Graficos from '../componentes/Graficos';
    
export default function DashboardView(user){
    console.log(user)
    return(
        <div className="dashboard">
            <div className="row">
                <div className="col-3 sidebar">
                    <h1>AsisCheck</h1>
                    <ul className="mt-5 nav flex-column">
                        <li className="nav-item">
                            <a href="/lista-trabajadores">Listado de Trabajadores</a>
                        </li>
                        <li className="nav-item">
                            <a href="/lista-proveedores">Listado de Proveedores</a>
                        </li>
                        <li className="nav-item">
                            <a href="/horarios">Listado de Horarios</a>
                        </li>
                        <li className="nav-item">
                            <a href="/areas">Listado de Áreas</a>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    <div className="barra">
                        <p className="text-right">Hola, Gabriel</p>
                    </div>

                    <div className="container">
                        <Graficos />
                    </div>

                </div>
            </div>
        </div>
    )
}