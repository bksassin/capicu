import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuFullComponent } from './menu-full/menu-full.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // this will now be your home page
    pathMatch: 'full' // ensures that only exactly '' is matched
  },
  {
    path: 'menu-full',
    component: MenuFullComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
