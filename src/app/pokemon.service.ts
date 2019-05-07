import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemons } from './mock-pokemon'
import { Pokemon } from './pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }


  getPokemonList(): Observable<Pokemon[]> {
    return of(Pokemons);
  }
}
