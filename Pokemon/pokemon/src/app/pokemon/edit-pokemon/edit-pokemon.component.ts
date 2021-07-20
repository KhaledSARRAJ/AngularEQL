import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'edit-pokemon',
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
    <p class="center">
      <img *ngIf="pokemon" [src]="pokemon.picture"/>
    </p>
    <pokemon-form [pokemon]="pokemon"></pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);

  }

}
