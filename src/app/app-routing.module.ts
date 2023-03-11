import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsCharacterCreateComponent } from './core/components/comics-character-create/comics-character-create.component';
import { ComicsCharacterGuessComponent } from './core/components/comics-character-guess/comics-character-guess.component';

const routes: Routes = [
  { path: "character/comics/guess", component: ComicsCharacterGuessComponent},
  { path: "character/comics/create", component: ComicsCharacterCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
