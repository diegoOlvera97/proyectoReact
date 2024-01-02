import React,{useState,useEffect} from 'react'

function Contador(){
    //Declara una variable de estado llamada "count" y una función para actualizarla
    const[count, SetCount]=useState(0);

    //Usa el Hook useEffect para ejecutar una acción cada vez que se renderiza el componente
    useEffect(() =>{
        //Actualiza el titulo del documento usando la API del navegador 
        document.title = `Has hecho clic ${count} veces`;
    })

    return(
        <div>
            <p id='rufus'>Has hecho clic {count} veces</p>
            <button id='bubu' className='my-button' onClick={()=>SetCount(count + 1)}>
            Haz clic aquí 
            </button>
        </div>
    )
}

export default Contador

