import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus', component: AboutComponent},
  { path: 'menu',     component: MenuComponent },
  { path: 'favorites',     component: FavoritesComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'dishdetail/:id',     component: DishDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];