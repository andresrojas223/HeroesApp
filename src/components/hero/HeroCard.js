import { Link } from 'react-router-dom'
import '../styles/styleCard.css';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (

        <div className="father">
        
        
         <div className='card_father' >
              
            <div className="card bg-dark text-white">
                
                 <img className="card-img" src={imagePath} alt={superhero}/>
               
               <div className="card-img-overlay">
        
        
               <div className="transparent">   
               
                <h5 className="card-title">{superhero}</h5>
                   <p className="card-text">{publisher}</p>
                   <p className="card-text">{alter_ego}</p>
                   {
                                        ( alter_ego !== characters ) 
                                            && <p className="text-muted">{ characters }</p>
                                    }
                   <p className="card-text">{first_appearance} <Link className='button' to={`/hero/${id}`} >
                 Leer Más
               </Link></p>
                   
                
                </div> 
        
             
        
                </div>
            </div>
        
        
          </div>
        
        
        
          </div>  
            )
        }
          