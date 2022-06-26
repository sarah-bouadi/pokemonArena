import { Injectable } from "@angular/core";
import {Pokemon} from "../pokemon/pokemon.model";

@Injectable({
  providedIn: 'root' // Explain to angular that this service is used once for the whole app
})
export class PokemonService{
    pokemons: Pokemon[] = [
      {
        id: 'pikachu',
        name: 'Pikachu',
        imageUrl: "https://cdn-icons-png.flaticon.com/512/528/528098.png",
        attack: 7,
        speed: 5,
        HP: 100,
        type: "Thunder",
        nb_damaged: 0,
        specialPower: "Thor thunder"
      },
      {
        id: 'salameck',
        name: 'salameck',
        imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188989.png",
        attack: 6,
        speed: 3,
        HP: 100,
        type: "Fire",
        nb_damaged: 0
      },
      {
        id: 'bulbizarre',
        name: 'bulbizarre',
        imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188990.png",
        attack: 5,
        speed: 4,
        HP: 100,
        type: "Ice",
        nb_damaged: 0
      }
    ];

    pokemon1!: Pokemon;
    pokemon2!: Pokemon;

    setPokemon1(pok1: Pokemon): void{
      this.pokemon1 = pok1;
    }
    setPokemon2(pok2: Pokemon): void{
      this.pokemon2 = pok2;
    }

    getAllPokemons(): Pokemon[]{
      return this.pokemons;
    }

    getPokemonById(pokemonId: string): Pokemon {
      const pokemon = this.pokemons.find(pokemon => pokemon.id === pokemonId);
      if (!pokemon){
        throw  new Error("Pokemon not found");
      }
      return pokemon;
    }

    actionToPokemonById(pokemonId: string, actionToPokemon: 'increaseDamage' | 'reduceDamage'): void{
      const pokemon = this.getPokemonById(pokemonId);
      actionToPokemon === 'increaseDamage' ? pokemon.nb_damaged++ : pokemon.nb_damaged--;
    }
}
