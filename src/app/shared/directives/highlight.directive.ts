import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#fff';
    el.nativeElement.style.padding = '20px';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
