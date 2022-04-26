import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          {Planets.map((element, i) => (<PlanetCard
            key={ i }
            planetName={ element.name }
            planetImage={ element.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
