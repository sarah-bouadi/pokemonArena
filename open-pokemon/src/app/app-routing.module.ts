import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SinglePokemonComponent} from "./single-pokemon/single-pokemon.component";
import {MenuComponent} from "./menu/menu.component";
import {BattleComponent} from "./battle/battle.component";

const routes: Routes = [
  { path: 'pokemons/:id', component: SinglePokemonComponent},
  { path: 'pokemons', component: PokemonListComponent},
  { path: 'menu', component: MenuComponent},
  // { path: 'battleField', component: BattleComponent},
  { path: `battleField/pokemonfighter1/:pokemonfighter1/pokemonfighter2/:pokemonfighter2`, component: BattleComponent},
  { path: '', component: LandingPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
