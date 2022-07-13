import { Injectable } from "@angular/core";
import {Pokemon} from "../pokemon/pokemon.model";
import {PokemonType} from "../models/pokemon.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../environments/environment";
import { PokemonDocument } from "../../../../api-back/pokemon.model"
@Injectable({
  providedIn: 'root'
})
export class PokemonService{

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

    attack(fighterIndex:number): void{

        if (fighterIndex === 1){
            const tmp = this.attackTypeAdvantage(this.pokemon1, this.pokemon2);
            this.pokemon2.HP -= tmp;
            console.log("pok 1 attack " + tmp + "damage to pok2 have " + this.pokemon2.HP + "HP")
        }
        else if (fighterIndex === 2){
            const tmp = this.attackTypeAdvantage(this.pokemon2, this.pokemon1);
            this.pokemon1.HP -= tmp;
            console.log("pok 2 attack " + tmp + "damage to pok1  have " + this.pokemon1.HP + "HP")
        }

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
