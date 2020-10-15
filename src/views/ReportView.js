import React, {useState, useEffect} from 'react';

export default function ReportView(){

    const [hora,setHora] = useState('');

    const getHora = () =>{
        const horaActual = new Date();
        setHora(`${horaActual.getHours()}:${horaActual.getMinutes()}`)

    }

    useEffect(()=>{
        getHora();
    },[])

    return(
        <div className="dashboard ">
            <div className="barra">
                <p className="text-right">Hola, Gabriel</p>
            </div>
             
             <div className="d-flex justify-content-center align-items-center hora-marcaje">
                <div className="marcaje text-center">
                    <h2>{hora}</h2>
                    <button className="btn btn-success">Marcar</button>
                </div>
             </div>
        </div>
    )
}