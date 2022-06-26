import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonListServiceService {
  isTouched1 : boolean = false;
  isTouched2 : boolean = false;


  getIsTouched(pokemonListIndex: 1 | 2) {
    if (pokemonListIndex === 1) {
      return this.isTouched1
    } else {
      return this.isTouched2
    }
  }

  onTouch1() {
    this.isTouched1 = !this.isTouched1;
  }
  onTouch2() {
    this.isTouched2 = !this.isTouched2;
  }
}
