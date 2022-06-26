import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLogComponent } from './pokemon-log.component';

describe('PokemonLogComponent', () => {
  let component: PokemonLogComponent;
  let fixture: ComponentFixture<PokemonLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
