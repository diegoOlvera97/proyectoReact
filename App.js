import './App.css';
import Fecha from './componentes/componenteFecha';
import Datos from './componentes/componenteDatos';
import React, { useState} from 'react';
import ComponenteForm from './componentes/componenteForm';
import EdadPerro from './componentes/componenteEdadP';
import Contador from './componentes/componenteCont';
import PokemonSearch from './componentes/PokemonSearch';
import RickAndMortyApp from './componentes/componenteRickMorty';
import Login from './componentes/Login';

function App() {
  const [operaciones, setOperacion] = useState([])
  function calcular(event){
    event.preventDefault();
    const edadH = parseInt(event.target.valor1.value, 10)
    const edadP = (edadH) * 7
    const nuevo = {
      resultado: edadP,
      valor1: edadH
    }
    setOperacion([nuevo,...operaciones])
    event.target.valor1.value='';
  }
  const [datos, setDatos] = useState({nombre: '', materia:''})
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState (false);
  const [isDateModuleEnabled, setDateModuleEnabled] = useState (false);
  const [isFormModuleEnabled, setFormModuleEnabled] = useState (false);
  const [isPokemonModuleEnabled, setPokemonModuleEnabled] = useState (false);
  const [isRickModuleEnabled, setRickModuleEnabled] = useState (false);
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState (false);
  
  const toggleAgeModule=()=>{
    setAgeModuleEnabled (!isAgeModuleEnabled);
  };
  const toggleDateModule=()=>{
    setDateModuleEnabled (!isDateModuleEnabled);
  };
  const toggleFormModule = () => {
    setFormModuleEnabled (!isFormModuleEnabled);
  };

  const togglePokemonModule = () => {
    setPokemonModuleEnabled (!isPokemonModuleEnabled);
  };

  const toggleRickModule = () => {
    setRickModuleEnabled (!isRickModuleEnabled);
  }

  const toggleLoginModule = () => {
    setLoginModuleEnabled (!isLoginModuleEnabled);
  }

  const handleFormSubmit =(data) =>{
    setDatos(data);
  }

  return(
    <section id='General'>
    <div>
      <h1 id='encabezado'>Hola esta es mi primera práctica en React</h1>

      <button className='my-button' onClick={toggleAgeModule}>
        {isAgeModuleEnabled ? 'Deshabilitar Módulo Edad Canina' : 'Habilitar Módulo Edad Canina'}
      </button>
      {isAgeModuleEnabled && <><form onSubmit={calcular}>
        <p>Ingrese su edad: <input type="text" name="valor1" /></p>
        <input className='my-button' type="submit" value="Calcular" />
      </form><EdadPerro resultados={operaciones} /></>}

      <button className='my-button' onClick={toggleDateModule}>
        {isDateModuleEnabled ? 'Deshabilitar Módulo Fecha' : 'Habilitar Módulo Fecha'}
      </button>
      {isDateModuleEnabled && <Fecha/>}

      <button className='my-button' onClick={toggleFormModule}>
        {isFormModuleEnabled ? 'Deshabilitar Módulo Formulario' : 'Habilitar Módulo Formulario'}
      </button>
      {isFormModuleEnabled && <><ComponenteForm onFormSubmit={handleFormSubmit} /><Datos nombre={datos.nombre} materia={datos.materia} /></>}

      <button className='my-button' onClick={togglePokemonModule}>
        {isPokemonModuleEnabled ? 'Deshabilitar API Pokemon' : 'Habilitar API Pokemon'}
      </button>
      {isPokemonModuleEnabled && <PokemonSearch/>}

      <button className='my-button' onClick={toggleRickModule}>
        {isRickModuleEnabled ? 'Deshabilitar API Rick&Morty' : 'Habilitar API Rick&Morty'}
      </button>
      {isRickModuleEnabled && <RickAndMortyApp/>}

      <button className='my-button' onClick={toggleLoginModule}>
        {isLoginModuleEnabled ? 'Deshabilitar Login' : 'Habilitar Login'}
      </button>
      {isLoginModuleEnabled && <Login/>}

      

      <h2 id='encabezado'>ARCADE CLICK COUNTER</h2>
      <Contador/>
    </div>
       
    </section>
  )
}

export default App;
