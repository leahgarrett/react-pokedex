import React, { Component} from 'react';

class PokeInfo extends Component {
  state = {
    poke: null
  }
  componentDidMount() {
    console.log('POKEINFO DID MOUNT')
  }
  // shouldComponentUpdate(newProps, newState) {
  //   console.log('POKEINFO UPDATE?');

  //   console.log(newProps)
  //   console.log(newState)
  //   return (newProps.pokemon && this.props.pokemon && newProps.pokemon.id !== this.props.pokemon.id);
  // }
  componentDidUpdate(prevProps) {
    console.log('POKEINFO DID UPDATE')
    console.log(this.props.pokemon)
    console.log(prevProps.pokemon)
    const checkPrevPropsExist = (prevProps != null && prevProps.pokemon != null);
    const checkCurrentPropsExist = (this.props.pokemon != null)
    console.log(`checkPrevPropsExist ${checkPrevPropsExist}`)
    console.log(`checkCurrentPropsExist ${checkCurrentPropsExist}`)
    if (checkCurrentPropsExist &&
      checkPrevPropsExist) {
        const checkSelectedPokeDifferent = (prevProps.pokemon.name !== this.props.pokemon.name);

        console.log()

        console.log(`prevProps.pokemon.id ${prevProps.pokemon.name}`)
        console.log(`this.props.pokemon.id ${this.props.pokemon.name}`)
        console.log(`checkSelectedPokeDifferent ${checkSelectedPokeDifferent}`)
        if (  checkSelectedPokeDifferent) {
          console.log('loading data')
          const { url } = this.props.pokemon;
          fetch(url)
          .then(resp => resp.json())
          .then(json => {
            this.setState({ poke: json })
          })
        }
      }

  }
  render() {
    console.log(this.state.poke)
    if (this.state.poke) {
      const { id, name, height, weight } = this.state.poke;
      return (
        <div>
            <h3>More Information</h3>
            <h4>{id}: {name}</h4>
            <p>Height: {height} | Weight: {weight} </p>
        </div>
      );
    }

    return  null;

  }
}

export default PokeInfo;
