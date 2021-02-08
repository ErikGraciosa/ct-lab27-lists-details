import React, { Component } from 'react';
import Character from '../../components/characters/Character';
import styles from './AllCharacters.css';

export default class Home extends Component {
  state = {
    allCharacters: []
  }

  componentDidMount = async() => {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json());

    this.setState({
      allCharacters: characters.results
    }); 
  }

  render() {

    const { allCharacters } = this.state;
    return (
      <>
        <div className={styles.AllCharacters}>
          {allCharacters.map(char => 
            <Character 
              key={Math.random()} 
              name={char.name}
              image={char.image}
              id={char.id} />
          )}
        </div>
      </>
    );
  }
}
