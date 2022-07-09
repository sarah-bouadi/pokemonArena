import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../services/pokemon.service";
import {PokemonType} from "../models/pokemon.model";
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
  pokemonStatus!: string;
  isInBattle!: boolean;
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.pokemonIndex === 1 ? this.pokemonService.pokemon1 : this.pokemonService.pokemon2;

    this.pokemonStatus = 'Mmmm';
    this.isInBattle = false;
    this.damageActionButtonText = 'increaseDamage';
    this.todayDate = Date.now()
  }

}
