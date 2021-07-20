import { Injectable } from '@angular/core';

import { POKEMONS } from './model/mock-pokemons';
import { Pokemon } from './model/pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class PokemonsService {
constructor(private http: HttpClient){}
private pokemonUrl = environment.apiUrl;

private log(log: string){
  console.log(log);
}

// Gestion des erreurs
// operation: nom de la methode qui à causer l'erreur
handleError<T>(operation='operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemoens`, []))
    );
  }


  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`; // syntaxe ES6
    
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`get pokemon id=${id}`))
    );
  }

      // Retourne le pokémon avec l'identifiant passé en paramètre
      updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
        return this.http.put(`${this.pokemonUrl}/${pokemon.id}`, pokemon, httpOptions ).pipe(
          tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
          catchError(this.handleError<any>(`UpdatePokemon id=`))
        );
      }

      // Supprime le pokémon passé en paramètre
    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
      const url= `${this.pokemonUrl}/${pokemon.id}`
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      
      
      return this.http.delete<Pokemon>(url, httpOptions ).pipe(
        tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
        catchError(this.handleError<Pokemon>(`DeletePokemon`))
      );
    }


    //Retourne tous les types de pokemon
  getPokemonTypes(): string[] {
    return ['Plante','Feu','Eau', 'Insecte','Electrik','Poison','Fée','Vol']
  }

}

