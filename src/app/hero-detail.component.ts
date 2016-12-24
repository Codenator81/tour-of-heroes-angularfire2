import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {IFirebaseHero, Hero}         from './models/hero';
import { HeroService }  from './services/hero.service';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: IFirebaseHero;
  powers = [];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(params['id']))
      .subscribe(hero => this.hero = hero);
    this.powers = this.heroService.getPower();
  }
  onSubmit(heroForm) {
    this.heroService.update(this.hero, heroForm.value)
    .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
