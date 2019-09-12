export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/rrcp/home-page',
    // link: '/pages/dashboard',
    home: true,
  },
];



import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RRCpMenu {
  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: any[] = [
      {
        title: 'Home',
        icon: 'home-outline',
        link: '/rrcp/home-page',
        home: true,
        children: undefined,
      },
      {
        title: 'JOB Help',
        icon: 'keypad-outline',
        link: '/rrcp/career-success',
        children: undefined,
      },
    ];

    return of([...dashboardMenu]);
  }
}
