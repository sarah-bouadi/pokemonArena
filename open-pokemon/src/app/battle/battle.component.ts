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
  nowFighter!: number;
  pokemonStatus1!: string;
  pokemonStatus2!: string;
  isInBattle: boolean = false;
  playPauseButtonText: string = 'Start';
  damageActionButtonText!: 'increaseDamage' | 'reduceDamage';
  todayDate!: number;
  logs: string[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon1 = this.pokemonService.pokemon1;
    this.pokemon2 = this.pokemonService.pokemon2;

    this.nowFighter = this.pokemonService.whoAttackFirst();

    this.isInBattle = true;

    this.todayDate = Date.now();

    this.addLog("Let's gooooooo!\n");

    this.startBattle();
  }

  addLog(msg: string){
    this.logs.push("log " + this.logs.length + " : " + msg);
  }

  onChangeDamageAction(){
    if (this.damageActionButtonText === 'increaseDamage'){
      this.damageActionButtonText = 'reduceDamage';
    } else{
      this.damageActionButtonText = 'increaseDamage';
    }
  }

  whoAttackFirst(pok1:Pokemon, pok2:Pokemon): Pokemon{
    /* Verify by PokemonType */
    if (pok1.type == PokemonType.Fire && pok2.type == PokemonType.Fire){
      return pok1;
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

  playPauseBattle(){
   this.isInBattle = !this.isInBattle;
   if(this.isInBattle){
     this.playPauseButtonText = 'Pause'
   }else{
     this.playPauseButtonText = 'Start'
   }
  }

  changeFighter(){
    if (this.nowFighter === 1){
      this.nowFighter = 2;
    } else{
      this.nowFighter = 1;
    }
  }


  isPokemonDead(): boolean{
    return this.pokemonService.pokemon1.HP <= 0 || this.pokemonService.pokemon2.HP <= 0;
  }

  startBattle(){
    // let firstAttacker = this.whoAttackFirst(this.pokemon1, this.pokemon2);
    // let secondAttacker;
    //
    // if (firstAttacker === this.pokemon1){
    //   secondAttacker = this.pokemon2;
    // }else{
    //   secondAttacker = this.pokemon1;
    // }

    setInterval(()=>{
      if(this.isInBattle && !(this.isPokemonDead())){
        let damageValue: number;
        if (this.nowFighter === 1){
          damageValue = this.pokemonService.attack(1);
          this.addLog(this.pokemonService.pokemon1.name + " attacked ! " + this.pokemonService.pokemon2.name + " Have " + this.pokemonService.pokemon2.HP + " HP");
          // this.anAsyncCall().then(r => this.changeFighter())
          // setTimeout(this.changeFighter, 5000);
          this.changeFighter();
        }
        else{
          damageValue = this.pokemonService.attack(2);
          this.addLog(this.pokemonService.pokemon2.name + " attacked ! " + this.pokemonService.pokemon1.name + " Have " + this.pokemonService.pokemon1.HP + " HP");
          // this.anAsyncCall().then(r => this.changeFighter())
          // setTimeout(this.changeFighter, 5000);
          this.changeFighter();
        }
      }
      else{
        new Error("Stop battle!")
      }
    }, 1000);

  //   while(this.isInBattle && !(this.isPokemonDead())){
  //     let damageValue: number;
  //     if (this.nowFighter === 1){
  //       damageValue = this.pokemonService.attack(1);
  //       this.addLog(this.pokemonService.pokemon1.name + " attacked ! " + this.pokemonService.pokemon2.name + " Have " + this.pokemonService.pokemon2.HP + " HP");
  //       // this.anAsyncCall().then(r => this.changeFighter())
  //       // setTimeout(this.changeFighter, 5000);
  //       this.changeFighter();
  //     }
  //     else{
  //       damageValue = this.pokemonService.attack(2);
  //       this.addLog(this.pokemonService.pokemon2.name + " attacked ! " + this.pokemonService.pokemon1.name + " Have " + this.pokemonService.pokemon1.HP + " HP");
  //       // this.anAsyncCall().then(r => this.changeFighter())
  //       // setTimeout(this.changeFighter, 5000);
  //       this.changeFighter();
  //     }
  //   }
  // }
  }
}
