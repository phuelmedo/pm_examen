import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNavPage } from './menu-nav.page';

describe('MenuNavPage', () => {
  let component: MenuNavPage;
  let fixture: ComponentFixture<MenuNavPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
