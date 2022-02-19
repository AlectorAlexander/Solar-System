import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {Planets.map((element, i) => (<PlanetCard
          key={ i }
          planetName={ element.name }
          planetImage={ element.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
