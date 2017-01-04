import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Hero, emptyHero} from '../models/hero';
import {HeroService} from '../services/hero.service';
import 'rxjs/add/operator/switchMap';
import {MdDialog, MdDialogRef, MdSnackBar} from "@angular/material";
import {HeroNameDialogComponent} from "./hero-name-dialog/hero-name-dialog.component";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  heroModel: Hero = new Hero(emptyHero);
  powers: Array<string>;
  dialogRef: MdDialogRef<HeroNameDialogComponent>;
  private selectedId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit(): void {
    this.powers = this.heroService.getPower();
    this.getHeroes();
    this.route.params
      .switchMap((params: Params) => {
        return this.selectedId = params['id'];
      });
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  onSave(hero: Hero): void {
      hero.name = hero.name.trim();
      if (!hero.name) { return; }
      const heroIns = new Hero(hero);
      this.heroService.create(heroIns)
        .then(hero => {
        // keep things in sync
        this.heroes.push(hero);
        this.heroModel = new Hero(emptyHero);
        this.showFlashMessage('Hero with name ' + heroIns.name +' saved', 'SAVE');
      })
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedId == hero._id) { this.selectedId = null; }
      });
  }

  openDialog(hero: Hero) {
    this.selectedId = hero._id;
    this.dialogRef = this.dialog.open(HeroNameDialogComponent);
    this.dialogRef.componentInstance.hero = hero;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result == 'show') {
        this.dialogRef = null;
        this.router.navigate(['/detail', hero._id]);
      }
    });
  }

  showFlashMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

  isSelected(hero: Hero) { return hero._id === this.selectedId; }
}
