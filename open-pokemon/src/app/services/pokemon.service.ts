import { Injectable } from "@angular/core";
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonType} from "../models/pokemon.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../environments/environment";
import { PokemonDocument } from "../../../../api-back/pokemon.model"
@Injectable({
  providedIn: 'root' // Explain to angular that this service is used once for the whole app
})
export class PokemonService{
    // pokemons: Pokemon[] = [
    //   {
    //     id: 'pikachu',
    //     name: 'Pikachu',
    //     imageUrl: "https://cdn-icons-png.flaticon.com/512/528/528098.png",
    //     attack: 7,
    //     speed: 5,
    //     HP: 100,
    //     type: PokemonType.Thunder,
    //     nb_damaged: 0,
    //     specialPower: "Thor thunder"
    //   },
    //   {
    //     id: 'salameck',
    //     name: 'Salaméche',
    //     imageUrl: "https://cdn-icons-png.flaticon.com/512/188/188990.png" ,
    //     attack: 6,
    //     speed: 3,
    //     HP: 100,
    //     type: PokemonType.Fire,
    //     nb_damaged: 0
    //   },
    //   {
    //     id: 'bulbizarre',
    //     name: 'Bulbizarre',
    //     imageUrl:"https://cdn-icons-png.flaticon.com/512/188/188989.png",
    //     attack: 5,
    //     speed: 4,
    //     HP: 100,
    //     type: PokemonType.Ice,
    //     nb_damaged: 0
    //   }
    // ];

    pokemon1!: PokemonDocument;
    pokemon2!: PokemonDocument;

    constructor(private http : HttpClient) {
    }
    setPokemon1(pok1: PokemonDocument): void{
      this.pokemon1 = pok1;
    }
    setPokemon2(pok2: PokemonDocument): void{
      this.pokemon2 = pok2;
    }

    getAllPokemons(): Observable<PokemonDocument[]>{
        return this.http.get<PokemonDocument[]>(API_URL + '/api/pokemon/');
    }

    getPokemonById(pokemonId: string | null): Observable<PokemonDocument> {
        return this.http.get<PokemonDocument>(API_URL + '/api/pokemon/pokemonId/' + pokemonId);
    }

    // actionToPokemonById(pokemonId: string, actionToPokemon: 'increaseDamage' | 'reduceDamage'): void{
    //   const pokemon = this.getPokemonById(pokemonId).subscribe((res));
    //   actionToPokemon === 'increaseDamage' ? pokemon.nb_damaged++ : pokemon.nb_damaged--;
    // }

    // reducePokemonHP(pokemon: PokemonDocument, damage: number): void{
    //   pokemon.HP--;
    // }

    attack(fighterIndex:number): void{
        const pok_fighter: PokemonDocument = fighterIndex === 1 ? this.pokemon1 : this.pokemon2;
        const pok_damaged: PokemonDocument = pok_fighter.id === this.pokemon1.id ? this.pokemon2 : this.pokemon1;

        /* Default Specific attack - defense battle */
        if (pok_fighter.name=="pikachu" && pok_damaged.name=="salamech"){
            pok_fighter.speed += 2;
        }
        else if (pok_fighter.name==="bulbizarre" && pok_damaged.name==="pikachu"){
            pok_damaged.speed += 2;
        }

        // pok_damaged take a beating
        pok_damaged.HP -= this.attackTypeAdvantage(pok_fighter, pok_damaged);

        // Update the two pokemons datas in DB
        this.pokemon1 = fighterIndex === 1 ? pok_fighter : pok_damaged;
        this.pokemon2 = this.pokemon1.id === pok_fighter.id ? pok_damaged : pok_fighter;
    }

    attackTypeAdvantage(pok1:PokemonDocument, pok2:PokemonDocument): number{
        if (pok1.type === PokemonType.Fire && pok2.type == PokemonType.Ice){
            return pok1.attack * 1.5 ;
        }
        else{
            return pok1.attack;
        }
    }

    whoAttackFirst(): number{
        /* Verify by PokemonType */
        if (this.pokemon1.type == PokemonType.Fire && this.pokemon2.type == PokemonType.Fire){
            return 1;
        }
        else if (this.pokemon1.type == PokemonType.Fire){
            return 1;
        }
        /* Verify by pokemon name */
        else if (this.pokemon1.name==="bulbizarre" && this.pokemon2.name==="pikachu"){
            return 1;
        }
        else if (this.pokemon2.name==="bulbizarre" && this.pokemon1.name==="pikachu"){
            return 2;
        }
        /* Default attacker */
        else{
            return 1;
        }
    }
}
