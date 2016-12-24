import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero, IFirebaseHero, emptyHero} from './models/hero';
import { HeroService } from './services/hero.service';
import {Observable} from "rxjs";
import {MdDialog, MdDialogRef} from "@angular/material";
import {HeroNameDialogComponent} from "./hero-name-dialog/hero-name-dialog.component";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {
  heroes: Observable<IFirebaseHero[]>;

  heroModel: Hero = new Hero(emptyHero);

  powers = [];

  dialogRef: MdDialogRef<HeroNameDialogComponent>;

  constructor(
    private router: Router,
    private heroService: HeroService,
    public dialog: MdDialog
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.visibleHeroes$;
    this.powers = this.heroService.getPower();
  }

  onSubmit(isValid): void {
    if (isValid) {
      const hero = new Hero(this.heroModel);
      this.heroService.create(hero)
        .then(() => {
          this.heroModel = new Hero(emptyHero);
        });
    }
  }

  deleteHero(hero:IFirebaseHero): void {
    this.heroService.deleteHero(hero);
  }

  openDialog(hero: IFirebaseHero) {
    this.dialogRef = this.dialog.open(HeroNameDialogComponent);
    this.dialogRef.componentInstance.hero = hero;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result == 'show') {
        this.dialogRef = null;
        this.router.navigate(['/detail', hero.$key]);
      }
    });
  }
}
