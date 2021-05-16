import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementTableComponetComponent } from './advertisement-table-componet.component';

describe('AdvertisementTableComponetComponent', () => {
  let component: AdvertisementTableComponetComponent;
  let fixture: ComponentFixture<AdvertisementTableComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementTableComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementTableComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
