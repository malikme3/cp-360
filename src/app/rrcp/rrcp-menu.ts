export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/rrcp/home-page',
    // link: '/pages/dashboard',
    home: true,
  },
];

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

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
