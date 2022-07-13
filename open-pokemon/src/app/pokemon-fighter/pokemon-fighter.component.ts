import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import { PokemonDocument } from '../../../../api-back/pokemon.model';

@Component({
  selector: 'app-pokemon-fighter',
  templateUrl: './pokemon-fighter.component.html',
  styleUrls: ['./pokemon-fighter.component.scss']
})
export class PokemonFighterComponent implements OnInit {
  @Input() pokemonIndex!: number;
  pokemon!: PokemonDocument;
  isInBattle!: boolean;
  todayDate!: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon = this.pokemonIndex === 1 ? this.pokemonService.pokemon1 : this.pokemonService.pokemon2;

    this.isInBattle = false;
    this.todayDate = Date.now()
  }

}
