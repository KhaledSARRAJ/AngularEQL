import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../model/mock-pokemons';
import { Router } from '@angular/router';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log('Vous avez selectionné ' + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
