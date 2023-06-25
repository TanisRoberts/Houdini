import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { BannerComponent } from './banner/banner.component';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TypographyTestComponent } from './typography-test/typography-test.component';
import { WorkGridComponent } from './work-grid/work-grid.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BannerComponent,
    TypographyTestComponent,
    ContactComponent,
  ],
  imports: [
    AccordionComponent,
    ContentComponent,
    SidenavComponent,
    WorkGridComponent,
    WorkCardComponent,
    TestimonialsComponent,
    BrowserModule,
    NgbModule,
    NgbdCarouselBasic,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
