import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon.model";
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
    this.pokemonService.getAllPokemons().subscribe((res) => {
      this.pokemons = res;
    });

  }

  onBattleField() {
    this.router.navigateByUrl(`battleField/pokemonfighter1/`+this.pokemonService.pokemon1.id+`/pokemonfighter2/`+this.pokemonService.pokemon2.id);
  }
  // onViewPokemon() {
  //   this.router.navigateByUrl(`pokemons/${this.pokemon.id}`);
  // }

  onReadyForBattle(){
    this.readyForBattle = Boolean(this.pokemonService.pokemon1) && Boolean(this.pokemonService.pokemon2)
  }

}
