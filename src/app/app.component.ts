import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

const banner = {
  isHero: true,
  title: "Tanis Roberts",
  subtitle: "I’m Tanis, an adaptable and confident Full Stack Developer.",
  text: "I see things from all angles and love to tackle challenges head on. My ability to think both creatively and logically pushes me to develop software that’s original yet functional, bold yet user focused. I’m extremely passionate about what I do, and I’m eager to bring that passion to a brand-new and exciting role",
};

const testimonials = [
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
    quote: "I have worked with Tanis a few times now, and every time he has delivered high-quality work that has exceeded expectations.<br/><strong>He adds creative thinking to the developer process and gives extra to every project.</strong>"
  },
];

const experience = {
  title: "Experience",
  sections: [
    {
      location: "Digit.Agency (Formerly NLS ltd)",
      url: "https://digit.agency",
      years: "2022 - Present",
      roles: [
        {
          title: "Full Stack Developer",
          time: "Aug 2022 - Present",
          responsibilities: [
            "Spearheaded the delivery of multiple projects, including front and back end software development. Excellent feedback with cross-functional client partnerships as a result.",
            "Liaised with senior leaders and clients alike, building project pipelines and mapping deliverables with reliability and autonomy – even going the extra 10K for one client.",
            "Social and proactive within the wider team, organising events and inspiring team-building activities.",
          ],
        },
        {
          title: "Back End Developer",
          time: "Jan 2022 - Aug 2022",
          responsibilities: [
            "Brought a unique energy to the team and went above and beyond what’s expected of a back end developer",
            "Established and analysed business needs, designing and delivering highly effective solutions.",
          ],
        },
      ],
      technologies: [
        "WordPress",
        "Laravel",
        "NodeJs",
        "React",
        "Express",
        "TypeScript",
        "AEM",
        "Shopify",
        "SASS / SCSS",
        "Tailwind",
        "Drupal",
        "ServerlessJS",
      ]
    },
    {
      location: "Focus Group",
      url: "https://focusgroup.co.uk",
      years: "2017 - 2021",
      roles: [
        {
          title: "Junior Developer",
          time: "Jan 2020 - Dec 2021",
          responsibilities: [
            "Maintained and improved software on a large scale, developing key systems such as CRM and billing platforms using PHP frameworks.",
            "Managed key relationships between stakeholders, end users and the development team.",
          ],
        },
        {
          title: "2nd-Line Support Engineer",
          time: "Sep 2017 - Jan 2020",
          responsibilities: [
            "Provided technical suppor t for customers, colleagues and field engineers, including incidents and problems, prestaging, and more.",
            "Owned the resolution of all tickets assigned through support desk.",
            "Completed database management, spares holding, lab builds, and escalation tasks.",
          ],
        },
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Ubuntu",
        "VueJS",
        "Blade Templates",
        "PDFLib",
        "HTML",
        "JavaScript",
        "SCSS",
      ]
    },
  ],
}

const education = {
  title: "Education",
  sections: [
    {
      location: "Amazon Web Services Certification",
      years: "2022",
      roles: [
        {
          title: "AWS Cloud Practicioner",
          grade: "Pass (98%)",
          responsibilities: [
            "Demonstrated foundational knowledge of the AWS Cloud, including comprehensive understanding of key concepts, terminology, and services, acquired through AWS Cloud Practitioner certification.",
            "Developed a strong grasp of the value proposition and benefits of AWS Cloud solutions, enabling informed decision-making and identification of suitable use cases for clients.",
          ],
        },
      ],
      technologies: [
        "EC2",
        "S3",
        "RDS",
        "VPC",
        "IAM",
        "CloudFormation",
        "CloudWatch",
        "CloudFront",
        "AWS Well-Architected Framework",
        "Lambda",
        "SES",
        "Route53",
      ]
    },
    {
      location: "University Of Brighton",
      years: "2017 - 2021",
      roles: [
        {
          title: "BSC Hons Digital Games Development",
          grade: "First Class Honours",
          responsibilities: [
            "Learned all about the different technical processes required to succeed in a softwarerelated role and used these to deliver industry-level projects.",
            "Gained experience from real exper ts in the development world, working with a range of programmes, languages and technologies to enhance my skillset.",
          ],
        },
      ],
      technologies: [
        "VR",
        "AR",
        "MR",
        "Unity",
        "Unreal Engine 4",
        "Blender",
        "Autodesk Maya",
        "Javascript",
        "Phaser 3",
        "Python",
      ]
    },
    {
      location: "Farnborough College Of Technology",
      years: "2015 - 2017",
      roles: [
        {
          title: "BTEC Level 3 Diploma - Computer Science",
          grade: "DMM",
        },
        {
          title: "AS Computing",
          grade: "B",
        },
        {
          title: "AS Maths",
          grade: "C",
        },
        {
          title: "AS Physics",
          grade: "C",
        },
        {
          title: "AS Law",
          grade: "D",
        },
      ],
    },
  ]
};

const projects = {
  title: "Projects",
  type: "bgRed",
  closeOthers: true,
  items: [
    {
      name: "Digital Games Development Dissertation",
      body: "For my dissertation project, I explored the applications of Machine Learning algorithms, and conducted a study on the incremental learning styles of Deep Learning algorithms against those of humans using a 2D platformer game as a medium. This gave me a great insight into how machine learning algorithms work, and how they can be implemented to achieve complex goals.",
    },
    {
      name: "Brighton Marathon 10k - Albion In The Community",
      image: "https://media.licdn.com/dms/image/D4E22AQFJEtiyZvX6Ig/feedshare-shrink_2048_1536/0/1682686579797?e=1690416000&v=beta&t=mK4jssRfCda3pdsYFu01vqOZdgf6RpXJnuGCvYK-urY",
      body: "While at Digit (NLS), I worked closely with the Albion in the Community team, liasing with our client on a regular basis. I was responsible for all new features, implementations and maintenance of both their digital marketing and online fundraising systems. While working with them on the Brighton Marathon fundraising project, I decided to sign up to run on their behalf to raise money for their cause. After months of training, having never done any significant running before, I managed to raise over £500 for the charity and complete the 10k in just over an hour, taking 'going the extra mile' far too literally.",
    },
    {
      name: "VR Tech Demo - Digit.Agency",
      body: "In response to a client enquiry, I used the Unity games engine to build a Virtual Reality tech demo outside of work hours. This demonstrated some basic VR concepts (locomotion, 3D environments, dynamic interaction and VR UI) using an Oculus Rift, with plans to bring a similar application to the Meta Quest system in the future. While the client loved the demo and wanted to take it further, financial factors affected the launch.",
    },
    {
      name: "Project Starlight",
      body: "With the release of Unreal Engine 5, I decided to dust off the skills learnt in my degree to develop and build a game framework for UE5 to aid in rapid prototyping of game concepts in the sandbox-survival genre. The framework is designed to provide a spatial inventory and interaction system, complex locomotion options, configurable 'character sheets', and a versatile combat system. Starlight is still in early development, and I'm hoping to release a variety of games based on this framework starting mid 2024."
    },
  ]
}

const passions = {
  title: "Hobbies",
  closeOthers: true,
  items: [
    {
      name: "Working on cars",
      image: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/254846027_10224768063061720_4068432622747868836_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=AJKAZb0MS58AX9nUuXJ&_nc_ht=scontent-man2-1.xx&oh=00_AfCM8NO02r4zbmIQGS6xBo9Vrcv_UbsCFh_-AHeYYqDH0w&oe=649B2793",
      body: "I grew up around cars and car enthusiasts, and that ignited my own love for them. Now, it's become a hobby of mine to work on and modify cars with my friends. I'm the proud owner of a 2007 Mazda RX-8, which I take to car shows all over the country during the summer. It's a great chance to meet fellow car enthusiasts and show off our pride and joy.",
    },
    {
      name: "Fitness",
      body: "Following a health scare in 2020, I underwent a significant shift in prioritizing my fitness. Now, I am fully committed to regular workouts several times a week, and actively participate in various fitness-oriented charity events. This year marked a personal milestone as I completed my first 10k run. Looking ahead, I am eagerly preparing to participate in a charity boxing event at the end of 2023, aiming to raise funds for cancer research. It's immensely fulfilling to contribute to a noble cause while challenging myself physically and supporting those in need.",
    },
    {
      name: "Gaming",
      body: "During my free time, I love diving into games with fascinating and unique mechanics. I have a particular fondness for older titles or games that can't run on modern hardware, which has led to my ever-growing collection of game consoles. It's a fun hobby that keeps me entertained and allows me to explore the gaming world beyond the latest releases.",
    },
    {
      name: "Travel",
      body: "My girlfriend and I absolutely love traveling! We make it a point to visit several countries every year. There's something incredibly thrilling about discovering new cultures and exploring sights that are completely different from what we're used to in England. On top of that, I have this special tradition of spending a whole month in Portugal. I actually own an apartment there! It's my way of taking a break, switching up my environment, and getting a fresh perspective, even while working remotely. It's such a fantastic way to recharge and shake things up!"
    },
  ]
}

const contact = {
    title: "Contact Me!",
    links: [
      {
        url: "https://linkedin.com/in/tanisroberts",
        text: "linkedin.com/in/tanisroberts",
        icon: "linkedin-square"
      },
      {
        url: "https://linkedin.com/in/tanisroberts",
        text: "github.com/tanisroberts",
        icon: "github-square"
      },
      {
        url: "tel:07958671326",
        text: "07958671326",
        icon: "phone-square"
      },
      {
        url: "mailto:tanis@tanis.cc",
        text: "tanis@tanis.cc",
        icon: "envelope-square"
      },
    ],
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Houdini';
  layout = {
    banner: banner,
    experience: experience,
    education: education,
    projects: projects,
    passions: passions,
    testimonials: testimonials,
    contact: contact,
  };
  sidenav = {
    active: "top",
    groups: [
      {
        title: "Technical Skills",
        list: [
          "VR / AR / MR",
          "Machine Learning AI",
          "Troubleshooting",
          "Linux / Windows / <s>Mac</s>",
          "Variety of Languages",
          "Agile Methodologies",
          "Web / App Development",
          "Game Development",
          "Database Administration",
          "IT and Network Support",
        ]
      },
      {
        title: "Soft Skills",
        list: [
          "Organisation",
          "Communication",
          "Team Spirit",
          "Leadership",
          "Proactivity",
          "Reliability",
          "Resilience",
          "Curiosity",
        ]
      },
    ],
  };
}
