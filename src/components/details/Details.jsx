import React, { Component } from 'react';
import DetailCharacters from './DetailCharacter';

export default class Details extends Component {

  state = {
    name: '',
    species: '',
    image: '',
    status: ''
  }

  componentDidMount= async() => {
    const URL = 'https://rickandmortyapi.com/api/character/';
    // eslint-disable-next-line
    const character = await fetch(`${URL}${this.props.match.params.details}`)
      .then(res => res.json());

    this.setState({
      name: character.name,
      species: character.species,
      image: character.image,
      status: character.status
    });
  }

  render() {

    console.log(this.state);
    const { name, species, image, status } = this.state;

    return (
      <>
        <DetailCharacters 
          name={name}
          species={species}
          image={image}
          status={status}
        />
      </>
    );
  }
}
