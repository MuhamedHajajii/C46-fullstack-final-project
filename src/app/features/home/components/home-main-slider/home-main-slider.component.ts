import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home-main-slider',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-main-slider.component.html',
  styleUrl: './home-main-slider.component.css',
})
export class HomeMainSliderComponent {
  spaceBetween = 10;
}
