import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import { PokemonDocument } from '../../../../api-back/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  styles: [`:host > input:checked{background-color: #f00;}`]
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: PokemonDocument;
  @Input() pokemonIndex!: number;
  todayDate!: number;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.todayDate = Date.now()
  }

  onSelectPokemon(pokemon: PokemonDocument) {
    if (this.pokemonIndex === 1) {
      this.pokemonService.setPokemon1(pokemon);
    } else if (this.pokemonIndex === 2) {
      this.pokemonService.setPokemon2(pokemon);
    } else {
      console.log("Incorrect index, received : " + this.pokemonIndex);
    }
  }
}

