import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render: Renderer2) { }
  @HostBinding('style.backgroundColor') bgColor = 'aqua';
  @HostListener('mouseenter') eventHover(): void{
    // this.ele.nativeElement.style.backgroundColor ='yellow';
    const divChild = this.render.createElement('div');
    this.render.setStyle(divChild, 'backgroundColor','red');
    this.render.setStyle(divChild, 'height','30px');
    this.render.appendChild(this.ele.nativeElement,divChild);
    this.render.setStyle(this.ele.nativeElement, 'backgroundColor','yellow')
  }
  @HostListener('mouseleave') eventLea(): void{
    this.ele.nativeElement.style.backgroundColor = 'blue';
  }
}
