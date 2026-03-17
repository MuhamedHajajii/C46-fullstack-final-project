import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOffersBannerComponent } from './home-offers-banner.component';

describe('HomeOffersBannerComponent', () => {
  let component: HomeOffersBannerComponent;
  let fixture: ComponentFixture<HomeOffersBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOffersBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOffersBannerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
