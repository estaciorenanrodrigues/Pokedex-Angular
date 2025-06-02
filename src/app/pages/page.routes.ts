import { Routes } from "@angular/router";
import { HomeComponent, DetailsComponent } from "app/pages";


export const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
]
