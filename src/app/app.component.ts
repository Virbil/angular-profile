import { Component } from '@angular/core';
import { INavigationItem } from './libs/navigation.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-profile';

   // Site Navigation
    public featureLinks: INavigationItem[] = [
        {
            name: 'HOME',
            type: 'mat',
            icon: 'insert_chart',
            link: ['first-component'],
        },
        {
            name: '2ND COMPONENT',
            type: 'mat',
            icon: 'search',
            link: ['second-component'],
        }
    ];
}
