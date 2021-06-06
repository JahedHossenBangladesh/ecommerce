const initialData = {
  items: [
    {
      imgName: "Beef-Liver",
      img: "https://i.ibb.co/FKGM9hS/Beef-Liver580.jpg",
      price: 580,
    },
    {
      imgName: "Aila Fish",
      img: "https://i.ibb.co/Bz5nvzv/Aila-Fish340.jpg",
      price: 340,
    },
    {
      imgName: "Beef Keema",
      img: "https://i.ibb.co/TTR2yZ9/Beef-Keema800.jpg",
      price: 800,
    },
    {
      imgName: "Beef steak bone less",
      img: "https://i.ibb.co/S0Rfbwm/Beef-Steak-Bone-Less840.jpg",
      price: 580,
    },
    {
      imgName: "Blue Sea Crab",
      img: "https://i.ibb.co/9TkrKmS/Blue-Sea-Crab599.jpg",
      price: 599,
    },
    {
      imgName: "Broiler Chicken",
      img: "https://i.ibb.co/cDpRVhW/Broiler-Chicken260.jpg",
      price: 260,
    },
    {
      imgName: "Buffalo Steak",
      img: "https://i.ibb.co/xDg2wYn/Buffalo-Steak630.jpg" ,
      price: 630,
    },
    {
      imgName: "Deshi Duck ",
      img: "https://i.ibb.co/n1R92xp/Deshi-Duck680.jpg" ,
      price: 699,
    },
    {
      imgName: "Red Snapper",
      img: "https://i.ibb.co/xjFFB83/Red-Snapper550.jpg" ,
      price: 550,
    },
    {
      imgName: "Shrimp-Dry-Fish",
      img: "https://i.ibb.co/MhW5Kfd/Shrimp-Dry-Fish580.jpg" ,
      price: 580,
    },
    {
      imgName: "White Pomfret",
      img: "https://i.ibb.co/GFYMgvD/White-Pomfret899.jpg" ,
      price: 899,
    },
    {
      imgName: "White Snapper",
      img:"https://i.ibb.co/nsgKVsC/White-Snapper645jpg.jpg",
      price: 645,
    },
  ],
};

function itemsReducer(state=initialData,action){
switch(action.type){
  case 'Add_Product':return{
    ...state,
    items:[...state.items,action.payload]
  }
}


    return state;
}

export default itemsReducer;