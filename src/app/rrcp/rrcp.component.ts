import { Component } from '@angular/core';

import { MENU_ITEMS } from './rrcp-menu';

@Component({
  selector: 'rrcp-pages',
  styleUrls: ['rrcp.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class RRCpComponent {
  menu = MENU_ITEMS;
}
