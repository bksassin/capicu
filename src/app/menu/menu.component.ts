import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes = [
    { name: 'Pollo Asado (Grilled Chicken)', price: 15 },
    { name: 'Pernil (Roasted Pork)', price: 15 },
    { name: 'Carne Frita (Fried Pork chunks)', price: 16 },
    { name: '2 Empanadas', price: 15 },
  ];


  empanadas = [
    { name: 'Beef', price: 4 },
    { name: 'Chicken', price: 4 }
  ];

  drinks = [
    { name: 'All Drinks', price: 1 },
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

  icees = [
    { name: '1 Scoop', price: 3 },
    { name: '2 Scoops', price: 5 },
  ];

  public shouldShowOrderButton: boolean = false;

  constructor() {
    const currentDayOfWeek = new Date().getDay();

    // Check if it's Thursday (4), Friday (5), or Saturday (6)
    if (currentDayOfWeek >= 4 && currentDayOfWeek <= 6) {
      this.shouldShowOrderButton = true;
    }
  }

  ngOnInit(): void {
  }
}
