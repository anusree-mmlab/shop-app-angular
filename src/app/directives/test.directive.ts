import {Directive, OnInit, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector : '[test-directive]'
})
export class testDirective implements OnInit {
    @HostBinding('class.test-bind') private ishovering: boolean;

    @HostListener('mouseover') onHover() {
        this.element.nativeElement.style.backgroundColor = '#ffcfd8';
        this.ishovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
        this.element.nativeElement.style.backgroundColor = 'white';
        this.ishovering = false;
    }
    constructor(private element : ElementRef) {

    }

    ngOnInit() {
        
    }
}