import create from 'zustand';

let topCategory = [
  {
    id : 1,
    name : "Milks & Creams",
    img : "https://imgur.com/txXoGzD.jpg"
  },
  {
    id : 2,
    name : "Fruits",
    img : "https://imgur.com/ZptQd1n.jpg"
  },
  {
    id : 3,
    name : "Vegetables",
    img : "https://imgur.com/YI0g23p.jpg"
  },
  {
    id : 4,
    name : "Nut Gifts",
    img : "https://imgur.com/6JJfeCH.jpg"
  },
  {
    id : 5,
    name : "Nutt & Seeds",
    img : "https://imgur.com/6htEqOt.jpg"
  },
  {
    id : 6,
    name : "Fresh Tomatoes",
    img : "https://imgur.com/D0nt6yt.jpg"
  },
  {
    id : 7,
    name : "Fresh Organic",
    img : "https://imgur.com/0p3XKE6.jpg"
  },
  {
    id : 8,
    name : "Butter & Egges",
    img : "https://imgur.com/H4fGgGw.jpg"
  },
  {
    id : 9,
    name : "Fresh Meats",
    img : "https://imgur.com/5GNXdIf.jpg"
  },
  {
    id : 10,
    name : "Trees",
    img : "https://imgur.com/rrcB9MO.jpg"
  }
];

let dealOfDay = [
  {
    id : 1,
    img : "https://imgur.com/Bb5hygy.jpg",
    category : "root vegetables",
    name : "violet cauliflower",
    oldPrice : 15,
    price : 10,
    sold : 90,
    available : 40,
    star : 5
  },
  {
    id : 2,
    img : "https://imgur.com/atPzGLY.jpg",
    category : "chilies, garlic, lemon",
    name : "organic lemon",
    oldPrice : 25,
    price : 20,
    sold : 60,
    available : 80
  },
  {
    id : 3,
    img : "https://imgur.com/Xg96qIV.jpg",
    category : "milks & creams",
    name : "sorbert ice cream",
    oldPrice : 15,
    price : 12,
    sold : 82,
    available : 58,
    star : 5
  },
  {
    id : 4,
    img : "https://imgur.com/Zt6NEZk.jpg",
    category : "milks & creams",
    name : "purea lime",
    oldPrice : 18,
    price : 12,
    sold : 71,
    available : 34
  },
  {
    id : 5,
    img : "https://imgur.com/Ex9DKZ0.jpg",
    category : "milks & creams",
    name : "pineapple slices",
    oldPrice : 25,
    price : 20,
    sold : 70,
    available : 60
  }
]

const useStore = create((set) => ({
  topCategory,
  dealOfDay
}))

export default useStore;