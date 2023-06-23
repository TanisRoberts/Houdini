import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { BannerComponent } from './banner/banner.component';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LayoutComponent,
    BannerComponent,
  ],
  imports: [
    TestimonialsComponent,
    BrowserModule,
    NgbModule,
    NgbdCarouselBasic
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
