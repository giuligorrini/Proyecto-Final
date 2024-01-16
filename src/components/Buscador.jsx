

import React from 'react'
import './Buscador.css'


export const Buscador =({texto,setTexto}) =>{
	
	const handleInputChange= ({target})=>{
		setTexto(target.value)
	}
	

	const handleSubmit=(e)=>{
		e.preventDefault()
		console.log(texto)
	}

	return(
		<section className='buscador'>
			<form onSubmit={handleSubmit}>
				<input type="text" name='buscar' placeholder='Nombre del personaje' value={texto} onChange={handleInputChange} />
			
	
			</form>
	
		</section>
	)
}



    



export default Buscador