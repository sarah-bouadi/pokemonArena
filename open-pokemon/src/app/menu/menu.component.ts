import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";
import { PokemonDocument } from '../../../../api-back/pokemon.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pokemons!: PokemonDocument[];
  readyForBattle!: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    // this.pokemonService.getAllPokemons().subscribe((res) => {
    //   this.pokemons = res;
    // });

  }

  onBattleField() {
    console.log("onBattleField " + this.pokemonService.pokemon1 + " " + this.pokemonService.pokemon2)
    this.router.navigateByUrl(`battleField/pokemonfighter1/`+this.pokemonService.pokemon1._id+`/pokemonfighter2/`+this.pokemonService.pokemon2._id);
  }
  // onViewPokemon() {
  //   this.router.navigateByUrl(`pokemons/${this.pokemon.id}`);
  // }

  onReadyForBattle(){
    this.readyForBattle = Boolean(this.pokemonService.pokemon1) && Boolean(this.pokemonService.pokemon2)
  }

}
