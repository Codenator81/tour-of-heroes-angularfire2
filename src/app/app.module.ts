import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./services/hero.service";
import {firebaseConfig} from "../environments/firebase.config";
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroNameDialogComponent } from './hero-name-dialog/hero-name-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroNameDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent],
  entryComponents: [HeroNameDialogComponent]
})
export class AppModule { }
