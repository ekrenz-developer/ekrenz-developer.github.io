import { NgModule } from '@angular/core';

import { TechStackRoutingModule } from './tech-stack-routing.module';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TechStackComponent],
  imports: [SharedModule, TechStackRoutingModule],
})
export class TechStackModule {}
