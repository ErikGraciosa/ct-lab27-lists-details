import React, { Component } from 'react';

export default class Home extends Component {

  state = {
    allCharacters: []
  }

  componentDidMount = async () => {
    const characters = await fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json());

    this.setState({
      allCharacters: characters
    })  

  }

  render() {
    console.log(this.state.allCharacters)
    return (
      <p>Place Holder for Home page</p>
    );
  }
}
