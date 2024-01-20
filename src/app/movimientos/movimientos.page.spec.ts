import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoPage } from './movimientos.page';

describe('ProductoPage', () => {
  let component: ProductoPage;
  let fixture: ComponentFixture<ProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
