import images from './images';

const about = [
  {
    title: "300",
    symbol: "+",
    sub: "Success project"
  },
  {
    title: "200",
    symbol: "+",
    sub: "Product launches"
  },
  {
    title: "180",
    symbol: "k",
    sub: "Happy customer"
  }
]

const projects = [
  {
    imgUrl: images.home_redesign,
    title: 'Home redesign'
  },
  {
    imgUrl: images.interior_detailing,
    title: 'Interior detailing'
  },
  {
    imgUrl: images.furniture_layout,
    title: 'Furniture layout'
  },
  {
    imgUrl: images.exterior_finish_selections,
    title: 'Exterior finish selections'
  },
  {
    imgUrl: images.color_paint_selections,
    title: 'Color paint selections'
  }
];

const services = [
  {
    img: images.more_1
  },
  {
    img: images.more_2
  },
  {
    img: images.more_3
  },
  {
    img: images.more_4
  },
]


export default { about, projects, services };