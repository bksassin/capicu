import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public shouldShowOrderButton: boolean = false;

  constructor() {
    const currentDayOfWeek = new Date().getDay();

    // Check if it's Thursday (4), Friday (5), or Saturday (6)
    if (currentDayOfWeek >= 4 && currentDayOfWeek <= 6) {
      this.shouldShowOrderButton = true;
    }
  }
}

