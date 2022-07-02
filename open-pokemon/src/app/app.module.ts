import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import { BattleComponent } from './battle/battle.component';
import { PokemonFighterComponent } from './pokemon-fighter/pokemon-fighter.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePokemonComponent,
    MenuComponent,
    BattleComponent,
    PokemonFighterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
