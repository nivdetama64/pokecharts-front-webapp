import React from 'react';
import './PokemonList.css';
import { FormInfo } from '../../../Models/Form';
import PokemonsCard from '../PokemonCard/PokemonCard';
import Grid from '@mui/material/Grid';

export interface PokemonListProps {
  Pokemons: FormInfo[],
  Form: string,
}

export default class PokemonList extends React.Component<PokemonListProps, {}> { 

  public render(): React.ReactElement<{}> {
    return (
      <Grid container spacing={2} className='pokemonList'>
        {
          this.props.Pokemons.map(pkmn => 
          <Grid item xs={6} sm={3} lg={2} key={pkmn.Id}>
            <PokemonsCard 
              selectedForm={this.props.Form}
              displayMode={0}
              Model={pkmn} 
              key={pkmn.Id}/>
          </Grid>)
        }
      </Grid>
    );
  }
}

