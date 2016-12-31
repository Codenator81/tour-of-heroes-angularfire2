import {
  Component, EventEmitter, Input, Output, style, animate, transition, state, trigger,
  keyframes
} from '@angular/core';
import {Crisis} from "../models/crisis";

@Component({
  selector: 'app-new-crisis',
  templateUrl: './new-crisis.component.html',
  styleUrls: ['./new-crisis.component.scss'],
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
export class NewCrisisComponent {

  @Input() crisis: Crisis;
  @Input() powers: Array<string>;
  @Output() saveRequest = new EventEmitter<Crisis>();

  showCrisis: Boolean = false;
  flyState = 'in';

    onSubmit(isValid) {
    if (isValid) {
      this.saveRequest.emit(this.crisis);
    }
  }

  switchState() {
    if (this.showCrisis) {
      this.flyState = 'in';
    } else {
      this.flyState = 'out';
    }
    console.log(this.flyState);
  }
}
