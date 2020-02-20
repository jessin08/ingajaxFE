import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductDataComponent } from './selected-product-data.component';

describe('SelectedProductDataComponent', () => {
  let component: SelectedProductDataComponent;
  let fixture: ComponentFixture<SelectedProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
