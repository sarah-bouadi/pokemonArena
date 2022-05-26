import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleComponent } from './battle.component';
import {Pokemon, PokemonType} from "../models/pokemon.model";

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Battle', () => {

  describe('when pikachu fight against salamech', () => {
    let battleComponent:BattleComponent = new BattleComponent();
    const pok1:Pokemon = {
      id: 1,
      name: "pikachu",
      speed: 3,
      attack: 5,
      HP: 100,
      type: PokemonType.Fire,
      imageUrl: "https://neoplaylist.s3.amazonaws.com/wp-content/uploads/2021/05/14174342/Detective-Pikachu-Featured.jpg"
    };
    const pok2:Pokemon = {
      id: 2,
      name: "salamech",
      speed: 4,
      attack: 3,
      HP: 75,
      type: PokemonType.Fire,
      imageUrl: "https://www.pokepedia.fr/images/thumb/7/7b/Bulbizarre-PGL.png/120px-Bulbizarre-PGL.png"
    };
    it('should make pikachu attack first',()=>{
      expect(battleComponent.whoAttackFirst(pok1, pok2)).toBe(null)
    });
    it('should make pikachu a winner', ()=>{
      expect(battleComponent.attack(pok1, pok2)).toBeTruthy()
    });
    it('should make pikachu level up', ()=>{
      expect(pok1.speed).toBe(5);
    });
  });

  describe('when pikachu fight against bulbizarre', () => {
    let battleComponent:BattleComponent = new BattleComponent();
    const pok1 = {
      id: 1,
      name: "pikachu",
      speed: 3,
      attack: 5,
      HP: 100,
      type: PokemonType.Fire,
      imageUrl: "https://neoplaylist.s3.amazonaws.com/wp-content/uploads/2021/05/14174342/Detective-Pikachu-Featured.jpg"
    }
    const pok2 = {
      id: 3,
      name: "bulbizarre",
      speed: 4,
      attack: 3,
      HP: 75,
      type: PokemonType.Fire,
      imageUrl: "https://images.cults3d.com/blGH584_XH56Qt8GGoT3LFl2jS4=/516x516/https://files.cults3d.com/uploaders/13649867/illustration-file/d872dc46-15b9-48f5-b2d3-0d093f082a19/Salameche_LetsGo.jpg"
    }
    it('should make pikachu attack first',()=>{
      expect(battleComponent.whoAttackFirst(pok2, pok1)).toBe(null)
    });
    it('should make bulbizarre a winner', ()=>{
      expect(battleComponent.attack(pok2, pok1)).toBeTruthy()
    });
    it('should make bulbizarre level up', ()=>{
      expect(pok2.speed).toBe(4);
    });
  });
});
