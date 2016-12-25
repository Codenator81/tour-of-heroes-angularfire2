import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero, IFirebaseHero, emptyHero} from '../models/hero';
import { HeroService } from '../services/hero.service';
import {Observable} from "rxjs";
import {MdDialog, MdDialogRef, MdSnackBar} from "@angular/material";
import {HeroNameDialogComponent} from "./hero-name-dialog/hero-name-dialog.component";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {

  heroes: Observable<IFirebaseHero[]>;
  heroModel: Hero = new Hero(emptyHero);
  powers: Array<string>;
  dialogRef: MdDialogRef<HeroNameDialogComponent>;

  constructor(
    private router: Router,
    private heroService: HeroService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.visibleHeroes$;
    this.powers = this.heroService.getPower();
  }

  onSave(hero: Hero): void {
      const heroIns = new Hero(hero);
      this.heroService.create(heroIns)
        .then(() => {
          this.heroModel = new Hero(emptyHero);
          this.showFlashMessage('Hero with name ' + heroIns.name +' saved', 'SAVE');
        });
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

  showFlashMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }
}
