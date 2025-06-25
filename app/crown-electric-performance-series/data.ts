import MarkhorIMG from '../../public/assets/PerformanceSeries/Markhor.webp'
import CherryIMG from '../../public/assets/PerformanceSeries/Cherry.webp'
import ChampionIMG from '../../public/assets/PerformanceSeries/Champion.webp'
import RaftaarIMG from '../../public/assets/PerformanceSeries/Raftaar.webp'
import VictoryIMG from '../../public/assets/PerformanceSeries/Victory.webp'
// Logo
import MarkhorLogo from '../../public/assets/PerformanceSeries/logos/MarkhorLogo.svg'
import CherryLogo from '../../public/assets/PerformanceSeries/logos/CherryLogo.svg'
import ChampionLogo from '../../public/assets/PerformanceSeries/logos/ChampionLogo.svg'
import RaftaarLogo from '../../public/assets/PerformanceSeries/logos/RaftaarLogo.svg'
import VictoryLogo from '../../public/assets/PerformanceSeries/logos/VictoryLogo.svg'
// Performance
import Markhor from '../../public/assets/PerformanceSeries/comparison/Markhor.webp'
import Cherry from '../../public/assets/PerformanceSeries/comparison/Cherry.webp'
import Champion from '../../public/assets/PerformanceSeries/comparison/Champion.webp'
import Raftaar from '../../public/assets/PerformanceSeries/comparison/Raftaar.webp'
import Victory from '../../public/assets/PerformanceSeries/comparison/Victory.webp'
// Slides
import ChampionWeb from "../../public/assets/Home/Header/web/champion.webp"
import VictoryWeb from "../../public/assets/Home/Header/web/velocity.webp"
import RaftaarWeb from "../../public/assets/Home/Header/web/raftaar.webp"
import MarkhorWeb from "../../public/assets/Home/Header/web/markhor.webp"
import CherryWeb from "../../public/assets/Home/Header/web/cherry.webp"
// Slides Mob
import ChampionMob from "../../public/assets/Home/Header/mobile/champion.webp"
import VictoryMob from "../../public/assets/Home/Header/mobile/velocity.webp"
import RaftaarMob from "../../public/assets/Home/Header/mobile/raftaar.webp"
import CherryMob from "../../public/assets/Home/Header/mobile/cherry.webp"
import MarkhorMob from "../../public/assets/Home/Header/mobile/markhor.webp"


export const Slides = [
      {
    title: 'Crown Markhor Power. Performance. Precision.',
    subtitle: 'Crown Markhor is a powerful, smart, and secure electric bike built for high performance, heavy-duty use, and bold, sustainable mobility.',
    buttonText: 'Book Now',
    imageSrc: MarkhorWeb,
    mobileImageSrc: MarkhorMob,
    href: "/crown-electric-markhor",
    color: "black-30",
    price: "380,000"

  },
    {
    title: 'Crown Electric Cherry - The Vintage Way',
    subtitle: 'Crown Cherry combines bold style with powerful performance, offering a smooth and efficient ride for urban commuters . ',
    buttonText: 'Book Now',
    imageSrc: CherryWeb,
    mobileImageSrc: CherryMob,
    href: "/crown-electric-cherry",
    color: "black",
    price: "380,000"

  },
  {
    title: 'Crown Electric Champion - The Range Star',
    subtitle: 'Built with immense range of more than 220KM in single charge, Crown Champion is the ultimate choice with speed and durability with 72V60Ah Lithium Iron Phosphate Battery.',
    buttonText: 'Book Now',
    imageSrc: ChampionWeb,
    mobileImageSrc: ChampionMob,
    href: "/crown-electric-champion",
    color: "white",
    price: "325,000"

  },
    {
    title: 'Crown Electric Raftaar: Big Power, Bigger Thrill',
    subtitle: 'Massive torque for instant acceleration. Powered by a high-capacity 72V40Ah Lithium Iron Phosphate battery for lasting performance.',
    buttonText: 'Book Now',
    imageSrc: RaftaarWeb,
    mobileImageSrc: RaftaarMob,
    href: "/crown-electric-raftaar",
    color: "white",
    price: "299,000"

  },
    {
    title: 'Crown Electric Victory - Unleash Urban Power',
    subtitle: 'The Crown Victory offers strong performance, modern design, and affordability. Built with a 1000W motor and 72V 30Ah Lithium Iron Phosphate battery , it delivers up to 120 km range and 55 km/h speed —ideal for city rides. Stylish, lightweight, and built to impress.',
    buttonText: 'Book Now',
    imageSrc: VictoryWeb,
    mobileImageSrc: VictoryMob,
    href: "/crown-electric-victory",
    color: "black",
    price: "265,000"

  },
  
]


export const performanceData = [
  {
    img: Markhor,
    logo: MarkhorLogo,
    PKR: "380,000",
    range: "90-100 km",
    speed: "90-100 km/h",
    motor: "3000W",
    battery: "72V 40AH",
  },
  {
    img: Cherry,
    logo: CherryLogo,
    PKR: "380,000",
    range: "110-130 km",
    speed: "75-80 km/h",
    motor: "3000W",
    battery: "72V 40AH",
    exploreLink: "/crown-electric-cherry"
  },
  {
    img: Champion,
    logo: ChampionLogo,
    PKR: "325,000",
    range: "200-220 km",
    speed: "65-70 km/h",
    motor: "1200W",
    battery: "72V 60AH",
    exploreLink: "/crown-electric-champion"
  },
  {
    img: Raftaar,
    logo: RaftaarLogo,
    PKR: "299,000",
    range: "140-160 km",
    speed: "85-90 km/h",
    motor: "2000W",
    battery: "72V 40AH",
    exploreLink: "/crown-electric-raftaar"

  },
  {
    img: Victory,
    logo: VictoryLogo,
    PKR: "265,000",
    range: "100-120 km",
    speed: "50-55 km/h",
    motor: "1000W",
    battery: "72V 30AH",
    exploreLink: "/crown-electric-victory"
  },

  
]

 export const bikes = [
    {
      name: "Bike 1",
      image: MarkhorIMG.src,
      range: "100 km",
      maxSpeed: "100 km/h",
      motorPower: "3000W",
      brochureLink: '/brouchers/Crown_Benling_Markhor_Brochure.pdf',
      exploreLink: "/",
      logo: MarkhorLogo.src
    },
    {
      name: "Bike 2",
      image: CherryIMG.src,
      range: "130 km ",
      maxSpeed: "80 km/h",
      motorPower: "3000W ",
      brochureLink: "/brouchers/Crown_Benling_Cherry_Rider_Brochure.pdf",
      exploreLink: "/crown-electric-cherry",
      logo: CherryLogo.src

    },
    {
      name: "Bike 3",
      image: ChampionIMG.src,
      range: "220 km",
      maxSpeed: "70 km/h",
      motorPower: "1200W",
      brochureLink: '/brouchers/Crown_Benling_Champion_Brochure.pdf',
      exploreLink: "/crown-electric-champion",
      logo: ChampionLogo.src
    },
    {
      name: "Bike 4",
      image: RaftaarIMG.src,
      range: "160 km ",
      maxSpeed: "90 km/h",
      motorPower: "2000W",
      brochureLink: '/brouchers/Crown_Benling_Raftaar_Brochure.pdf',
      exploreLink: "/crown-electric-raftaar",
      logo: RaftaarLogo.src
    }, {
      name: "Bike 5",
      image: VictoryIMG.src,
      range: "120 km ",
      maxSpeed: "55 km/h",
      motorPower: "1000W",
      brochureLink: '/brouchers/Crown_Benling_Victory_Brochure.pdf',
      exploreLink: "/crown-electric-victory",
      logo: VictoryLogo.src
    },
  ];