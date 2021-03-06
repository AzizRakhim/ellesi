import create from 'zustand';

//Top Category

let topCategory = [
  {
    id : 1,
    name : "Milks & Creams",
    img : "https://imgur.com/txXoGzD.jpg",
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

// Deal of the Day

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
];

// Featured Category & Products

let featuredCategory = [
  {
    id : 1,
    name : "fruits",
    icon : "bx-lemon",
    active : true
  },
  {
    id : 2,
    name : "vegetables",
    icon : "bxl-mongodb",
    active : false
  },
  {
    id : 3,
    name : "milk & cream",
    icon : "bx-popsicle",
    active : false
  },
  {
    id : 4,
    name : "banana",
    icon : "bx-baguette",
    active : false
  },
  {
    id : 5,
    name : "sea food",
    icon : "bx bx-water",
    active : false
  }
];

let featured = [
  {
    id : 1,
    name : "cherry tomatoes",
    oldPrice : 5,
    price : 12,
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 12
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 9
      },
      {
        id : 3,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 5
      }
    ],
    imgs : ["https://imgur.com/Py0tczH.jpg", "https://imgur.com/9S3L9QK.jpg"],
    category : ["fruits", "vegetables", "banana", "sea food"]
  },
  {
    id : 2,
    name : "orange cauliflower",
    oldPrice : 20,
    price : 16,
    kilos : [
      {
        id : 1, 
        active : true,
        price : 10
      }
    ],
    imgs : ["https://imgur.com/OGRDpQI.jpg", "https://imgur.com/1Oux6jU.jpg"],
    category : ["fruits", "vegetables", "banana", "sea food"]
  },
  {
    id : 3,
    name : "plum tomato",
    oldPrice : 15,
    price : 10,
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 15
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 11
      },
      {
        id : 3,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 8
      }
    ],
    imgs : ["https://imgur.com/yY5bxhb.jpg", "https://imgur.com/Lg55K0Y.jpg"],
    category : ["fruits", "plum tomato"]
  },
  {
    id : 4,
    name : "white grape",
    oldPrice : 15,
    price : 10,
    kilos : [
      {
        id : 1,
        active : true,
        price : 15
      }
    ],
    imgs : ["https://imgur.com/bHMuaHR.jpg", "https://imgur.com/2Gnl7Gg.jpg"],
    category : ["fruits"]
  },
  {
    id : 5,
    name : "pomegranate",
    oldPrice : 5,
    price : 8,
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 8
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 5
      },
      {
        id : 3,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 3
      }
    ],
    imgs : ["https://imgur.com/w47AfIP.jpg", "https://imgur.com/Xr8xOMM.jpg"],
    category : ["fruits", "banana"]
  },
  {
    id : 6,
    name : "navel orange",
    oldPrice : 20,
    discount : -20,
    oldPrice : 25,
    price : 20,
    limited : 'limited',
    kilos : [
      {
        id : 1,
        active : true,
        price : 16
      }
    ],
    imgs : ["https://imgur.com/cILlnxX.jpg", "https://imgur.com/lUTAAxP.jpg"],
    category : ["fruits"]
  },
  {
    id : 7,
    name : "fresh strawberries",
    oldPrice : 20,
    discount : -50,
    oldPrice : 6,
    price : 10,
    limited : 'limited',
    kilos : [
      {
        id : 1,
        active : true,
        price : 10
      }
    ],
    imgs : ["https://imgur.com/7TDNKka.jpg", "https://imgur.com/eyM9VS8.jpg", "https://imgur.com/v5JP46w.jpg", "https://imgur.com/UPsM8xH.jpg"],
    category : ["fruits"]
  },
  {
    id : 8,
    name : "apples granny",
    price : 14,
    oldPrice : 20,
    discount : -30,
    oldPrice : 20,
    price : 10,
    kilos : [
      {
        id : 1,
        active : true,
        price : 14
      }
    ],
    imgs : ["https://imgur.com/8Uekh8M.jpg", "https://imgur.com/x7nanDV.jpg", "https://imgur.com/i2HdDAb.jpg"],
    category : ["fruits", "milk & cream"]
  },
  {
    id : 9,
    name : "red onion",
    oldPrice : 15,
    price : 12,
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : true,
        price : 10
      },
      {
        id : 2,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 6
      }
    ],
    imgs : ["https://imgur.com/RP7pctJ.jpg", "https://imgur.com/XR1Aq65.jpg"],
    category : ["vegetables", "sea food"]
  },
  {
    id : 10,
    name : "red cabbage",
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 15
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 9
      }
    ],
    imgs : ["https://imgur.com/tB1Kdz8.jpg", "https://imgur.com/7uB7zaS.jpg"],
    category : ["vegetables", "sea food"]
  },
  {
    id : 11,
    name : "organic lemon",
    oldPrice : 25,
    discount : -20,
    kilos : [
      {
        id : 1,
        active : true,
        price : 20
      }
    ],
    imgs : ["https://imgur.com/QvoTbBN.jpg", "https://imgur.com/DBiIdTv.jpg"],
    category : ["vegetables", "sea food"]
  },
  {
    id : 12,
    name : "organic almaverde",
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 18
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 11
      }
    ],
    imgs : ["https://imgur.com/lfXqUaE.jpg", "https://imgur.com/XRqXNV9.jpg"],
    category : ["vegetables", "sea food"]
  },
  {
    id : 13,
    name : "fresh bergamot",
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 10
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 7
      },
      {
        id : 3,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 4
      }
    ],
    imgs : ["https://imgur.com/TVpGcTN.jpg", "https://imgur.com/rH1hZhR.jpg"],
    category : ["vegetables", "sea food"]
  },
  {
    id : 14,
    name : "chili pepper",
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : true,
        price : 10
      },
      {
        id : 2,
        kg: "https://imgur.com/dxh5niS.jpg", 
        active : false,
        price : 7
      }
    ],
    imgs : ["https://imgur.com/uukxEqG.jpg", "https://imgur.com/qDATnoV.jpg"],
    category : ["vegetables"]
  },
  {
    id : 15,
    name : "sorbet ice cream",
    oldPrice : 15,
    discount : -20,
    limited : "limited",
    kilos : [
      {
        id : 1, 
        active : true,
        price : 12
      }
    ],
    imgs : ["https://imgur.com/b5Djo1Q.jpg", "https://imgur.com/vD9Rm5C.jpg", "https://imgur.com/MK2paG4.jpg", "https://imgur.com/dQHxOvY.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 16,
    name : "ratto milk",
    price : 20,
    kilos : [
      {
        id : 1,
        active : true,
        price : 20
      }
    ],
    imgs : ["https://imgur.com/joE96W0.jpg", "https://imgur.com/Fpp8a7L.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 17,
    name : "purea lime",
    oldPrice : 18,
    discount : -33,
    limited : "limited",
    kilos : [
      {
        id : 1,
        active : true,
        price : 12
      }
    ],
    imgs : ["https://imgur.com/xlFjIF6.jpg", "https://imgur.com/PgpKdSs.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 18,
    name : "pineapple slices",
    oldPrice : 25,
    discount : -20,
    limited : "limited",
    kilos : [
      {
        id : 1, 
        active : true,
        price : 20
      }
    ],
    imgs : ["https://imgur.com/CuCKq9I.jpg", "https://imgur.com/Ws0PcD2.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 19,
    name : "lagrana milk",
    oldPrice : 18,
    discount : -33,
    limited : "limited",
    kilos : [
      {
        id : 1,
        active : true,
        price : 12
      }
    ],
    imgs : ["https://imgur.com/ku1R1Bk.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 20,
    name : "pomegranate juice",
    kilos : [
      {
        id : 1,
        active : true,
        price : 16
      }
    ],
    imgs : ["https://imgur.com/nX8f9ia.jpg", "https://imgur.com/tnNOt00.jpg", "https://imgur.com/INHU8FT.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 21,
    name : "peanut butter",
    oldPrice : 12,
    discount : -17,
    limited : "limited",
    kilos : [
      {
        id : 1,
        active : true,
        price : 10
      }
    ],
    imgs : ["https://imgur.com/gHXD4qx.jpg", "https://imgur.com/FVorJ4k.jpg"],
    category : ["milk & cream"]
  },
  {
    id : 22,
    name : "pinkerton avocado",
    kilos : [
      {
        id : 1,
        kg: "https://imgur.com/Y3kOWbk.jpg", 
        active : true,
        price : 5
      },
      {
        id : 2,
        kg: "https://imgur.com/8RGzaRm.jpg", 
        active : false,
        price : 3
      }
    ],
    imgs : ["https://imgur.com/u7arAkX.jpg", "https://imgur.com/xUoQVAy.jpg"],
    category : ["banana"]
  },
  {
    id : 23,
    name : "bananas",
    kilos : [
      {
        id : 1,
        active : true,
        price : 18
      }
    ],
    imgs : ["https://imgur.com/dQswCD8.jpg", "https://imgur.com/t6KelSX.jpg"],
    category : ["banana"]
  },
  {
    id : 24,
    name : "butter pista",
    oldPrice : 18,
    discount : -33,
    limited : "limited",
    kilos : [
      {
        id : 1, 
        active : true,
        price : 12
      }
    ],
    imgs : ["https://imgur.com/MWugE3s.jpg"],
    category : ["banana"]
  },
  {
    id : 25,
    name : "basil pisto",
    oldPrice : 10,
    discount : -20,
    limited : "limited",
    kilos : [
      {
        id : 1,
        active : true,
        price : 8
      }
    ],
    imgs : ["https://imgur.com/LFeKAR6.jpg", "https://imgur.com/iIanYJO.jpg", "https://imgur.com/j8eJ8Ri.jpg"],
    category : ["banana"]
  },
  {
    id : 26,
    name : "violet cauliflower",
    price : 10,
    oldPrice : 15,
    discount : -33,
    limited : "limited",
    kilos : [
      {
        id : 1,
        active : true,
        price : 10
      }
    ],
    imgs : ["https://imgur.com/ybuQhBx.jpg", "https://imgur.com/8qKK2TR.jpg"],
    category : ["sea food"]
  }
]

const useStore = create((set) => ({
  // Top Category
  topCategory,

  // Deal of the Day
  dealOfDay,

  // Featured Category & Products
  featuredCategory,
  featured,

  activeHandler : (elId) => set((state) => (
    state.featuredCategory.map(item => {
      item.active = false;
      state.featuredCategory.filter(el => {
        if(el.id === elId){
          el.active = true;
        }
      })
    })
  )),
  
  addedObj : [],
  addCartToHandler : (elId) => set((state) => (
    state.featured.map(item => {
      if(item.id === elId){
        state.addedObj.push(item);
      }
    })
  ))
}))

export default useStore;