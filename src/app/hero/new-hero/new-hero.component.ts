import {
  Component, EventEmitter, Input, Output, style, animate, transition, state, trigger,
  keyframes
} from '@angular/core';
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class NewHeroComponent {

  @Input() hero: Hero;
  @Input() powers: Array<string>;
  @Output() saveRequest = new EventEmitter<Hero>();

  showHero: Boolean = false;
  flyState = 'in';

    onSubmit(isValid) {
    if (isValid) {
      this.saveRequest.emit(this.hero);
    }
  }

  switchState() {
    if (this.showHero) {
      this.flyState = 'in';
    } else {
      this.flyState = 'out';
    }
    console.log(this.flyState);
  }
}
