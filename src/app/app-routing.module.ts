import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { INTERNAL_PATHS, EMPTY_STRING } from '@data/constants';
import { HomeModule } from '@modules/home/home.module';
import { PublicComponent } from './layouts/public/public.component';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: PublicComponent,
    children: [
      {
        path: INTERNAL_PATHS.HOME,
        loadChildren: () =>
          import('@modules/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
      },
      // { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
    ],
  },
  // { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
