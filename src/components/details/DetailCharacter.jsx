import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, image, species, status }) {
  return (
    <div href="./2">{name}
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
