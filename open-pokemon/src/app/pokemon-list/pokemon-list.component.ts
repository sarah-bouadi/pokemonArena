import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../services/pokemon.service";
import { PokemonDocument } from "../../../../api-back/pokemon.model"

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons!: PokemonDocument[];
  @Input() pokemonIndex!: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res;
    });
  }
}
