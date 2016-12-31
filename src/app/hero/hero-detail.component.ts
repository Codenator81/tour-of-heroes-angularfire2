import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {IFirebaseHero, Hero} from '../models/hero';
import {HeroService} from '../services/hero.service';
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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(params['id']))
      .subscribe(hero => this.hero = hero);
    this.powers = this.heroService.getPower();
  }
  onSubmit(heroForm) {
    if (heroForm.form.valid) {
      const hero = new Hero(heroForm.value);
      this.heroService.update(this.hero, hero)
        .then(() => this.goBack());
    }
  }

  goBack(): void {
    let heroId = this.hero ? this.hero.$key : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }
}
