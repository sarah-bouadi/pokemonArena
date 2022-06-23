import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/pokemon.model";
import {PokemonService, myLog} from "../services/pokemon.service";



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pikachu!: Pokemon;
  logPikachu!: string;
  message!: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pikachu = this.pokemonService.getPokemonById(1);
    this.logPikachu = this.pokemonService.logPokemon(this.pikachu);

  }

}
