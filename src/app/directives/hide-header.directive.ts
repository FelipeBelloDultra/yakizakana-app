import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideHeader]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  @Input('header') header: any;
  private lastY: number = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.header = this.header.el;

    this.renderer.setStyle(this.header, 'transition', 'margin-top 250ms');
  }

  onContentScroll(event: any) {
    if (event.detail.scrollTop > this.lastY) {
      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
    } else {
      this.renderer.setStyle(this.header, 'margin-top', '0px');
    }

    this.lastY = event.detail.scrollTop
  }
}
