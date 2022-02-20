import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ol>
          {missions.map((element) => (<MissionCard
            key={ element.name }
            name={ element.name }
            year={ JSON.parse(element.year) }
            country={ element.country }
            destination={ element.destination }
          />))}
        </ol>
      </div>
    );
  }
}

export default Missions;
