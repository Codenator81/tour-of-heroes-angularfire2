import {BrowserModule, Title}            from '@angular/platform-browser';
import {NgModule}                 from '@angular/core';
import {FlexLayoutModule}         from '@angular/flex-layout';
import 'hammerjs';

import {AppComponent}             from './app.component';
import {AppRoutingModule}         from "./app-routing.module";

import {DashboardComponent}       from "./hero/dashboard.component";
import {HeroDetailComponent}      from "./hero/hero-detail.component";
import {HeroesComponent}          from "./hero/heroes.component";
import {HeroService}              from "./services/hero.service";
import {HeroSearchComponent}      from './hero/hero-search/hero-search.component';
import {HeroNameDialogComponent}  from './hero/hero-name-dialog/hero-name-dialog.component';
import {PowerListComponent}       from "./power/power-list/power-list.component";
import {NewHeroComponent}         from './hero/new-hero/new-hero.component';
import {SharedModule} from "./shared/shared.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from "./compose-message.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroNameDialogComponent,
    PowerListComponent,
    NewHeroComponent,
    LoginComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [
    HeroService,
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [HeroNameDialogComponent]
})
export class AppModule {
}
