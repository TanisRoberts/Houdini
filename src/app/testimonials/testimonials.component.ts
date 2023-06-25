import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @Input() data = [
    {
      image: "",
      name: "",
      jobTitle: "",
      companyUrl: "",
      companyName: "",
      quote: "",
    }
  ];
}
