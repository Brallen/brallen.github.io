import type { ProjectCardContent } from "../../types/types";

export const cards: ProjectCardContent[] = [
  {
    image: {
      url: '../assets/images/projects/planigize-home-1.png',
      altText: 'Planigize home page',
    },
    headline: 'Planigize',
    flairText: 'Fall 2020 - Spring 2022',
    shortDescription: '6-person startup to help personal trainers establish an online presence and sell their workout plans.',
    dialogContent: {
      headline: 'Planigize',
      keyPoints: [
        'Helped develop business plan, including monetization strategy',
        'Established compensation structure as equity',
        'Designed website from scratch using Adobe XD',
        'Built front-end from scratch using React',
      ],
      images: [
        {
          altText: 'Planigize home page landing',
          url: '../assets/images/projects/planigize-home-1.png',
        },
        {
          altText: 'Planigize home page tabs',
          url: '../assets/images/projects/planigize-home-2.png',
        },
        {
          altText: 'Planigize home page call to action',
          url: '../assets/images/projects/planigize-home-3.png',
        },
        {
          altText: 'Planigize sign in ',
          url: '../assets/images/projects/planigize-sign-in.png',
        },
        {
          altText: 'Planigize sign up',
          url: '../assets/images/projects/planigize-sign-up.png',
        },
        {
          altText: 'Planigize trainer information',
          url: '../assets/images/projects/planigize-trainer.png',
        },
        {
          altText: 'Planigize day page overview',
          url: '../assets/images/projects/planigize-days-1.png',
        },
        {
          altText: 'Planigize day page calendar',
          url: '../assets/images/projects/planigize-days-2.png',
        },
        {
          altText: 'Planigize day page trainer information',
          url: '../assets/images/projects/planigize-days-3.png',
        },
        {
          altText: 'Planigize day page extra programs',
          url: '../assets/images/projects/planigize-days-4.png',
        },
      ],
    },
  },
  {
    image: {
      url: '../assets/images/projects/account-main.jpg',
      altText: 'Wacom ID home page',
    },
    headline: 'Wacom ID',
    flairText: 'October 2019 - January 2020',
    shortDescription: 'Website to register products, redeem software, and update profile information for Wacom.',
    dialogContent: {
      headline: 'Wacom ID',
      keyPoints: [
        'Tech lead',
        'Designed Sign In/Sign Up workflow',
        'Built most components',
        'Integrated components with a CMS',
        'Handled data privacy requirements for GDPR and CCPA',
        'Integrated Google Analytics',
        'Handled internationalization of site language support and video providers',
      ],
      images: [
        {
          altText: 'Wacom ID home page',
          url: '../assets/images/projects/account-modal1.jpg',
        },
        {
          altText: 'Wacom ID device page',
          url: '../assets/images/projects/account-modal2.jpg',
        },
      ],
      link: {
        url: 'https://account.wacom.com',
        text: 'View Site',
      },
    },
  },
  {
    image: {
      url: '../assets/images/projects/spotiguess-main.jpg',
      altText: 'Spotiguess Android app quiz screen',
    },
    headline: 'Spotiguess',
    flairText: 'February 2019',
    shortDescription: 'Android app using Spotify API to get a random song, play a preview, and have the user guess from 4 choices which song it is.',
    dialogContent: {
      headline: 'Spotiguess',
      keyPoints: [
        'Responsible for overall design (Adobe XD)',
        'Created all API calls to Spotify (Java)',
        'Created Settings page to adjust genre and number of rounds (Java)',
      ],
      images: [
        {
          altText: 'Spotiguess correct guess',
          url: '../assets/images/projects/spotiguess-modal1.jpg',
        },
        {
          altText: 'Spotiguess incorrect guess',
          url: '../assets/images/projects/spotiguess-modal2.jpg',
        },
        {
          altText: 'Spotiguess settings page',
          url: '../assets/images/projects/spotiguess-modal3.jpg',
        },
      ],
      link: {
        url: 'https://github.com/spotiguess-guessthatname/GuessThatName',
        text: 'View on GitHub',
      },
    },
  },
  {
    image: {
      url: '../assets/images/projects/events-main.jpg',
      altText: 'Wacom event page',
    },
    headline: 'Wacom Events',
    flairText: 'March 2020 - June 2020',
    shortDescription: 'Website to register and host in-person and online Wacom events.',
    dialogContent: {
      headline: 'Wacom Events',
      keyPoints: [
        'Built many static components',
        'Designed and built modular and customizable \'add to calendar\' component',
        'Helped design and build modular form component for use in all sign ups',
        'Integrated components with a CMS',
      ],
      images: [
        {
          altText: 'Wacom event page',
          url: '../assets/images/projects/events-modal1.jpg',
        },
        {
          altText: 'Wacom event page description',
          url: '../assets/images/projects/events-modal2.jpg',
        },
      ],
      link: {
        url: 'https://www.wacom.com/events',
        text: 'View Site',
      },
    },
  },
  {
    image: {
      url: '../assets/images/projects/teslar-main.jpg',
      altText: 'Teslar home page',
    },
    headline: 'Teslar',
    flairText: 'September 2018 - June 2019',
    shortDescription: 'Web App made to mimic the official Tesla application. App offers control of the car such as turning on and off the car, media and climate controls, and summoning.',
    dialogContent: {
      headline: 'Teslar',
      keyPoints: [
        'Team captain for 5 members',
        'Led design and implementation over course of 9 months',
        'Handled all front end work (HTML, SASS, JavaScript)',
        'Created API calls to mimic official Tesla functionality (NodeJS)',
      ],
      images: [
        {
          altText: 'Teslar control panel',
          url: '../assets/images/projects/teslar-modal1.jpg',
        },
        {
          altText: 'Teslar media controls',
          url: '../assets/images/projects/teslar-modal2.jpg',
        },
        {
          altText: 'Teslar climate controls',
          url: '../assets/images/projects/teslar-modal3.jpg',
        },
        {
          altText: 'Teslar charging controls',
          url: '../assets/images/projects/teslar-modal4.jpg',
        },
      ],
      link: {
        url: 'https://github.com/Brallen/Tesla_Capstone',
        text: 'View on GitHub',
      },
    },
  },
  {
    image: {
      url: '../assets/images/projects/developer-main.jpg',
      altText: 'Wacom for Developers home page',
    },
    headline: 'Wacom for Developers',
    flairText: 'February 2020 - March 2020',
    shortDescription: 'Developer site showcasing different APIs and SDKs that Wacom has to offer. Site offers downloads and documentation for Wacom tools.',
    dialogContent: {
      headline: 'Wacom for Developers',
      keyPoints: [
        'Tech lead for the 3 weeks of develop time',
        'Built most of the components from scratch',
        'Integrated components with a CMS',
        'Retrofit old Dashboard to work with new components and SDK downloads',
        'Handled internationalization of site language support and video providers',
      ],
      images: [
        {
          altText: 'Wacom for Developers resources page',
          url: '../assets/images/projects/developer-modal1.jpg',
        },
        {
          altText: 'Wacom for Developers use cases page',
          url: '../assets/images/projects/developer-modal2.jpg',
        },
        {
          altText: 'Wacom for Developers Universal Ink use case page',
          url: '../assets/images/projects/developer-modal3.jpg',
        },
      ],
      link: {
        url: 'https://developer.wacom.com',
        text: 'View Site',
      },
    },
  },
  {
    image: {
      url: '../assets/images/projects/creativeenterprise-main.jpg',
      altText: 'Wacom Creative Enterprise home page',
    },
    headline: 'Creative Enterprise',
    flairText: 'June 2018 - September 2018',
    shortDescription: 'Website to showcase the uses of Wacom tablets in a business to business scenario.',
    dialogContent: {
      headline: 'Creative Enterprise',
      keyPoints: [
        'Built many of the components',
        'Integrated components with a CMS',
        'Handled internationalization of site including language support and video providers',
      ],
      images: [
        {
          altText: 'Wacom Creative Enterprise products page',
          url: '../assets/images/projects/creativeenterprise-modal1.jpg',
        },
        {
          altText: 'Wacom Creative Enterprise contact form',
          url: '../assets/images/projects/creativeenterprise-modal2.jpg',
        },
        {
          altText: 'Wacom Creative Enterprise IT integrations page',
          url: '../assets/images/projects/creativeenterprise-modal3.jpg',
        },
      ],
      link: {
        url: 'https://creativeenterprise.wacom.com',
        text: 'View Site',
      },
    },
  },
];
