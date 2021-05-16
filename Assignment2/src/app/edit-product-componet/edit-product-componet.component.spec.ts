import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponetComponent } from './edit-product-componet.component';

describe('EditProductComponetComponent', () => {
  let component: EditProductComponetComponent;
  let fixture: ComponentFixture<EditProductComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
