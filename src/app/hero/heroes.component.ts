import {Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {Hero, IFirebaseHero, emptyHero} from '../models/hero';
import {HeroService} from '../services/hero.service';
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap';
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
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = params['id'];
        return this.heroService.visibleHeroes$;
      });
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
    this.selectedId = hero.$key;
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

  isSelected(hero: IFirebaseHero) { return hero.$key === this.selectedId; }
}
