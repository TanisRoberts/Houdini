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
  testimonials = [
    {
      image: "https://media.licdn.com/dms/image/C5603AQGwUfEVnfaddw/profile-displayphoto-shrink_800_800/0/1602611017013?e=1692835200&v=beta&t=ybv2Pz9m0ae9E8TFOLNmbaNyi9Uu43kArs1f3zZFJbo",
      name: "Darren Conyard",
      jobTitle: "Senior Web Developer",
      companyName: "WeAreMethod",
      companyUrl: "https://wearemethod.io",
      quote: "It has been great having Tanis on board for this project. He has been keen throughout the project, even with the long-winded AEM setup process and having to re-factor some of my code from the early stages of the project (I hope there is no hard feelings).</br></br>The quality of the code that Tanis supplied was always to a high standard, and he was quick to understand the process of how we were putting the website together.</br></br>I think his contributions are still to be fully appreciated but in my opinion</br><strong>he is exactly what was needed to kickstart this project.</strong>"
    },
    {
      image: "https://media.licdn.com/dms/image/D4E03AQF58VFP-ztmTQ/profile-displayphoto-shrink_800_800/0/1681406848745?e=1692835200&v=beta&t=CI7rRiRrmvzuIdX0HJt2nf7c7D0TvrGXAEJ-60DtdwY",
      name: "Pree Bissessur",
      jobTitle: "Senior Digital Project Manager",
      companyName: "Digit.Agency",
      companyUrl: "https://digit.agency",
      quote: " Amazing team work and a job well done with the deployment. Multiple directors at Clarity have expressed their gratitude and were impressed with how we handled everything."
    },
    {
      image: "https://media.licdn.com/dms/image/C4E03AQFl7fpnK5KZ6Q/profile-displayphoto-shrink_800_800/0/1516286825552?e=1692835200&v=beta&t=xGGG7PTVBa5dzz6UN6epr2dHC_UKkEQoKHhkRsr7ch8",
      name: "Deb Roberts",
      jobTitle: "Tech something",
      companyName: "Exclusive Collection",
      companyUrl: "https://www.exclusive.co.uk",
      quote: "The best son I have!"
    },
    {
      image: "https://media.licdn.com/dms/image/C4D03AQEOfOXkUqtKyg/profile-displayphoto-shrink_800_800/0/1579793765846?e=1692835200&v=beta&t=jTQEhuxIeYuIi5TEBH8sCrsG6ps8awHagkYebvwV9gI",
      name: "Megan Little",
      jobTitle: "Senior Copywriter",
      companyName: "Havas People",
      companyUrl: "https://www.havaspeople.com",
      quote: "It has been great having Tanis on board for this project. He has been keen throughout the project, even with the long-winded AEM setup process and having to re-factor some of my code from the early stages of the project (I hope there is no hard feelings).</br>The quality of the code that Tanis supplied was always to a high standard, and he was quick to understand the process of how we were putting the website together.</br>I think his contributions are still to be fully appreciated but in my opinion <strong>he is exactly what was needed to kickstart this project.</strong>"
    },
  ]
}
