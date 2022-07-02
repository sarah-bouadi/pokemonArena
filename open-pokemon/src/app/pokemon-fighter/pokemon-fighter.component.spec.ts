import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFighterComponent } from './pokemon-fighter.component';

describe('PokemonFighterComponent', () => {
  let component: PokemonFighterComponent;
  let fixture: ComponentFixture<PokemonFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
