/*
 FILE NAME: scripts/droneInfo.js
 WRITTEN BY: Magnus, Mathias, Andreas, Carl, Øyvind
 WHEN: October 2018
 PURPOSE: Store information about each drone. Will be used in 'drones.js'. Works as a .json file, but was told that using the line ending .json was not allowed, so solved it in this way. Would use .json if allowed.
 */

export default [
  {
    id: 1,
    images: [
      {
        src: './img/drones/dji/spark/spark1.jpg',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/spark/spark2.png',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/spark/spark3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Spark',
    description: 'DJI Spark is considered to be DJIs "edit & share" drone. The Spark does not require a controller allowing you to fly in no time. Spark supports hand gestures and palm landing permits stylish selfies among your friends.',
    specs: { 'Max Flight Time': '16 minutes', 'Max Speed': '50 kph', 'Weight': '300g' }
  },

  {
    id: '2',
    images: [
      {
        src: './img/drones/dji/phantom4pro/p4pro1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/phantom4pro/p4pro2.png',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/phantom4pro/p4pro3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Phantom 4 Pro v2.0',
    description: 'Our DJI Phantom 4 Pro v2.0 is suited for "prosumers" that wish to take aerial photography at near professional level. The Phantom series is suited for adventures where you can take your equipment with you by car or by other means of transportation. ',
    specs: { 'Max Flight Time': '30 minutes', 'Max Speed': '72 kph', 'Weight': '1375g' }
  },
  {
    id: '3',
    images: [
      {
        src: './img/drones/dji/phantom4adv/p4adv1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/phantom4adv/p4adv2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/phantom4adv/p4adv3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Phantom 4 Advanced',
    description: 'The DJI Phantom 4 Advanced is the little brother of the Pro v2.0. The Advanced main difference is that aperture is fixed, making ND filters necessary for most daytime operations. We would recommend to pick the pro version if you plan to photograph in narrow environments as the Pro v2.0 has 360° obstacle avoidance system.',
    specs: { 'Max Flight Time': '30 minutes', 'Max Speed': '72 kph', 'Weight': '1368g' }
  },
  {
    id: '4',
    images: [
      {
        src: './img/drones/dji/mavicpro/mavicpro1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/mavicpro/mavicpro2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/mavicpro/mavicpro3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Mavic 2 Pro',
    description: 'DJI Mavic 2 Pro is the prime standard for portable yet powerful aerial photography. The camera of the Mavic is almost up to par with the Phantom serier making it the ultimate choice for long travels to your scenery. The drone fits easily in a backpack so you can include it in your everyday carry.',
    specs: { 'Max Flight Time': '31 minutes', 'Max Speed': '72 kph', 'Weight': '907g' }
  },
  {
    id: '5',
    images: [
      {
        src: './img/drones/dji/maviczoom/maviczoom1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/maviczoom/maviczoom2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/maviczoom/maviczoom3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Mavic 2 Zoom',
    description: 'The Mavic 2 Zoom is DJI all new portable consumer drone with optical zoom capability. Create stunning video with dolly zoom or make those subjects up close and personal. The Mavic 2 Zoom is a cheaper option than the pro version, but compensates with the advanced zoom features that you currently can not find in any other consumer drone.',
    specs: { 'Max Flight Time': '31 minutes', 'Max Speed': '72 kph', 'Weight': '905g' }
  },
  {
    id: '6',
    images: [
      {
        src: './img/drones/dji/inspire/inspire1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/inspire/inspire2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/inspire/inspire3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Inspire 2',
    description: 'The DJI Inspire 2 is the entry level drone for the professional market. The camera is a fully featured system camera where the gimbal can be controlled by a second operator. This allows for the operator to split the workload allowing  the photographer to fully focus.',
    specs: { 'Max Flight Time': '27 minutes', 'Max Speed': '94 kph', 'Weight': '3440g' }
  },
  {
    id: '7',
    images: [
      {
        src: './img/drones/dji/matrice600/matrice1.jpg',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/matrice600/matrice2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/matrice600/matrice3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Matrice 600',
    description: 'DJI Matrice 600 Pro is the upper level standard for professional videography, and is the industry standard in Hollywood. The Matrice allows for any fully fledged DSLR even a RED camera. This versatility renders nearly endless possibilities.',
    specs: { 'Max Flight Time': '40 minutes', 'Max Speed': '65 kph', 'Weight': '9600g' }
  },
  {
    id: '8',
    images: [
      {
        src: './img/drones/dji/mg-1p/mg-1p1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/dji/mg-1p/mg-1p2.png',
        alt: 'Second image'
      },
      {
        src: './img/drones/dji/mg-1p/mg-1p3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'DJI Mg-1p',
    description: 'The DJI MG-1p an ultra advanced drone that aims to move agriculture into the next century. Crop dusting from above was pioneered by the Piper Pawnee in the 70s and 80s. DJIs vision is to inherit the spirit of the Pawnee, and create the new flag standard for aerial crop dusting. Five MG-1ps can simultaneously crop dust a field, increasing efficiency and cost at the same time.',
    specs: { 'Max Flight Time': '20 minutes', 'Max Speed': '54 kph', 'Weight': '9700g' }
  },
  {
    id: '9',
    images: [
      {
        src: './img/drones/parrot/anafi/anafi1.png',
        alt: 'First image'
      },
      {
        src: './img/drones/parrot/anafi/anafi2.jpg',
        alt: 'Second image'
      },
      {
        src: './img/drones/parrot/anafi/anafi3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'Parrot Anafi',
    description: 'The Parrot Anafi focuses on the core flight characteristics of drone flying without compromising camera quality. Anafi is considered to be a good choice for newcomers that wants a fun experience with drone flying.',
    specs: { 'Max Flight Time': '25 minutes', 'Max Speed': '55 kph', 'Weight': '320g' }
  },
  {
    id: '10',
    images: [
      {
        src: './img/drones/parrot/disco/disco1.jpg',
        alt: 'First image'
      },
      {
        src: './img/drones/parrot/disco/disco2.png',
        alt: 'Second image'
      },
      {
        src: './img/drones/parrot/disco/disco3.jpg',
        alt: 'Third image'
      }
    ],
    name: 'Parrot Disco',
    description: 'Parrot Disco aims to create a birds eye effect to your imagery. The Disco utilizes lift-by-wing instead of propeller giving more time in the air than the ground. The Parrot Disco is the perfect fit for wide areas with large space for landing and take off. Pick the Disco if you plan to make fast paced action scenes over scenery that expands over large areas.',
    specs: { 'Max Flight Time': '15 minutes', 'Max Speed': '52 kph', 'Weight': '390g' }
  }
];