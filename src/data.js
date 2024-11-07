import tour1 from './image/tour1.jpg';
import tour2 from './image/tour2.jpg';
import tour3 from './image/tour3.jpg';
import tour4 from './image/tour4.jpg';

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
    { id: 5, href: "#footer", text: "footer" },
];

export const iconLinks = [
    { id: 1, href: 'http://www.facebook.com', icon: "fa-brands fa-facebook" },
    { id: 2, href: 'http://www.twitter.com', icon: "fa-brands fa-twitter" },
    { id: 3, href: 'http://www.whatsapp.com', icon: "fa-brands fa-whatsapp" },
]

export const tours = [
    {
    id : 1,
    image: tour1,
    date : "Aug 26th, 2024", 
    title : 'Tibet Adventure', 
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium saepe quos omnis id vitae accusamus cupiditate exercitationem vel maxime reiciendis.', 
    location : 'China', 
    duration : '6 days', 
    cost : 'from $2100' 
    },
    {
    id : 2,
    image: tour2,
    date : "Aug 26th, 2024", 
    title : 'Tibet Adventure', 
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium saepe quos omnis id vitae accusamus cupiditate exercitationem vel maxime reiciendis.', 
    location : 'China', 
    duration : '6 days', 
    cost : 'from $2100' 
    },
    {id : 3,
    image: tour3,
    date : "Aug 26th, 2024", 
    title : 'Tibet Adventure', 
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium saepe quos omnis id vitae accusamus cupiditate exercitationem vel maxime reiciendis.', 
    location : 'China', 
    duration : '6 days', 
    cost : 'from $2100' 
    },
    {id : 4,
    image: tour4,
    date : "Aug 26th, 2024", 
    title : 'Tibet Adventure', 
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium saepe quos omnis id vitae accusamus cupiditate exercitationem vel maxime reiciendis.', 
    location : 'China', 
    duration : '6 days', 
    cost : 'from $2100' 
    },
]

export const services = [
    {
        id : 1,
        icon : "fa-solid fa-wallet",
        title : "saving money",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates aliquid quas?"
    },
    {
        id : 2,
        icon : "fa-solid fa-tree",
        title : "endless hiking",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates aliquid quas?"
    },
    {
        id : 3,
        icon : "fa-solid fa-socks",
        title : "amazing comfort",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates aliquid quas?"
    },
]