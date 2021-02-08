import React from 'react';
import PropTypes from 'prop-types';
import './DetailCharacter.css';

function Character({ name, image, species, status }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} />
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string
};

export default Character;
