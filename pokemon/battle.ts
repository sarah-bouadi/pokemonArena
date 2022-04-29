import {Pokemon, PokemonProps} from "./Pokemon";
import {PokemonType} from "../types";

export class Battle{
    static attack(pok1_fighter:PokemonProps, pok2_damaged:PokemonProps): boolean{
        if (pok1_fighter.name=="pikachu" && pok2_damaged.name=="salamech"){
            pok1_fighter.speed += 2;
            pok2_damaged.HP -= pok1_fighter.attack
            return true;
        }
        else if (pok1_fighter.name==="bulbizarre" && pok2_damaged.name==="pikachu"){
            pok2_damaged.speed += 2;
            pok2_damaged.HP -= pok1_fighter.attack
            return true;
        }
        if (pok1_fighter.type===PokemonType.Ice && pok2_damaged.type===PokemonType.Fire){
            pok1_fighter.attack += pok1_fighter.attack * 1.5;
            pok2_damaged.HP -= pok1_fighter.attack
            return true;
        }
        return false;
    }
    static whoAttackFirst(pok1:PokemonProps, pok2:PokemonProps): undefined | Pokemon{
        if (pok1.name==="pikachu" && pok2.name==="salamech" || pok1.type===PokemonType.Fire){
            return pok1;
        }
        else if (pok1.name==="bulbizarre" && pok2.name==="pikachu"){
            return pok1;
        }
        if (pok2.name==="pikachu" && pok1.name==="salamech" || pok2.type===PokemonType.Fire){
            return pok2;
        }
        else if (pok2.name==="bulbizarre" && pok1.name==="pikachu"){
            return pok2;
        }
    }
}
