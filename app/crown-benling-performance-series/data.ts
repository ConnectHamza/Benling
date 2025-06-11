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

export const performanceData = [
  {
    img: Markhor,
    logo: MarkhorLogo,
    PKR: "380,000",
    range: "90-100 km",
    speed: "90-100 km/h",
    motor: "3000W",
    battery: "72V 40AH"
  },
  {
    img: Cherry,
    logo: CherryLogo,
    PKR: "380,000",
    range: "110-130 km",
    speed: "75-80 km/h",
    motor: "3000W",
    battery: "72V 40AH"
  },
  {
    img: Champion,
    logo: ChampionLogo,
    PKR: "325,000",
    range: "200-220 km",
    speed: "65-70 km/h",
    motor: "1200W",
    battery: "72V 60AH"
  },
  {
    img: Raftaar,
    logo: RaftaarLogo,
    PKR: "299,000",
    range: "140-160 km",
    speed: "85-90 km/h",
    motor: "2000W",
    battery: "72V 40AH"
  },
  {
    img: Victory,
    logo: VictoryLogo,
    PKR: "265,000",
    range: "100-120 km",
    speed: "50-55 km/h",
    motor: "1000W",
    battery: "72V 30AH"
  },
]

 export const bikes = [
    {
      name: "Bike 1",
      image: MarkhorIMG.src,
      range: "100 km Range",
      maxSpeed: "100 km/h Top Speed",
      motorPower: "3000W Motor Power",
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Flash_Brochure.pdf',
      exploreLink: "/ezee",
      logo: MarkhorLogo.src
    },
    {
      name: "Bike 2",
      image: CherryIMG.src,
      range: "130 km Range ",
      maxSpeed: "80 km/h Top Speed",
      motorPower: "3000W Motor Power ",
      brochureLink: "../../public/assets/Brouchers/Crown_Benling_Knight_Rider_Brochure.pdf",
      exploreLink: "/ezee",
      logo: CherryLogo.src

    },
    {
      name: "Bike 3",
      image: ChampionIMG.src,
      range: "220 km Range",
      maxSpeed: "70 km/h Top Speed",
      motorPower: "1200W Motor Power",
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_X_Brochure.pdf',
      exploreLink: "/ezee",
      logo: ChampionLogo.src
    },
    {
      name: "Bike 4",
      image: RaftaarIMG.src,
      range: "160 km Range ",
      maxSpeed: "90 km/h Top Speed",
      motorPower: "2000W Motor Power",
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Ezee_Brochure.pdf',
      exploreLink: "/ezee",
      logo: RaftaarLogo.src
    }, {
      name: "Bike 5",
      image: VictoryIMG.src,
      range: "120 km Range ",
      maxSpeed: "55 km/h Top Speed",
      motorPower: "1000W Motor Power",
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_Brochure.pdf',
      exploreLink: "/ezee",
      logo: VictoryLogo.src
    },
  ];