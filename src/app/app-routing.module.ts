import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { INTERNAL_PATHS, EMPTY_STRING } from '@data/constants';
import { HomeModule } from '@modules/home/home.module';
import { AboutModule } from '@modules/about/about.module';
import { TechStackModule } from '@modules/tech-stack/tech-stack.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { ContactModule } from '@modules/contact/contact.module';
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
      {
        path: INTERNAL_PATHS.ABOUT,
        loadChildren: () =>
          import('@modules/about/about.module').then(
            (m): typeof AboutModule => m.AboutModule
          ),
      },
      {
        path: INTERNAL_PATHS.TECH_STACK,
        loadChildren: () =>
          import('@modules/tech-stack/tech-stack.module').then(
            (m): typeof TechStackModule => m.TechStackModule
          ),
      },
      {
        path: INTERNAL_PATHS.PROJECTS,
        loadChildren: () =>
          import('@modules/projects/projects.module').then(
            (m): typeof ProjectsModule => m.ProjectsModule
          ),
      },
      {
        path: INTERNAL_PATHS.CONTACT,
        loadChildren: () =>
          import('@modules/contact/contact.module').then(
            (m): typeof ContactModule => m.ContactModule
          ),
      },
      // { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
    ],
  },
  // { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
