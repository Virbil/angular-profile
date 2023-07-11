import { Component, Input } from '@angular/core';
import { INavigationItem } from '../libs/navigation.interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  @Input() featureLinks: INavigationItem[] = [];
}
