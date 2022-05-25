import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PokemonType} from "../types";
import {Pokemon} from "../shared/Pokemon";
import {Battle} from "../shared/battle";
import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

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
      expect(Battle.whoAttackFirst(pok1, pok2)).toBe(null)
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
      expect(Battle.whoAttackFirst(pok2, pok1)).toBe(null)
    });
    it('should make bulbizarre a winner', ()=>{
      expect(Battle.attack(pok2, pok1)).toBeTruthy()
    });
    it('should make bulbizarre level up', ()=>{
      expect(pok2.speed).toBe(4);
    });
  });
});
