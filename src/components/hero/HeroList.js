import { useMemo } from 'react';
import '../styles/styleCard.css';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <div className="animate__animated animate__bounceIn animate__delay-0.9s">
            
            <div>
            
          <ul>

            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }

            </ul>
            </div>
        </div>
    )
}
