import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  @ViewChildren('trigger') triggers: QueryList<ElementRef>;
  @ViewChild('background') background: ElementRef;
  @ViewChild('nav') nav: ElementRef;

  constructor() {
    this.triggers = new QueryList<ElementRef>();
    this.background = new ElementRef(null);
    this.nav = new ElementRef(null);
  }

  ngOnInit() {
    this.triggers.forEach((trigger: ElementRef) => {
      trigger.nativeElement.addEventListener('mouseenter', this.handleEnter.bind(this));
      trigger.nativeElement.addEventListener('mouseleave', this.handleLeave.bind(this));
    });
  }

  handleEnter(event: Event) {
    const trigger = event.target as HTMLElement;
    trigger.classList.add('trigger-enter');
    setTimeout(() => {
      if (trigger.classList.contains('trigger-enter')) {
        trigger.classList.add('trigger-enter-active');
      }
    }, 150);

    this.background.nativeElement.classList.add('open');

    const dropdown = trigger.querySelector('.dropdown') as HTMLElement;
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = this.nav.nativeElement.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    this.background.nativeElement.style.setProperty('width', `${coords.width}px`);
    this.background.nativeElement.style.setProperty('height', `${coords.height}px`);
    this.background.nativeElement.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  handleLeave(event: Event) {
    const trigger = event.target as HTMLElement;
    trigger.classList.remove('trigger-enter', 'trigger-enter-active');
    this.background.nativeElement.classList.remove('open');
  }
}
