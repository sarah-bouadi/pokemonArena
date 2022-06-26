import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonType} from "../models/pokemon.model";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  pokemon1!: Pokemon;
  pokemon2!: Pokemon;
  pokemonStatus1!: string;
  pokemonStatus2!: string;
  isInBattle!: boolean;
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon1 = this.pokemonService.pokemon1;
    this.pokemon2 = this.pokemonService.pokemon2;
    this.pokemonStatus1 = 'Mmmm';
    this.pokemonStatus2 = 'Mmmm';
    this.isInBattle = false;
    this.damageActionButtonText = 'increaseDamage';
    this.todayDate = Date.now()
  }


  attack(pok1_fighter:Pokemon, pok2_damaged:Pokemon): boolean{
    /* Default Specific attack - defense battle */
    if (pok1_fighter.name=="pikachu" && pok2_damaged.name=="salamech"){
      pok1_fighter.speed += 2;
      pok2_damaged.HP -= this.attackTypeAdvantage(pok1_fighter, pok2_damaged);
      return true;
    }
    else if (pok1_fighter.name==="bulbizarre" && pok2_damaged.name==="pikachu"){
      pok2_damaged.speed += 2;
      pok2_damaged.HP -= this.attackTypeAdvantage(pok1_fighter, pok2_damaged);
      return true;
    }
    /* Default attack - defense battle */
    else{
      pok2_damaged.HP -= this.attackTypeAdvantage(pok1_fighter, pok2_damaged);
      return true;
    }
  }

  whoAttackFirst(pok1:Pokemon, pok2:Pokemon): null | Pokemon{
    /* Verify by PokemonType */
    if (pok1.type == PokemonType.Fire && pok2.type == PokemonType.Fire){
      return null;
    }
    else if (pok1.type == PokemonType.Fire){
      return pok1;
    }
    /* Verify by pokemon name */
    else if (pok1.name==="bulbizarre" && pok2.name==="pikachu"){
      return pok1;
    }
    else if (pok2.name==="bulbizarre" && pok1.name==="pikachu"){
      return pok2;
    }
    /* Default attacker */
    else{
      return pok1;
    }
  }

  attackTypeAdvantage(pok1:Pokemon, pok2:Pokemon): number{
    if (pok1.type === PokemonType.Fire && pok2.type == PokemonType.Ice){
      return pok1.attack * 1.5 ;
    }
    else{
      return pok1.attack;
    }
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

  onDamageAction(pokemon: Pokemon){
    //this.pokemon.nb_damaged++;
    this.pokemonService.actionToPokemonById(pokemon.id, this.damageActionButtonText);
    if (this.pokemon1.id === pokemon.id){
      if (pokemon.nb_damaged > 0) {
        this.pokemonStatus1 = 'ayyy';
      }
      else if (pokemon.nb_damaged === 0) {
        this.pokemonStatus1 = 'Mmmm';
      }
      else {
        this.pokemonStatus1 = 'Youpiii';
      }
    }
    else{
      if (pokemon.nb_damaged > 0) {
        this.pokemonStatus2 = 'ayyy';
      }
      else if (pokemon.nb_damaged === 0) {
        this.pokemonStatus2 = 'Mmmm';
      }
      else {
        this.pokemonStatus2 = 'Youpiii';
      }
    }
  }

}
