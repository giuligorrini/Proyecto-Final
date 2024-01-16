import { useEffect, useState } from 'react'
import Characters from './components/characters';
import Paginacion from './components/Paginado/Paginacion';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import Logo from './assets/Logo.png'
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import Buscador from './components/Buscador';





function App() {
  
  const [characters,setCharacters] = useState([]);
  const [info,setInfo]=useState([]);
const [loading,setLoading]=useState(true)
const [texto,setTexto]=useState('')



 

  
  const initialUrl= "https://rickandmortyapi.com/api/character?page=";

  function fetchCharacters(url){
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>{
      setCharacters (datos.results);
      setInfo(datos.info);
      setLoading(false)
      console.log (datos.info)
    })
    .catch(error=>console.log(error));

  
  }
  
  
  useEffect(()=>{
    fetchCharacters(initialUrl);
  },[])

 const retroceder=()=>{
  fetchCharacters(info.prev);
 }

 const adelantar=()=> {
  fetchCharacters(info.next);
 }
 

  
const charactersFiltrados =characters.filter(characters=>characters.name.toLowerCase().includes(texto.toLocaleLowerCase()))
  return (
    <>
    <div className='container'>
      <figure className='logo'>
        <img src={Logo} alt="Ricky and Morty" />

      </figure>
     

    </div>
    
    <FontAwesomeIcon/>
    <Buscador texto={texto} setTexto={setTexto} />
    <Paginacion
    prev={info.prev}
    next={info.next}
    adelantar={adelantar}
    retroceder={retroceder}/>
   {
    loading ? <div>Cargando...</div>: <Characters characters={charactersFiltrados}/>
   }

    </>
  )
}

export default App