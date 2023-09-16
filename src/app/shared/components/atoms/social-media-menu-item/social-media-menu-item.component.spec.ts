import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaMenuItemComponent } from './social-media-menu-item.component';

describe('SocialMediaMenuItemComponent', () => {
  let component: SocialMediaMenuItemComponent;
  let fixture: ComponentFixture<SocialMediaMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaMenuItemComponent],
    });
    fixture = TestBed.createComponent(SocialMediaMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
