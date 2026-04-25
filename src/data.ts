import { Sword, Map as MapIcon, Target, Car, Users, Ghost, MoreHorizontal } from 'lucide-react';

export const CATEGORIES = [
  { id: 'action', name: 'მოქმედებითი', icon: Sword },
  { id: 'adventure', name: 'სათავგადასავლო', icon: MapIcon },
  { id: 'shooting', name: 'სროლები', icon: Target },
  { id: 'racing', name: 'სარბოლი', icon: Car },
  { id: 'sports', name: 'სპორტი', icon: Users },
  { id: 'rpg', name: 'როლური', icon: Ghost },
  { id: 'other', name: 'სხვა', icon: MoreHorizontal },
];

export const POPULAR_GAMES = [
  {
    "id": 1,
    "title": "Cyberpunk 2077",
    "price": "79.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg",
    "platform": "PC",
    "genre": "RPG",
    "rating": 4.8,
    "reviewsCount": 1250
  },
  {
    "id": 2,
    "title": "God of War Ragnarök",
    "price": "89.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg",
    "platform": "PlayStation",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 3420
  },
  {
    "id": 3,
    "title": "Hogwarts Legacy",
    "price": "69.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Adventure",
    "rating": 4.5,
    "reviewsCount": 890
  },
  {
    "id": 4,
    "title": "Red Dead Redemption 2",
    "price": "59.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 5600
  },
  {
    "id": 5,
    "title": "The Witcher 3: Wild Hunt",
    "price": "39.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.9,
    "reviewsCount": 8120
  },
  {
    "id": 6,
    "title": "Baldur's Gate 3",
    "price": "39.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg",
    "platform": "PC",
    "genre": "RPG",
    "rating": 4.8,
    "reviewsCount": 4200
  },
  {
    "id": 7,
    "title": "Grand Theft Auto V",
    "price": "29.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 15400
  },
  {
    "id": 8,
    "title": "Sekiro: Shadows Die Twice",
    "price": "59.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 4100
  },
  {
    "id": 9,
    "title": "Marvel's Spider-Man Remastered",
    "price": "59.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900.jpg",
    "platform": "PC",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 3900
  },
  {
    "id": 10,
    "title": "Forza Horizon 5",
    "price": "59.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg",
    "platform": "PC",
    "genre": "Racing",
    "rating": 4.7,
    "reviewsCount": 6200
  },
  {
    "id": 11,
    "title": "Ghost of Tsushima",
    "price": "59.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900.jpg",
    "platform": "PlayStation",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 2800
  },
  {
    "id": 12,
    "title": "Resident Evil 4",
    "price": "39.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 5200
  },
  {
    "id": 13,
    "title": "EA SPORTS FC 24",
    "price": "69.99",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 4.1,
    "reviewsCount": 2200
  },
  {
    "id": 14,
    "title": "eFootball 2024",
    "price": "უფასო",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/library_600x900.jpg",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 3.9,
    "reviewsCount": 1500
  }
];

export const ALL_GAMES = [
  {
    "id": 100,
    "title": "The Legend of Zelda: Breath of the Wild",
    "price": "33.75",
    "image": "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Adventure",
    "rating": 4.1,
    "reviewsCount": 8405
  },
  {
    "id": 101,
    "title": "Red Dead Redemption 2",
    "price": "57.43",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4,
    "reviewsCount": 5636
  },
  {
    "id": 102,
    "title": "The Witcher 3: Wild Hunt",
    "price": "64.64",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.7,
    "reviewsCount": 1500
  },
  {
    "id": 103,
    "title": "Grand Theft Auto V",
    "price": "34.72",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 5801
  },
  {
    "id": 104,
    "title": "Minecraft",
    "price": "66.14",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1912410/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 2291
  },
  {
    "id": 105,
    "title": "Super Mario Odyssey",
    "price": "21.44",
    "image": "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 9562
  },
  {
    "id": 106,
    "title": "Elden Ring",
    "price": "61.21",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 10207
  },
  {
    "id": 107,
    "title": "God of War (2018)",
    "price": "50.62",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 5,
    "reviewsCount": 6451
  },
  {
    "id": 108,
    "title": "Portal 2",
    "price": "32.77",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 6199
  },
  {
    "id": 109,
    "title": "Half-Life 2",
    "price": "30.33",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 7615
  },
  {
    "id": 110,
    "title": "Dark Souls III",
    "price": "63.63",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 10423
  },
  {
    "id": 111,
    "title": "The Last of Us Part II",
    "price": "35.78",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 8761
  },
  {
    "id": 112,
    "title": "Uncharted 4: A Thief's End",
    "price": "54.59",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Adventure",
    "rating": 4.1,
    "reviewsCount": 2234
  },
  {
    "id": 113,
    "title": "Doom Eternal",
    "price": "68.48",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 3772
  },
  {
    "id": 114,
    "title": "Celeste",
    "price": "52.15",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 10189
  },
  {
    "id": 115,
    "title": "Hollow Knight",
    "price": "25.80",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 3855
  },
  {
    "id": 116,
    "title": "Stardew Valley",
    "price": "48.49",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 10480
  },
  {
    "id": 117,
    "title": "Hades",
    "price": "58.14",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 8013
  },
  {
    "id": 118,
    "title": "Cyberpunk 2077",
    "price": "27.41",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4,
    "reviewsCount": 6813
  },
  {
    "id": 119,
    "title": "Fortnite",
    "price": "52.66",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 7702
  },
  {
    "id": 120,
    "title": "League of Legends",
    "price": "61.96",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1276790/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 10039
  },
  {
    "id": 121,
    "title": "Valorant",
    "price": "40.61",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 3959
  },
  {
    "id": 122,
    "title": "Counter-Strike 2 (Global Offensive)",
    "price": "58.03",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 8315
  },
  {
    "id": 123,
    "title": "Dota 2",
    "price": "30.38",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 8720
  },
  {
    "id": 124,
    "title": "Among Us",
    "price": "46.69",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 4680
  },
  {
    "id": 125,
    "title": "Fall Guys",
    "price": "48.52",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 6252
  },
  {
    "id": 126,
    "title": "Rocket League",
    "price": "65.78",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 5162
  },
  {
    "id": 127,
    "title": "Apex Legends",
    "price": "59.87",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 7263
  },
  {
    "id": 128,
    "title": "Call of Duty: Warzone",
    "price": "24.20",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962663/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 7995
  },
  {
    "id": 129,
    "title": "Overwatch 2",
    "price": "27.81",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 7657
  },
  {
    "id": 130,
    "title": "Team Fortress 2",
    "price": "71.17",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/440/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 993
  },
  {
    "id": 131,
    "title": "Paladins",
    "price": "50.07",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/444090/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 9431
  },
  {
    "id": 132,
    "title": "Smite",
    "price": "43.76",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2437170/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 6030
  },
  {
    "id": 133,
    "title": "Genshin Impact",
    "price": "23.33",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 7265
  },
  {
    "id": 134,
    "title": "Honkai: Star Rail",
    "price": "61.33",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 1275
  },
  {
    "id": 135,
    "title": "Wuthering Waves",
    "price": "23.94",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3513350/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 4990
  },
  {
    "id": 136,
    "title": "The Elder Scrolls V: Skyrim",
    "price": "47.17",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.7,
    "reviewsCount": 4507
  },
  {
    "id": 137,
    "title": "Fallout 4",
    "price": "47.67",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.4,
    "reviewsCount": 3176
  },
  {
    "id": 138,
    "title": "Fallout: New Vegas",
    "price": "48.21",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.1,
    "reviewsCount": 3341
  },
  {
    "id": 139,
    "title": "Mass Effect 2",
    "price": "31.10",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2362420/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.8,
    "reviewsCount": 1041
  },
  {
    "id": 140,
    "title": "Mass Effect Legendary Edition",
    "price": "21.65",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.8,
    "reviewsCount": 1607
  },
  {
    "id": 141,
    "title": "Dragon Age: Inquisition",
    "price": "74.24",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222690/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.8,
    "reviewsCount": 8297
  },
  {
    "id": 142,
    "title": "Kingdom Come: Deliverance",
    "price": "52.88",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/379430/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 3167
  },
  {
    "id": 143,
    "title": "Starfield",
    "price": "76.41",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 6070
  },
  {
    "id": 144,
    "title": "Outer Worlds",
    "price": "78.08",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1449110/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 3927
  },
  {
    "id": 145,
    "title": "Horizon Zero Dawn",
    "price": "44.97",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2561580/header.jpg",
    "platform": "Multi",
    "genre": "Adventure",
    "rating": 4.6,
    "reviewsCount": 9145
  },
  {
    "id": 146,
    "title": "Horizon Forbidden West",
    "price": "24.30",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg",
    "platform": "Multi",
    "genre": "Adventure",
    "rating": 4.6,
    "reviewsCount": 3290
  },
  {
    "id": 147,
    "title": "Ghost of Tsushima",
    "price": "42.48",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 7467
  },
  {
    "id": 148,
    "title": "Days Gone",
    "price": "37.31",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1259420/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 8113
  },
  {
    "id": 149,
    "title": "Death Stranding",
    "price": "66.78",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3280350/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 4881
  },
  {
    "id": 150,
    "title": "Metal Gear Solid V: The Phantom Pain",
    "price": "71.29",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287700/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 6943
  },
  {
    "id": 151,
    "title": "Resident Evil 4 (Remake)",
    "price": "37.83",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 6682
  },
  {
    "id": 152,
    "title": "Resident Evil 2 (Remake)",
    "price": "66.79",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 8417
  },
  {
    "id": 153,
    "title": "Resident Evil Village",
    "price": "36.53",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4,
    "reviewsCount": 2193
  },
  {
    "id": 154,
    "title": "Silent Hill 2 (Remake)",
    "price": "72.90",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 7302
  },
  {
    "id": 155,
    "title": "Alan Wake 2",
    "price": "77.20",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 2069
  },
  {
    "id": 156,
    "title": "Control",
    "price": "22.68",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4165870/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 973
  },
  {
    "id": 157,
    "title": "Dead Space (Remake)",
    "price": "22.11",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1693980/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 6859
  },
  {
    "id": 158,
    "title": "The Callisto Protocol",
    "price": "64.08",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1544020/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4,
    "reviewsCount": 7881
  },
  {
    "id": 159,
    "title": "Outlast 2",
    "price": "74.33",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 8428
  },
  {
    "id": 160,
    "title": "Amnesia: The Bunker",
    "price": "56.73",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1944430/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 5177
  },
  {
    "id": 161,
    "title": "Soma",
    "price": "56.17",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/282140/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 3416
  },
  {
    "id": 162,
    "title": "Little Nightmares 2",
    "price": "59.26",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/860510/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 6739
  },
  {
    "id": 163,
    "title": "Until Dawn",
    "price": "63.91",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2172010/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 5701
  },
  {
    "id": 164,
    "title": "The Quarry",
    "price": "33.64",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1577120/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4,
    "reviewsCount": 5984
  },
  {
    "id": 165,
    "title": "Detroit: Become Human",
    "price": "47.90",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 4326
  },
  {
    "id": 166,
    "title": "Heavy Rain",
    "price": "47.29",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/960910/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 3819
  },
  {
    "id": 167,
    "title": "Beyond: Two Souls",
    "price": "41.49",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/960990/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 5244
  },
  {
    "id": 168,
    "title": "Life is Strange",
    "price": "28.83",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2624870/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 4140
  },
  {
    "id": 169,
    "title": "Life is Strange: True Colors",
    "price": "57.18",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/936790/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 8658
  },
  {
    "id": 170,
    "title": "Telltale's The Walking Dead",
    "price": "46.32",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 8319
  },
  {
    "id": 171,
    "title": "The Wolf Among Us",
    "price": "33.52",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/250320/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 3485
  },
  {
    "id": 172,
    "title": "Batman: Arkham Knight",
    "price": "64.70",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 10200
  },
  {
    "id": 173,
    "title": "Batman: Arkham City",
    "price": "45.89",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/200260/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 4918
  },
  {
    "id": 174,
    "title": "Spider-Man (2018)",
    "price": "43.56",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 3611
  },
  {
    "id": 175,
    "title": "Spider-Man: Miles Morales",
    "price": "39.33",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 5,
    "reviewsCount": 4656
  },
  {
    "id": 176,
    "title": "Spider-Man 2",
    "price": "70.95",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 10294
  },
  {
    "id": 177,
    "title": "Guardians of the Galaxy",
    "price": "45.15",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1088850/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 4983
  },
  {
    "id": 178,
    "title": "Avengers (2020)",
    "price": "74.06",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/405310/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 4135
  },
  {
    "id": 179,
    "title": "Star Wars Jedi: Fallen Order",
    "price": "24.69",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172380/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 6068
  },
  {
    "id": 180,
    "title": "Star Wars Jedi: Survivor",
    "price": "74.80",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1774580/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 6046
  },
  {
    "id": 181,
    "title": "Star Wars Battlefront 2",
    "price": "70.04",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1237950/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 5593
  },
  {
    "id": 182,
    "title": "Halo Infinite",
    "price": "20.91",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 4189
  },
  {
    "id": 183,
    "title": "Halo: The Master Chief Collection",
    "price": "41.16",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 4012
  },
  {
    "id": 184,
    "title": "Gears 5",
    "price": "69.01",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1097840/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 5076
  },
  {
    "id": 185,
    "title": "Gears of War 4",
    "price": "68.53",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 5736
  },
  {
    "id": 186,
    "title": "Forza Horizon 5",
    "price": "63.59",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.2,
    "reviewsCount": 4510
  },
  {
    "id": 187,
    "title": "Forza Motorsport (2023)",
    "price": "42.33",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.4,
    "reviewsCount": 9860
  },
  {
    "id": 188,
    "title": "Gran Turismo 7",
    "price": "37.42",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4,
    "reviewsCount": 5363
  },
  {
    "id": 189,
    "title": "Need for Speed Unbound",
    "price": "44.20",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.2,
    "reviewsCount": 8243
  },
  {
    "id": 190,
    "title": "Need for Speed Heat",
    "price": "48.56",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.9,
    "reviewsCount": 6463
  },
  {
    "id": 191,
    "title": "Burnout Paradise Remastered",
    "price": "47.47",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 2605
  },
  {
    "id": 192,
    "title": "The Crew 2",
    "price": "67.43",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/646910/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.3,
    "reviewsCount": 1053
  },
  {
    "id": 193,
    "title": "The Crew Motorfest",
    "price": "37.12",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2698940/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.5,
    "reviewsCount": 3243
  },
  {
    "id": 194,
    "title": "Mario Kart 8 Deluxe",
    "price": "39.13",
    "image": "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.8,
    "reviewsCount": 9571
  },
  {
    "id": 195,
    "title": "Crash Team Racing Nitro-Fueled",
    "price": "39.14",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.1,
    "reviewsCount": 5996
  },
  {
    "id": 196,
    "title": "Sonic & All-Stars Racing Transformed",
    "price": "37.33",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/212480/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.1,
    "reviewsCount": 9403
  },
  {
    "id": 197,
    "title": "F1 23",
    "price": "36.39",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2426210/header.jpg",
    "platform": "Multi",
    "genre": "Racing",
    "rating": 4.6,
    "reviewsCount": 4432
  },
  {
    "id": 198,
    "title": "Diablo IV",
    "price": "56.68",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.1,
    "reviewsCount": 3110
  },
  {
    "id": 199,
    "title": "Diablo III",
    "price": "24.10",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4,
    "reviewsCount": 5672
  },
  {
    "id": 200,
    "title": "Path of Exile",
    "price": "73.27",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2694490/header.jpg",
    "platform": "Multi",
    "genre": "RPG",
    "rating": 4.9,
    "reviewsCount": 3466
  },
  {
    "id": 201,
    "title": "Grim Dawn",
    "price": "49.39",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/219990/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 2892
  },
  {
    "id": 202,
    "title": "Torchlight II",
    "price": "51.81",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/200710/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 8120
  },
  {
    "id": 203,
    "title": "Borderlands 3",
    "price": "65.19",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 3304
  },
  {
    "id": 204,
    "title": "Borderlands 2",
    "price": "20.16",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/49520/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 2124
  },
  {
    "id": 205,
    "title": "Tiny Tina's Wonderlands",
    "price": "72.89",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1286680/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 5030
  },
  {
    "id": 206,
    "title": "Destiny 2",
    "price": "65.77",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 5,
    "reviewsCount": 1686
  },
  {
    "id": 207,
    "title": "Warframe",
    "price": "66.61",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/230410/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 9877
  },
  {
    "id": 208,
    "title": "The Division 2",
    "price": "56.40",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2221490/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 5,
    "reviewsCount": 10258
  },
  {
    "id": 209,
    "title": "Remnant 2",
    "price": "73.17",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1282100/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 5183
  },
  {
    "id": 210,
    "title": "Monster Hunter: World",
    "price": "72.22",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 5365
  },
  {
    "id": 211,
    "title": "Monster Hunter Rise",
    "price": "40.45",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1446780/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 5,
    "reviewsCount": 9781
  },
  {
    "id": 212,
    "title": "Dauntless",
    "price": "28.92",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2923180/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 1857
  },
  {
    "id": 213,
    "title": "Wild Hearts",
    "price": "37.96",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938010/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 9327
  },
  {
    "id": 214,
    "title": "Sekiro: Shadows Die Twice",
    "price": "37.74",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.6,
    "reviewsCount": 9037
  },
  {
    "id": 215,
    "title": "Nioh 2",
    "price": "77.93",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1325200/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 2126
  },
  {
    "id": 216,
    "title": "Wo Long: Fallen Dynasty",
    "price": "43.62",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1448440/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 6144
  },
  {
    "id": 217,
    "title": "Bloodborne",
    "price": "39.78",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 9233
  },
  {
    "id": 218,
    "title": "Demon's Souls (Remake)",
    "price": "72.99",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.5,
    "reviewsCount": 5641
  },
  {
    "id": 219,
    "title": "Lies of P",
    "price": "46.32",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 8252
  },
  {
    "id": 220,
    "title": "Thymesia",
    "price": "39.87",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1343240/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 6740
  },
  {
    "id": 221,
    "title": "Mortal Shell",
    "price": "72.74",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2584270/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 5274
  },
  {
    "id": 222,
    "title": "Steelrising",
    "price": "77.31",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1283400/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 3243
  },
  {
    "id": 223,
    "title": "Star Wars: Fallen Order",
    "price": "22.17",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 10349
  },
  {
    "id": 224,
    "title": "Jedi Knight: Jedi Academy",
    "price": "27.91",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/6020/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 7375
  },
  {
    "id": 225,
    "title": "No Man's Sky",
    "price": "64.93",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.2,
    "reviewsCount": 7876
  },
  {
    "id": 226,
    "title": "Subnautica",
    "price": "75.89",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962700/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.8,
    "reviewsCount": 2347
  },
  {
    "id": 227,
    "title": "Subnautica: Below Zero",
    "price": "65.87",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/848450/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 1604
  },
  {
    "id": 228,
    "title": "The Forest",
    "price": "54.10",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.1,
    "reviewsCount": 2554
  },
  {
    "id": 229,
    "title": "Sons of the Forest",
    "price": "60.67",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.7,
    "reviewsCount": 7387
  },
  {
    "id": 230,
    "title": "Green Hell",
    "price": "56.97",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 7946
  },
  {
    "id": 231,
    "title": "Stranded Deep",
    "price": "43.95",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/313120/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.3,
    "reviewsCount": 7800
  },
  {
    "id": 232,
    "title": "Raft",
    "price": "30.77",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 1577
  },
  {
    "id": 233,
    "title": "Valheim",
    "price": "77.01",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.4,
    "reviewsCount": 7743
  },
  {
    "id": 234,
    "title": "Grounded",
    "price": "27.57",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2661300/header.jpg",
    "platform": "Multi",
    "genre": "Action",
    "rating": 4.9,
    "reviewsCount": 704
  },
  {
    "id": 235,
    "title": "FIFA 24",
    "price": "53.79",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 4.2,
    "reviewsCount": 5008
  },
  {
    "id": 236,
    "title": "eFootball",
    "price": "52.82",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 4.8,
    "reviewsCount": 9274
  },
  {
    "id": 237,
    "title": "EA SPORTS UFC 5",
    "price": "63.83",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 4.5,
    "reviewsCount": 9153
  },
  {
    "id": 238,
    "title": "EA SPORTS UFC 4",
    "price": "37.12",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    "platform": "Multi",
    "genre": "Sports",
    "rating": 4.2,
    "reviewsCount": 8547
  }
];
