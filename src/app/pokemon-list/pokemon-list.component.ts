import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { DropdownValue } from '../dropdownvalue';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  keysearch: string;
  category: string;
  tobesearched: ["Generation","Types"];

  constructor(private pokemonService: PokemonService) { 
   
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemonList()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  searching(): void {
    console.log(this.keysearch)
    this.pokemons = this.pokemons.filter(p => p[this.keysearch]= this.keysearch)
  }
  setsearchCategory(){
    console.log(this.category)
  }

 


 

}
