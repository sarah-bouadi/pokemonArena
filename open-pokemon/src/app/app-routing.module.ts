import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SinglePokemonComponent} from "./single-pokemon/single-pokemon.component";

const routes: Routes = [
  { path: 'pokemons/:id', component: SinglePokemonComponent},
  { path: 'pokemons', component: PokemonListComponent},
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
