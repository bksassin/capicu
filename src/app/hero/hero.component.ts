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
    const currentHour = new Date().getHours();
    const easternTimeOffset = -4; // Eastern Time is 4 hours behind UTC (Easter Daylight Time)

    // Check if it's Thursday (4), Friday (5), or Saturday (6)
    // and if the current hour is between 12 PM (noon) and 9 PM (inclusive)
    if (
      (currentDayOfWeek >= 4 && currentDayOfWeek <= 6) &&
      (currentHour >= (12 + easternTimeOffset) && currentHour <= (21 + easternTimeOffset))
    ) {
      this.shouldShowOrderButton = true;
    }
  }
}
