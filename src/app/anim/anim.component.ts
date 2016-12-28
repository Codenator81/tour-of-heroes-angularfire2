import {Component, animate, transition, style, state, trigger} from '@angular/core';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimComponent {

  buttonState = 'inactive';

  toggleState() {
    this.buttonState = this.buttonState == 'inactive'? 'active' : 'inactive';
  }

}
