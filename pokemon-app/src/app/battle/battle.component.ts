import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonType} from "../models/pokemon.model";

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
