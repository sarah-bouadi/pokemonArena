import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "./pokemon.model";
import {formatDate} from "@angular/common";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";
import {PokemonListServiceService} from "../services/pokemon-list-service.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  styles: [`:host > input:checked{background-color: #f00;}`]
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() pokemonIndex!: number;
  pokemonStatus!: string;
  isInBattle!: boolean;
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;
  //isPokemonSelected!: boolean;
  // isPokemonSelected: boolean = false;

  constructor(private pokemonService: PokemonService,
              private router: Router, private pokemonListService: PokemonListServiceService) {
  }

  ngOnInit() {
    this.pokemonStatus = 'Mmmm';
    // this.isPokemonSelected = false;
    this.isInBattle = false;
    this.damageActionButtonText = 'increaseDamage';
    this.todayDate = Date.now()
  }

  // onChangePokemonStyle() {
  //     this.isPokemonSelected = !this.isPokemonSelected
  // }

  // onSelectedPokemon() {
  //   this.isPokemonSelected = true;
  //   return true;
  // }
  // onDeSelectedPokemon() {
  //   this.isPokemonSelected = false;
  // }

  onSelectPokemon(pokemon: Pokemon) {

    if (this.pokemonIndex === 1) {
      this.pokemonService.setPokemon1(pokemon);
      // this.onChangePokemonStyle()
      console.log(this.pokemonService.pokemon1);
    } else if (this.pokemonIndex === 2) {
      this.pokemonService.setPokemon2(pokemon);
      console.log(this.pokemonService.pokemon2);
      // this.onChangePokemonStyle()
    } else {
      console.log("Incorrect index, received : " + this.pokemonIndex);
    }
  }
}

