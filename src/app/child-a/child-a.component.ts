import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const nav = this.elementRef.nativeElement.querySelector('#main');
    console.log('nav:: ', nav)
    let topOfNav = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        console.log(`hitting fixNav. scrollY:: ${window.scrollY}`)
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = '0';
      }
    }

    window.addEventListener('scroll', fixNav);
  }
}
