import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() data: any = {
    isHero: false,
    title: "",
    subtitle: "",
    text: "",
  }
  array = ["hello", "world"]
}
