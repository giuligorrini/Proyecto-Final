import "./character.css";
function Characters({characters}){
 if (characters.length===0)
 return <p>No existe un personaje con ese nombre</p>
    return(
    
        <div className="container-character"> 
        
            {characters.map((characters,indice)=> (
                
                <div key={indice} className="card-character">
                    <div>
                   
                        <img className="card-img" src={characters.image} alt="personaje" />
                        <div>
                            
                            <h5>{characters.name}</h5>
                            <hr />
                            <div className="card-contenido">
                            <p>Especies: {characters.species}</p>
                            <p>Ubicacion:{characters.location.name}</p>
                            <p>Estado:{characters.status}</p>
                            <p>Genero:{characters.gender}</p>
                            </div>
                            
                            
                        </div>

                    </div>

                </div>
            )
            )}
        </div>



    )
}
export default Characters;
