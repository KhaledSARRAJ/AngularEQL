import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BorderCardDirective} from "./border-card.directive";
import{PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import{ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import{DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import{PokemonsRoutingModules} from "./pokemons-routing.modules";

@NgModule({
  imports:[
    CommonModule,
    PokemonsRoutingModules
  ],
  declarations:[
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  providers:[]
})
export class PokemonsModule{}
