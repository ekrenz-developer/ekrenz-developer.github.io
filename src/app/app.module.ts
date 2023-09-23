import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faGithub as fabGithub,
  faLinkedin as fabLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faBars as fasBars } from '@fortawesome/free-solid-svg-icons';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './layouts/public/public.component';

@NgModule({
  declarations: [AppComponent, PublicComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fabGithub, fabLinkedin, fasBars);
  }
}
