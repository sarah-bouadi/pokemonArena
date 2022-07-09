import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonType} from "../models/pokemon.model";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import { PokemonDocument } from '../../../../api-back/pokemon.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  pokemon1!: PokemonDocument;
  pokemon2!: PokemonDocument;
  nowFighter!: number;
  isInBattle: boolean = false;
  playPauseButtonText: string = 'Start';
  todayDate!: number;
  logs: string[] = [];
  battleStarted: boolean = false;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.pokemon1 = this.pokemonService.pokemon1;
    // this.pokemon2 = this.pokemonService.pokemon2;
    this.pokemonService.getPokemonById(this.route.snapshot.paramMap.get("pokemonfighter1")).subscribe(res => {
      this.pokemon1 = JSON.parse(<string>JSON.stringify(res));
    });
    this.pokemonService.getPokemonById(this.route.snapshot.paramMap.get("pokemonfighter2")).subscribe((res) => {
      this.pokemon2 = JSON.parse(<string>JSON.stringify(res));
    });

    this.nowFighter = this.pokemonService.whoAttackFirst();

    this.isInBattle = false;


    this.todayDate = Date.now();

    this.addLog("Let's gooooooo!\n");

    this.startBattle();

    console.log(this.pokemon1 + " " + this.pokemon2);
  }

  addLog(msg: string){
    this.logs.push("log " + this.logs.length + " : " + msg);
  }

  playPauseBattle(){
   this.isInBattle = !this.isInBattle;
   if(this.isInBattle){
     this.playPauseButtonText = 'Pause';
     this.battleStarted = true;

   }else{
     this.playPauseButtonText = 'Start';
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
    setInterval(()=>{
      if(this.isInBattle && !(this.isPokemonDead())){
        if (this.nowFighter === 1){
          this.pokemonService.attack(1);
          if (this.pokemonService.pokemon2.HP <= 0){
            this.addLog(this.pokemonService.pokemon2.name + " is dead !");
            this.pokemon2.imageUrl = '/assets/imgres.png';
          }
          else{
            this.addLog(this.pokemonService.pokemon1.name + " attacked ! " + this.pokemonService.pokemon2.name + " Have " + this.pokemonService.pokemon2.HP + " HP");
          }
          this.changeFighter();
        }
        else{
          this.pokemonService.attack(2);
          if (this.pokemonService.pokemon1.HP <= 0){
            this.addLog(this.pokemonService.pokemon1.name + " is dead !")
            this.pokemon1.imageUrl = '/assets/imgres.png';
          }
          else{
            this.addLog(this.pokemonService.pokemon2.name + " attacked ! " + this.pokemonService.pokemon1.name + " Have " + this.pokemonService.pokemon1.HP + " HP");
          }
          this.changeFighter();
        }
      }
      else{
        new Error("Stop battle!")
      }
    }, 1000);
  }
}
