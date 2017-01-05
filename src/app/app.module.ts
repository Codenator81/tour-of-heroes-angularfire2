import {BrowserModule}            from '@angular/platform-browser';
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
import {CrisisModule} from "./crisis-center/crisis.module";
import {ComposeMessageComponent} from "./compose-message.component";
import {AdminModule} from "./admin/admin.module";
import {FormsModule} from "@angular/forms";
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
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    SharedModule,
    CrisisModule,
    AdminModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  entryComponents: [HeroNameDialogComponent]
})
export class AppModule {
}
