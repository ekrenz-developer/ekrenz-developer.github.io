import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTextComponent } from './hero-text.component';

describe('HeroTextComponent', () => {
  let component: HeroTextComponent;
  let fixture: ComponentFixture<HeroTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTextComponent],
    });
    fixture = TestBed.createComponent(HeroTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
