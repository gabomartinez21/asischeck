import React from 'react';

export default function WorkersView(){
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
                <div class="col-9">
                    <div className="barra">
                        <p className="text-right">Hola, Gabriel</p>
                    </div>
                    <h1>Áreas</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre Área</th>
                                <th>Número de trabajadores</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ventas</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Administración</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>Gerencia</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>Seguridad</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}