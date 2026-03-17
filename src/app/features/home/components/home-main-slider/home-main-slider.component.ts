import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home-main-slider',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-main-slider.component.html',
  styleUrl: './home-main-slider.component.css',
})
export class HomeMainSliderComponent {
  platform = inject(PLATFORM_ID);

  spaceBetween = 10;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      import('swiper/element/bundle').then((swapper) => {
        swapper.register();
      });
    }
  }
}
