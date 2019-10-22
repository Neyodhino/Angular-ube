import { Directive, OnInit, Renderer2, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { ElementFinder } from 'protractor';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @ViewChild('downloadOption') documentOption: ElementRef;
  constructor(
    private rederer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {}

  @HostListener('click') click(eventData: Event) {
    this.rederer.setStyle(this.elRef.nativeElement, 'display', 'block');
  }

}


