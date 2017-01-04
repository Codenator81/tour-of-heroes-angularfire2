import 'rxjs/add/operator/switchMap';
import {Component, OnInit, HostBinding} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Crisis} from './models/crisis';
import {CrisisService} from './services/crisis.service';
import { slideInDownAnimation } from '../animations'


@Component({
  selector: 'my-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: [ './crisis-detail.component.scss' ],
  animations: [slideInDownAnimation]
})

export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.crisisService.getCrisis(params['id']))
      .subscribe(crisis => this.crisis = crisis);
  }
  onSubmit(crisisForm) {
    if (crisisForm.form.valid) {
      const crisis = new Crisis(crisisForm.value);
      this.crisisService.update(this.crisis)
        .then(() => this.goBack());
    }
  }

  goBack(): void {
    let crisisId = this.crisis ? this.crisis._id : null;
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }
}
