import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-work-grid',
  standalone: true,
	imports: [NgIf, NgFor, WorkCardComponent],
  templateUrl: './work-grid.component.html',
  styleUrls: ['./work-grid.component.scss']
})
export class WorkGridComponent {
  title = "My Work";
  subtitle = "It speaks for itself";
  work = [
    {
      name: "Albion In The Community",
      url: "https://albioninthecommunity.org.uk",
      image: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/340996112_2161926097879588_2590341202354725436_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V-hsPuQFkisAX_nCHFs&_nc_ht=scontent-man2-1.xx&oh=00_AfDB5yE43nYxbbMSRkYEuK5_stLzfwcylTNMymLtDaXkhA&oe=649B7697",
    },
    {
      name: "MedHub",
      url: "https://albioninthecommunity.org.uk",
      image: "https://medhub.ptcbio.com/wp-content/uploads/2020/05/Medhub_logo_Updated-05-1.png",
      background: "#373154",
    },
    {
      name: "Digit.Agency",
      url: "https://digit.agency/",
      image: "https://digit.agency/assets/images/logos/logo.svg",
    },
    {
      name: "Clarity Environmental",
      url: "https://www.clarity.eu.com/",
      image: "https://www.clarity.eu.com/wp-content/themes/clarity-child/assets/images/logo-2021-hz.svg",
    },
    {
      name: "PaceUp Media",
      url: "https://paceupmedia.co.uk/",
      image: "https://paceupmedia.co.uk/app/uploads/2022/05/logo.png",
      background: "#043E66"
    },
    {
      name: "About AADC",
      url: "https://aboutaadc.eu/?is-hcp=true",
      image: "https://aboutaadc.com/wp-content/uploads/AADC_og-image.jpg",
    },
    {
      name: "AADC Insights",
      url: "https://aadcinsights.com",
      image: "https://aboutaadc.com/wp-content/uploads/AADC_og-image.jpg",
    },
    {
      name: "Vyvgart HCP",
      url: "https://vyvgarthcp.com",
      image: "https://www.vyvgart.com/content/dam/brand-site-patient/site/logo/vyvgart-rball-dkblue-aqua.svg",
    },
    {
      name: "Hayward & Green",
      url: "https://www.haywardandgreen.com/",
      image: "https://www.haywardandgreen.com/app/themes/hag/assets/images/logo.svg",
    },
    {
      name: "Stornetic",
      url: "https://www.stornetic.com/",
      image: "https://www.stornetic.com/wp-content/uploads/2022/02/stornetic_logo_header.svg",
    },
    {
      name: "Reynolds",
      url: "https://www.reynolds-cs.com/",
      image: "https://www.reynolds-cs.com/app/themes/reynolds/dist/img/reynolds_logo_white_with_strap.svg",
      background: "#008852",
    },
    {
      name: "AllWeather Group",
      url: "https://www.theallweathergroup.co.uk/",
      image: "https://www.theallweathergroup.co.uk/wp-content/uploads/2018/07/logo_navy_blue.svg",
      background: "",
    },
    {
      name: "ETC Global",
      url: "https://enritec.com/",
      image: "https://enritec.com/app/uploads/2023/01/logo.svg",
      background: "",
    },
    {
      name: "Pruden & Smith",
      url: "https://www.prudenandsmith.com/",
      image: "data:image/png;base64,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",
      background: "",
    },
    {
      name: "Synergy",
      url: "https://synergy.t-c-n.co.uk/ii/users/login",
      image: "https://synergy.t-c-n.co.uk/ii/public/images/logo.png",
    },
  ]
}
