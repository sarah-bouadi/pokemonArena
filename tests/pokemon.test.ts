import {Battle, Pokemon} from "../pokemon";
import {PokemonType} from "../types";

describe('Battle', () => {
    describe('when pikachu fight against salamech', () => {
        const pok1 = new Pokemon({
            name: "pikachu",
            speed: 3,
            attack: 5,
            HP: 100,
            type: PokemonType.Fire
        })
        const pok2 = new Pokemon({
            name: "salamech",
            speed: 4,
            attack: 3,
            HP: 75,
            type: PokemonType.Fire
        })
        it('should make pikachu attack first',()=>{
            expect(Battle.whoAttackFirst(pok1, pok2)).toBe(pok1)
        });
        it('should make pikachu a winner', ()=>{
            expect(Battle.attack(pok1, pok2)).toBeTruthy()
        });
        it('should make pikachu level up', ()=>{
            expect(pok1.speed).toBe(5);
        });
    });

    describe('when pikachu fight against bulbizarre', () => {
        const pok1 = new Pokemon({
            name: "pikachu",
            speed: 3,
            attack: 5,
            HP: 100,
            type: PokemonType.Fire
        })
        const pok2 = new Pokemon({
            name: "bulbizarre",
            speed: 4,
            attack: 3,
            HP: 75,
            type: PokemonType.Fire
        })
        it('should make pikachu attack first',()=>{
            expect(Battle.whoAttackFirst(pok2, pok1)).toBe(pok2)
        });
        it('should make bulbizarre a winner', ()=>{
            expect(Battle.attack(pok2, pok1)).toBeTruthy()
        });
        it('should make bulbizarre level up', ()=>{
            expect(pok2.speed).toBe(4);
        });
    });
});