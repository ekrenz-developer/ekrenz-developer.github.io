import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemComponent } from './navbar-item.component';

describe('MenuItemComponent', () => {
  let component: NavbarItemComponent;
  let fixture: ComponentFixture<NavbarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarItemComponent],
    });
    fixture = TestBed.createComponent(NavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
