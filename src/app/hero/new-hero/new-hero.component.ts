import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent {

  @Input() hero: Hero;
  @Input() powers: Array<string>;
  @Output() saveRequest = new EventEmitter<Hero>();

  onSubmit(isValid) {
    if (isValid) {
      this.saveRequest.emit(this.hero);
    }
  }
}
