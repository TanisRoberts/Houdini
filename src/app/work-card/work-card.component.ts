import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  standalone: true,
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
  @Input() name = "";
  @Input() image = "";
  @Input() url = "";
  @Input() background = "inherit";
}
