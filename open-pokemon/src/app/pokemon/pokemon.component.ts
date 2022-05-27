import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "./pokemon.model";
import {formatDate} from "@angular/common";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  pokemonStatus!: string;
  isInBattle!: boolean;
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;

  constructor(private pokemonService: PokemonService,
              private router: Router) {
  }

  ngOnInit() {
    this.pokemonStatus = 'Mmmm';
    this.isInBattle = false;
    this.damageActionButtonText = 'increaseDamage';
    this.todayDate = Date.now()
  }

  onEnterBattle(){
    this.isInBattle = true;
  }

  onQuitBattle(){
    this.isInBattle = false;
  }

  onChangeDamageAction(){
    if (this.damageActionButtonText === 'increaseDamage'){
      this.damageActionButtonText = 'reduceDamage';
    } else{
      this.damageActionButtonText = 'increaseDamage';
    }
  }

  onDamageAction(){
    //this.pokemon.nb_damaged++;
    this.pokemonService.actionToPokemonById(this.pokemon.id, this.damageActionButtonText);
    if (this.pokemon.nb_damaged > 0) {
      this.pokemonStatus = 'ayyy';
    }
    else if (this.pokemon.nb_damaged === 0) {
      this.pokemonStatus = 'Mmmm';
    }
    else {
      this.pokemonStatus = 'Youpiii';
    }
  }

  onViewPokemon() {
    this.router.navigateByUrl(`pokemons/${this.pokemon.id}`);
  }
}
