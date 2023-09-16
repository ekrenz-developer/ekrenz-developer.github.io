import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule, ContactRoutingModule],
})
export class ContactModule {}
