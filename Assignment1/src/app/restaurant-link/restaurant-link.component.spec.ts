import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLinkComponent } from './restaurant-link.component';

describe('RestaurantLinkComponent', () => {
  let component: RestaurantLinkComponent;
  let fixture: ComponentFixture<RestaurantLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
