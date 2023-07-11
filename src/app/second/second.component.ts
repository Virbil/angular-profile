import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.playSound(event);
  };

  constructor(private elementRef: ElementRef) { }


  playSound(e: KeyboardEvent) {
    const audio = this.elementRef.nativeElement.querySelector(`audio[data-key="${e.key}"]`) as HTMLAudioElement;
    const key = this.elementRef.nativeElement.querySelector(`div[data-key="${e.key}"]`) as HTMLElement;
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    this.removeTransition(e);
  }

  removeTransition(e: KeyboardEvent) {
    const key = this.elementRef.nativeElement.querySelector(`div[data-key="${e.key}"]`) as HTMLElement;
    if (!key) return;

    // key.classList.remove('playing');
  }
}
