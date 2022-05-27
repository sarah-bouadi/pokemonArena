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
        imageUrl: "https://neoplaylist.s3.amazonaws.com/wp-content/uploads/2021/05/14174342/Detective-Pikachu-Featured.jpg",
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
        imageUrl: "https://www.pokepedia.fr/images/thumb/7/7b/Bulbizarre-PGL.png/120px-Bulbizarre-PGL.png",
        attack: 6,
        speed: 3,
        HP: 100,
        type: "Fire",
        nb_damaged: 0
      },
      {
        id: 'bulbizarre',
        name: 'bulbizarre',
        imageUrl: "https://images.cults3d.com/blGH584_XH56Qt8GGoT3LFl2jS4=/516x516/https://files.cults3d.com/uploaders/13649867/illustration-file/d872dc46-15b9-48f5-b2d3-0d093f082a19/Salameche_LetsGo.jpg",
        attack: 5,
        speed: 4,
        HP: 100,
        type: "Ice",
        nb_damaged: 0
      }
    ];

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
