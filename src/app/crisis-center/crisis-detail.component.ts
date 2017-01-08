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
  editName: string;

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
      .subscribe(crisis => {
        this.crisis = crisis;
        this.editName = crisis.name;
      });
  }

  onSubmit(crisisForm) {
    if (crisisForm.form.valid) {
      this.crisis.name = this.editName;
      const crisis = new Crisis(crisisForm.value);
      this.crisisService.update(this.crisis)
        .then(() => this.goBack());
    }
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return window.confirm('Discard changes?');
  }

  goBack(): void {
    let crisisId = this.crisis ? this.crisis._id : null;
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }
}
