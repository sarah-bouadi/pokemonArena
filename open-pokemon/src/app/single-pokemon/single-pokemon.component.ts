import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonStatus!: string;
  isInBattle!: boolean;
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;
  pokemonId!: string;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pokemonId = this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemonById(this.pokemonId);    this.pokemonStatus = 'Mmmm';
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

}
