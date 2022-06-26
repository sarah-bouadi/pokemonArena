import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pokemons!: Pokemon[];
  readyForBattle!: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getAllPokemons();
  }

  onBattleField() {
    this.router.navigateByUrl(`battleField`);
  }
  // onViewPokemon() {
  //   this.router.navigateByUrl(`pokemons/${this.pokemon.id}`);
  // }

  onReadyForBattle(){
    this.readyForBattle = Boolean(this.pokemonService.pokemon1) && Boolean(this.pokemonService.pokemon2)
  }

}
