import React from 'react';

export default function HorariosView(){
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
                    <h1>Horarios</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tipo de horario</th>
                                <th>Hora Inicio</th>
                                <th>Hora Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Turno Mañana</td>
                                <td>08:00</td>
                                <td>14:00</td>
                                
                            </tr>
                            <tr>
                                <td>Turno Mediodia</td>
                                <td>12:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Turno Tarde</td>
                                <td>14:00</td>
                                <td>20:00</td>
                            </tr>
                            <tr>
                                <td>Turno Noche</td>
                                <td>18:00</td>
                                <td>00:00</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}