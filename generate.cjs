const fs = require('fs');

const ids = JSON.parse(fs.readFileSync('game_ids.json', 'utf8'));

const POPULAR_GAMES = [
  { id: 1, title: 'Cyberpunk 2077', price: '79.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg', platform: 'PC', genre: 'RPG', rating: 4.8, reviewsCount: 1250 },
  { id: 2, title: 'God of War Ragnarök', price: '89.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg', platform: 'PlayStation', genre: 'Action', rating: 4.9, reviewsCount: 3420 },
  { id: 3, title: 'Hogwarts Legacy', price: '69.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/library_600x900.jpg', platform: 'Multi', genre: 'Adventure', rating: 4.5, reviewsCount: 890 },
  { id: 4, title: 'Red Dead Redemption 2', price: '59.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg', platform: 'Multi', genre: 'Action', rating: 4.9, reviewsCount: 5600 },
  { id: 5, title: 'The Witcher 3: Wild Hunt', price: '39.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg', platform: 'Multi', genre: 'RPG', rating: 4.9, reviewsCount: 8120 },
  { id: 6, title: "Baldur's Gate 3", price: '39.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg', platform: 'PC', genre: 'RPG', rating: 4.8, reviewsCount: 4200 },
  { id: 7, title: 'Grand Theft Auto V', price: '29.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg', platform: 'Multi', genre: 'Action', rating: 4.8, reviewsCount: 15400 },
  { id: 8, title: 'Sekiro: Shadows Die Twice', price: '59.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/library_600x900.jpg', platform: 'Multi', genre: 'Action', rating: 4.9, reviewsCount: 4100 },
  { id: 9, title: "Marvel's Spider-Man Remastered", price: '59.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900.jpg', platform: 'PC', genre: 'Action', rating: 4.8, reviewsCount: 3900 },
  { id: 10, title: 'Forza Horizon 5', price: '59.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg', platform: 'PC', genre: 'Racing', rating: 4.7, reviewsCount: 6200 },
  { id: 11, title: 'Ghost of Tsushima', price: '59.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900.jpg', platform: 'PlayStation', genre: 'Action', rating: 4.9, reviewsCount: 2800 },
  { id: 12, title: 'Resident Evil 4', price: '39.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg', platform: 'Multi', genre: 'Action', rating: 4.9, reviewsCount: 5200 },
  { id: 13, title: 'EA SPORTS FC 24', price: '69.99', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/library_600x900.jpg', platform: 'Multi', genre: 'Sports', rating: 4.1, reviewsCount: 2200 },
  { id: 14, title: 'eFootball 2024', price: 'უფასო', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/library_600x900.jpg', platform: 'Multi', genre: 'Sports', rating: 3.9, reviewsCount: 1500 },
];

const ALL_GAMES = [];

ids.forEach((info, index) => {
  const name = info.name;
  let genre = 'Action';
  const nameLower = name.toLowerCase();
  if (nameLower.includes('forza') || nameLower.includes('need for speed') || nameLower.includes('racing') || nameLower.includes('kart') || nameLower.includes('gran turismo') || nameLower.includes('crew') || nameLower.includes('f1')) genre = 'Racing';
  else if (nameLower.includes('fifa') || nameLower.includes('efootball') || nameLower.includes('ufc') || nameLower.includes('sports')) genre = 'Sports';
  else if (nameLower.includes('witcher') || nameLower.includes('elder scrolls') || nameLower.includes('fallout') || nameLower.includes('dragon age') || nameLower.includes('cyberpunk') || nameLower.includes('mass effect') || nameLower.includes('diablo') || nameLower.includes('path of exile')) genre = 'RPG';
  else if (nameLower.includes('zelda') || nameLower.includes('uncharted') || nameLower.includes('tomb raider') || nameLower.includes('horizon')) genre = 'Adventure';
  
  let imageUrl = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop';
  if (info.appId) {
    // For games that don't have vertical capsules, steam provides a blank text image. header.jpg is always a real image.
    imageUrl = 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/' + info.appId + '/header.jpg';
  } else if (nameLower.includes('zelda') || nameLower.includes('mario')) {
    imageUrl = 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=600&auto=format&fit=crop';
  } else if (nameLower.includes('fortnite') || nameLower.includes('valorant')) {
    imageUrl = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop';
  }

  const price = (Math.random() * (79.99 - 19.99) + 19.99).toFixed(2);
  const rating = Number((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));
  const reviewsCount = Math.floor(Math.random() * 10000) + 500;

  ALL_GAMES.push({
    id: 100 + index,
    title: name,
    price: price,
    image: imageUrl,
    platform: "Multi",
    genre: genre,
    rating: rating,
    reviewsCount: reviewsCount
  });
});

let out = "import { Sword, Map as MapIcon, Target, Car, Users, Ghost, MoreHorizontal } from 'lucide-react';\n\n";

out += "export const CATEGORIES = [\n";
out += "  { id: 'action', name: 'მოქმედებითი', icon: Sword },\n";
out += "  { id: 'adventure', name: 'სათავგადასავლო', icon: MapIcon },\n";
out += "  { id: 'shooting', name: 'სროლები', icon: Target },\n";
out += "  { id: 'racing', name: 'სარბოლი', icon: Car },\n";
out += "  { id: 'sports', name: 'სპორტი', icon: Users },\n";
out += "  { id: 'rpg', name: 'როლური', icon: Ghost },\n";
out += "  { id: 'other', name: 'სხვა', icon: MoreHorizontal },\n";
out += "];\n\n";

out += "export const POPULAR_GAMES = " + JSON.stringify(POPULAR_GAMES, null, 2) + ";\n\n";

out += "export const ALL_GAMES = " + JSON.stringify(ALL_GAMES, null, 2) + ";\n";

fs.writeFileSync('src/data.ts', out);
