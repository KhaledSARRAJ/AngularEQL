import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BorderCardDirective} from "./border-card.directive";
import{PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import{ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import{DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import{PokemonsRoutingModules} from "./pokemons-routing.modules";
import {PokemonsService} from "./pokemons.service";
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    PokemonsRoutingModules
  ],
  declarations:[
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent,
    PokemonFormComponent
  ],
  providers:[PokemonsService]
})
export class PokemonsModule{}
