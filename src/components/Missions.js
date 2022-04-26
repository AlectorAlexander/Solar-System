import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <ol>
          {missions.map((element) => (<MissionCard
            key={ element.name }
            name={ `Missão: ${element.name}` }
            year={ `Ano: ${JSON.parse(element.year)}` }
            country={ `País: ${element.country}` }
            destination={ `Destino: ${element.destination}` }
          />))}
        </ol>
      </div>
    );
  }
}

export default Missions;
