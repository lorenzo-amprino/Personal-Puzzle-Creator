import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleComponent } from './feature/puzzle/puzzle.component';
import { CreatePuzzleComponent } from './feature/create-puzzle/create-puzzle.component';
import { LoginComponent } from './core/component/login/login.component';
import { LogoutComponent } from './core/component/logout/logout.component';
import { AuthGuardService } from './core/service/auth-guard.service';
import { CreateRivistaComponent } from './feature/create-rivista/create-rivista.component';
import { AddPageComponent } from './feature/add-page/add-page.component';
import { RivistaComponent } from './feature/rivista/rivista.component';
import { ModificaRivistaComponent } from './feature/modifica-rivista/modifica-rivista.component';
import { ModificaPuzzleComponent } from './feature/modifica-puzzle/modifica-puzzle.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'puzzle', component: PuzzleComponent, canActivate:[AuthGuardService]},
  {path: 'create', component: CreatePuzzleComponent, canActivate:[AuthGuardService]},
  {path: 'rivista', component: RivistaComponent, canActivate:[AuthGuardService]},
  {path: 'add-page', component: AddPageComponent, canActivate:[AuthGuardService]},
  {path: 'modificaRivista/:id', component: ModificaRivistaComponent, canActivate:[AuthGuardService]},
  {path: 'modificaPuzzle/:id', component: ModificaPuzzleComponent, canActivate:[AuthGuardService]},
  {path: '' , redirectTo:'/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
