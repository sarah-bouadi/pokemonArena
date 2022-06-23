import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
