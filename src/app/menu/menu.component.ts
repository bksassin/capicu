import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes = [
    { name: 'Pollo Asado (Grilled Chicken)', price: 14 },
    { name: 'Pernil (Roasted Pork)', price: 14 },
    { name: 'Carne Frita (Fried Pork chunks)', price: 14 },
    { name: '2 Empanadas', price: 12 },
  ];


  empanadas = [
    { name: 'Beef', price: 3.50 },
    { name: 'Chicken', price: 3.50 },
    { name: 'Rice', price: 3.50 },
  ];

  drinks = [
    { name: 'Cans', price: 1 },
    { name: 'Bottled Water', price: 1 },
  ];

  desserts = [
    { name: 'Guava and Cheese', price: 3 },
    { name: 'Apple', price: 3 },
    { name: 'Flan', price: 3 }
  ];

  sides = [
    { name: 'Fried Plantains', price: 3 },
    { name: 'Fried Sweet Plantains', price: 3 },
    { name: 'Potato Salad', price: 3 },
    { name: 'Arroz Con Gandules', price: 6 },
    { name: 'White Rice', price: 4 },
    { name: 'Beans', price: 4 }
  ];

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

  ngOnInit(): void {
  }
}
