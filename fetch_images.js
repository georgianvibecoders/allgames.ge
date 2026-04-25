const fs = require('fs');

const RAW_GAME_NAMES = [
  "The Legend of Zelda: Breath of the Wild", "Red Dead Redemption 2", "The Witcher 3: Wild Hunt", "Grand Theft Auto V", "Minecraft", "Super Mario Odyssey", "Elden Ring", "God of War (2018)", "Portal 2", "Half-Life 2", "Dark Souls III", "The Last of Us Part II", "Uncharted 4: A Thief's End", "Doom Eternal", "Celeste", "Hollow Knight", "Stardew Valley", "Hades", "Cyberpunk 2077", "Fortnite", "League of Legends", "Valorant", "Counter-Strike 2 (Global Offensive)", "Dota 2", "Among Us", "Fall Guys", "Rocket League", "Apex Legends", "Call of Duty: Warzone", "Overwatch 2", "Team Fortress 2", "Paladins", "Smite", "Genshin Impact", "Honkai: Star Rail", "Wuthering Waves", "The Elder Scrolls V: Skyrim", "Fallout 4", "Fallout: New Vegas", "Mass Effect 2", "Mass Effect Legendary Edition", "Dragon Age: Inquisition", "Kingdom Come: Deliverance", "Starfield", "Outer Worlds", "Horizon Zero Dawn", "Horizon Forbidden West", "Ghost of Tsushima", "Days Gone", "Death Stranding", "Metal Gear Solid V: The Phantom Pain", "Resident Evil 4 (Remake)", "Resident Evil 2 (Remake)", "Resident Evil Village", "Silent Hill 2 (Remake)", "Alan Wake 2", "Control", "Dead Space (Remake)", "The Callisto Protocol", "Outlast 2", "Amnesia: The Bunker", "Soma", "Little Nightmares 2", "Until Dawn", "The Quarry", "Detroit: Become Human", "Heavy Rain", "Beyond: Two Souls", "Life is Strange", "Life is Strange: True Colors", "Telltale's The Walking Dead", "The Wolf Among Us", "Batman: Arkham Knight", "Batman: Arkham City", "Spider-Man (2018)", "Spider-Man: Miles Morales", "Spider-Man 2", "Guardians of the Galaxy", "Avengers (2020)", "Star Wars Jedi: Fallen Order", "Star Wars Jedi: Survivor", "Star Wars Battlefront 2", "Halo Infinite", "Halo: The Master Chief Collection", "Gears 5", "Gears of War 4", "Forza Horizon 5", "Forza Motorsport (2023)", "Gran Turismo 7", "Need for Speed Unbound", "Need for Speed Heat", "Burnout Paradise Remastered", "The Crew 2", "The Crew Motorfest", "Mario Kart 8 Deluxe", "Crash Team Racing Nitro-Fueled", "Sonic & All-Stars Racing Transformed", "F1 23", "Diablo IV", "Diablo III", "Path of Exile", "Grim Dawn", "Torchlight II", "Borderlands 3", "Borderlands 2", "Tiny Tina's Wonderlands", "Destiny 2", "Warframe", "The Division 2", "Remnant 2", "Monster Hunter: World", "Monster Hunter Rise", "Dauntless", "Wild Hearts", "Sekiro: Shadows Die Twice", "Nioh 2", "Wo Long: Fallen Dynasty", "Bloodborne", "Demon's Souls (Remake)", "Lies of P", "Thymesia", "Mortal Shell", "Steelrising", "Star Wars: Fallen Order", "Jedi Knight: Jedi Academy", "No Man's Sky", "Subnautica", "Subnautica: Below Zero", "The Forest", "Sons of the Forest", "Green Hell", "Stranded Deep", "Raft", "Valheim", "Grounded", "FIFA 24", "eFootball", "EA SPORTS UFC 5", "EA SPORTS UFC 4"
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchIds() {
  const results = [];
  for (let name of RAW_GAME_NAMES) {
     try {
       const cleanName = name.split('(')[0].trim();
       const res = await fetch(`https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(cleanName)}&l=english&cc=US`);
       const data = await res.json();
       if (data && data.items && data.items.length > 0) {
         results.push({ name, appId: data.items[0].id });
       } else {
         results.push({ name, appId: null });
       }
     } catch(e) {
       console.log('Error for', name);
       results.push({ name, appId: null });
     }
     await sleep(200); // polite delay
  }
  
  fs.writeFileSync('game_ids.json', JSON.stringify(results, null, 2));
}

fetchIds();
