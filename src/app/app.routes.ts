import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('app/pages/page.routes').then(r => r.PAGE_ROUTES)
  },
]
