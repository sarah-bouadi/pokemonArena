import { TestBed } from '@angular/core/testing';

import { PokemonListServiceService } from './pokemon-list-service.service';

describe('PokemonListServiceService', () => {
  let service: PokemonListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
