import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWritersComponent } from './navbar-writers.component';

describe('NavbarWritersComponent', () => {
  let component: NavbarWritersComponent;
  let fixture: ComponentFixture<NavbarWritersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarWritersComponent]
    });
    fixture = TestBed.createComponent(NavbarWritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
