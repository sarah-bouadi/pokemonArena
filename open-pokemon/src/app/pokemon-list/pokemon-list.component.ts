import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getAllPokemons();
  }

}
