import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div
        className="planet-card"
        data-testid="planet-card"
        id={ planetName }
      >
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img
          className={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
