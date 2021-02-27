import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './common/tool/upload-file/upload-file.component';
import { DashboardComponent } from './core/component/dashboard/dashboard.component';
import { LoginComponent } from './core/component/login/login.component';
import { LogoutComponent } from './core/component/logout/logout.component';
import { BasicAuthHtppInterceptorService } from './core/service/basic-auth-http-interceptor.service';
import { AddPageComponent } from './feature/add-page/add-page.component';
import { CreatePuzzleComponent } from './feature/create-puzzle/create-puzzle.component';
import { CreateRivistaComponent } from './feature/create-rivista/create-rivista.component';
import { ModificaRivistaComponent } from './feature/modifica-rivista/modifica-rivista.component';
import { PuzzleComponent } from './feature/puzzle/puzzle.component';
import { RivistaComponent } from './feature/rivista/rivista.component';
import { WordListComponent } from './feature/word-list/word-list.component';
import { ModificaPuzzleComponent } from './feature/modifica-puzzle/modifica-puzzle.component';
import { AggiungiParolaComponent } from './feature/word-list/aggiungi-parola/aggiungi-parola.component';
import { StatsParoleComponent } from './feature/word-list/stats-parole/stats-parole.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PuzzleComponent,
    WordListComponent,
    CreatePuzzleComponent,
    LoginComponent,
    LogoutComponent,
    CreateRivistaComponent,
    AddPageComponent,
    RivistaComponent,
    ModificaRivistaComponent,
    UploadFileComponent,
    ModificaPuzzleComponent,
    AggiungiParolaComponent,
    StatsParoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
