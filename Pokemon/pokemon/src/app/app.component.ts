import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon/model/pokemon';
import { POKEMONS } from './pokemon/model/mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  title = 'pokemon';
  // @ts-ignore
  pokemons: Pokemon[] = null;

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }

}
