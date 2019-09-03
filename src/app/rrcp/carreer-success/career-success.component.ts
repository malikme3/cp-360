import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { Device, DevicesData } from '../../@core/interfaces/iot/devices';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'rrcp-career-success',
  styleUrls: ['./career-success.component.scss'],
  templateUrl: './career-success.component.html',
})
export class CareerSuccessComponent implements OnDestroy {
  private alive = true;

  devices: Device[];
  services: any[] = ['Job Placement ', 'Resume Help', 'Interview Prep', 'Networking', 'Offer Negotiations'];

  constructor(private devicesService: DevicesData) {
    this.devicesService
      .list()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.devices = data.filter(x => x.settings);
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
