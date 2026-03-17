import { Component } from '@angular/core';
import { HomeCategoriesComponent } from '../../components/home-categories/home-categories.component';
import { HomeContactUsComponent } from '../../components/home-contact-us/home-contact-us.component';
import { HomeWebsiteInfoBannerComponent } from '../../components/home-website-info-banner/home-website-info-banner.component';
import { HomeOffersBannerComponent } from '../../components/home-offers-banner/home-offers-banner.component';
import { HomeProductsComponent } from '../../components/home-products/home-products.component';
import { HomeMainSliderComponent } from '../../components/home-main-slider/home-main-slider.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeCategoriesComponent,
    HomeContactUsComponent,
    HomeWebsiteInfoBannerComponent,
    HomeOffersBannerComponent,
    HomeProductsComponent,
    HomeMainSliderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
