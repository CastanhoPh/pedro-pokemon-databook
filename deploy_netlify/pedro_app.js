/* ================= DATA ================= */
const ART="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
// national dex ids
const DEX={Charizard:6,"Pikachu":10094,Gengar:94,Snorlax:143,Lapras:131,Dragonite:149,
Alakazam:65,Arcanine:59,Mewtwo:150,Moltres:146,Zapdos:145,Articuno:144,
Typhlosion:157,Ampharos:181,Espeon:196,Scizor:212,Kingdra:230,Tyranitar:248,Umbreon:197,
Blaziken:257,Gardevoir:282,Flygon:330,Milotic:350,Glalie:362,Metagross:376,Aggron:306,Salamence:373,Rayquaza:384,Latias:380,Deoxys:386,
Infernape:392,Luxray:405,Leafeon:470,Gliscor:472,Garchomp:445,Lucario:448,Gallade:475,Mamoswine:473,Giratina:487,
Emboar:500,Simipour:516,Krookodile:553,Reuniclus:579,Volcarona:637,Haxorus:612,Zoroark:571,Golurk:623,Hydreigon:635,Reshiram:643,Kyurem:646,Victini:494,
Greninja:658,"Ash-Greninja":658,"Ash Greninja":658,Heliolisk:695,Sylveon:700,Goodra:706,Trevenant:709,Noivern:715,Yveltal:717,Zygarde:718,Hoopa:720,Diancie:719,
Incineroar:727,Vikavolt:738,Lycanroc:10152,Wishiwashi:746,Lurantis:754,Mimikyu:778,Salazzle:758,Solgaleo:791,Marshadow:802,
Gyarados:130,Chandelure:609,Togekiss:468,Heracross:214,Absol:359,Inteleon:818,
Corviknight:823,Toxtricity:849,Coalossal:839,Grimmsnarl:861,Dragapult:887,Duraludon:884,Obstagoon:862,Hatterene:858,
Eternatus:890,Zacian:888,Zamazenta:889,Urshifu:892,"Galarian Articuno":10169,"Galarian Zapdos":10170,"Galarian Moltres":10171,
Mew:151,"Ho-oh":250,Lugia:249,Entei:244,Suicune:245,Raikou:243,Groudon:383,Kyogre:382,Palkia:484,Dialga:483,
Tornadus:641,Thundurus:642,Landorus:645,Cobalion:638,Terrakion:639,Virizion:640,Keldeo:647,Meloetta:648,Genesect:649,
"Tapu Koko":785,"Tapu Lele":786,"Tapu Bulu":787,"Tapu Fini":788,Silvally:773,
Nihilego:793,Buzzwole:794,Xurkitree:796,Kartana:798,Guzzlord:799,
Celebi:251,Jirachi:385,"Kommo-o":784,Eevee:133,
Blastoise:9,Machamp:68,Exeggutor:103,Flareon:136,Manectric:310,Banette:354,Sharpedo:319,
Samurott:503,Simisear:514,Magnezone:462,Roserade:407,Delphox:655,Aegislash:681,Abomasnow:460,Hawlucha:701,
Kabutops:141,Hitmonlee:106,Jolteon:135,Aerodactyl:142,Rhydon:112,Golem:76,Tauros:128,Venusaur:3,Butterfree:12,Swampert:260,Froslass:478,Sceptile:254};

// tipos: label PT, cor, emoji
const TYPE_META={
 normal:["Normal","#9099a1","⚪"],fire:["Fogo","#ff6b3d","🔥"],water:["Água","#4d90d5","💧"],
 electric:["Elétrico","#f0b800","⚡"],grass:["Planta","#5bb85b","🌿"],ice:["Gelo","#5cc9c0","❄️"],
 fighting:["Lutador","#d24d6e","🥊"],poison:["Veneno","#a463c8","☠️"],ground:["Terra","#cf7b45","⛰️"],
 flying:["Voador","#8aa8e0","🕊️"],psychic:["Psíquico","#f56776","🔮"],bug:["Inseto","#93bd2b","🐛"],
 rock:["Pedra","#bfae82","🪨"],ghost:["Fantasma","#5a6dad","👻"],dragon:["Dragão","#2f74d0","🐉"],
 dark:["Sombrio","#5c5566","🌑"],steel:["Aço","#5a8ea1","⚙️"],fairy:["Fada","#ec8fe6","🧚"]};
const TYPES={
 Absol:["dark"],Aggron:["steel","rock"],Alakazam:["psychic"],Ampharos:["electric"],Arcanine:["fire"],
 Articuno:["ice","flying"],Blaziken:["fire","fighting"],Chandelure:["ghost","fire"],Charizard:["fire","flying"],
 Deoxys:["psychic"],Diancie:["rock","fairy"],Dragonite:["dragon","flying"],Emboar:["fire","fighting"],
 Espeon:["psychic"],Flygon:["ground","dragon"],Gallade:["psychic","fighting"],Garchomp:["dragon","ground"],
 Gardevoir:["psychic","fairy"],Gengar:["ghost","poison"],Giratina:["ghost","dragon"],Glalie:["ice"],
 Gliscor:["ground","flying"],Golurk:["ground","ghost"],Goodra:["dragon"],Greninja:["water","dark"],
 Gyarados:["water","flying"],Haxorus:["dragon"],Heliolisk:["electric","normal"],Heracross:["bug","fighting"],
 Hoopa:["psychic","ghost"],Hydreigon:["dark","dragon"],Incineroar:["fire","dark"],Infernape:["fire","fighting"],
 Kingdra:["water","dragon"],Krookodile:["ground","dark"],Kyurem:["dragon","ice"],Lapras:["water","ice"],
 Latias:["dragon","psychic"],Leafeon:["grass"],Lucario:["fighting","steel"],Lurantis:["grass"],
 Luxray:["electric"],Lycanroc:["rock"],Mamoswine:["ice","ground"],Marshadow:["fighting","ghost"],
 Metagross:["steel","psychic"],Mewtwo:["psychic"],Milotic:["water"],Mimikyu:["ghost","fairy"],
 Moltres:["fire","flying"],Noivern:["flying","dragon"],Pikachu:["electric"],Rayquaza:["dragon","flying"],
 Reshiram:["dragon","fire"],Reuniclus:["psychic"],Salamence:["dragon","flying"],Salazzle:["poison","fire"],
 Scizor:["bug","steel"],Simipour:["water"],Snorlax:["normal"],Inteleon:["water"],Solgaleo:["psychic","steel"],
 Sylveon:["fairy"],Togekiss:["fairy","flying"],Trevenant:["ghost","grass"],Typhlosion:["fire"],
 Tyranitar:["rock","dark"],Umbreon:["dark"],Victini:["psychic","fire"],Vikavolt:["bug","electric"],
 Volcarona:["bug","fire"],Wishiwashi:["water"],Yveltal:["dark","flying"],Zapdos:["electric","flying"],
 Zoroark:["dark"],Zygarde:["dragon","ground"],
 Corviknight:["flying","steel"],Toxtricity:["electric","poison"],Coalossal:["rock","fire"],Grimmsnarl:["dark","fairy"],
 Dragapult:["dragon","ghost"],Duraludon:["steel","dragon"],Obstagoon:["dark","normal"],Hatterene:["psychic","fairy"],
 Eternatus:["poison","dragon"],Zacian:["fairy","steel"],Zamazenta:["fighting","steel"],Urshifu:["fighting","dark"],
 "Galarian Articuno":["psychic","flying"],"Galarian Zapdos":["fighting","flying"],"Galarian Moltres":["dark","flying"],
 Mew:["psychic"],"Ho-oh":["fire","flying"],Lugia:["psychic","flying"],Entei:["fire"],Suicune:["water"],Raikou:["electric"],
 Groudon:["ground"],Kyogre:["water"],Palkia:["water","dragon"],Dialga:["steel","dragon"],
 Tornadus:["flying"],Thundurus:["electric","flying"],Landorus:["ground","flying"],
 Cobalion:["steel","fighting"],Terrakion:["rock","fighting"],Virizion:["grass","fighting"],Keldeo:["water","fighting"],Meloetta:["normal","psychic"],Genesect:["bug","steel"],
 "Tapu Koko":["electric","fairy"],"Tapu Lele":["psychic","fairy"],"Tapu Bulu":["grass","fairy"],"Tapu Fini":["water","fairy"],Silvally:["normal"],
 Nihilego:["rock","poison"],Buzzwole:["bug","fighting"],Xurkitree:["electric"],Kartana:["grass","steel"],Guzzlord:["dark","dragon"],
 Celebi:["psychic","grass"],Jirachi:["steel","psychic"],"Kommo-o":["dragon","fighting"],Eevee:["normal"],
 Blastoise:["water"],Machamp:["fighting"],Exeggutor:["grass","psychic"],Flareon:["fire"],Manectric:["electric"],Banette:["ghost"],Sharpedo:["water","dark"],
 Samurott:["water"],Simisear:["fire"],Magnezone:["electric","steel"],Roserade:["grass","poison"],Delphox:["fire","psychic"],Aegislash:["steel","ghost"],Abomasnow:["grass","ice"],Hawlucha:["fighting","flying"],
 Kabutops:["rock","water"],Hitmonlee:["fighting"],Jolteon:["electric"],Aerodactyl:["rock","flying"],Rhydon:["ground","rock"],Golem:["rock","ground"],Tauros:["normal"],Venusaur:["grass","poison"],Butterfree:["bug","flying"],Swampert:["water","ground"],Froslass:["ice","ghost"],Sceptile:["grass"]};
// tipos das formas Mega (por espécie-base)
const MEGA_TYPES={
 Charizard:["fire","dragon"],Alakazam:["psychic"],Gengar:["ghost","poison"],Mewtwo:["psychic"],
 Ampharos:["electric","dragon"],Scizor:["bug","steel"],Tyranitar:["rock","dark"],Blaziken:["fire","fighting"],
 Gardevoir:["psychic","fairy"],Glalie:["ice"],Metagross:["steel","psychic"],Aggron:["steel"],
 Salamence:["dragon","flying"],Rayquaza:["dragon","flying"],Latias:["dragon","psychic"],Garchomp:["dragon","ground"],
 Lucario:["fighting","steel"],Gallade:["psychic","fighting"],Diancie:["rock","fairy"],Gyarados:["water","dark"],Absol:["dark"],
 Manectric:["electric"],Banette:["ghost"],Sharpedo:["water","dark"],Blastoise:["water"],Abomasnow:["grass","ice"],
 Venusaur:["grass","poison"],Aerodactyl:["rock","flying"],Heracross:["bug","fighting"],Swampert:["water","ground"],Sceptile:["grass","dragon"]};

// captures per region (first-capture ordering from MD)
const CAPTURES={
 Red:["Charizard","Pikachu","Lapras","Snorlax","Kabutops","Hitmonlee","Jolteon","Aerodactyl","Rhydon","Golem","Tauros"],
 Yellow:["Blastoise","Venusaur","Butterfree"],
 Kanto:["Gengar","Dragonite","Arcanine","Mewtwo","Moltres","Zapdos","Articuno","Mew"],
 LeafGreen:["Alakazam","Machamp","Exeggutor","Flareon"],
 Laranja:[],
 Johto:["Typhlosion","Ampharos","Espeon","Scizor","Kingdra","Tyranitar","Umbreon","Ho-oh","Lugia","Entei","Suicune","Raikou","Celebi","Heracross"],
 Hoenn:["Blaziken","Gardevoir","Flygon","Milotic","Glalie","Metagross","Rayquaza","Groudon","Kyogre"],
 Sinnoh:["Infernape","Luxray","Leafeon","Togekiss","Gliscor","Garchomp","Lucario","Gallade","Mamoswine","Giratina","Froslass"],
 Unova:["Emboar","Simipour","Krookodile","Reuniclus","Volcarona","Haxorus","Golurk","Hydreigon","Reshiram","Victini","Cobalion","Terrakion","Virizion"],
 "Black 2":["Samurott","Simisear","Magnezone","Roserade","Zoroark","Kyurem","Keldeo","Meloetta","Genesect"],
 "Light Platinum":["Gyarados"],
 Kalos:["Greninja","Heliolisk","Sylveon","Goodra","Trevenant","Noivern","Yveltal","Zygarde","Hoopa"],
 "Kalos X":["Delphox","Aegislash","Abomasnow","Diancie","Hawlucha"],
 Roria:["Absol"],
 "Omega Ruby":["Salamence","Latias","Manectric","Banette","Sharpedo","Aggron","Swampert","Sceptile","Deoxys","Palkia","Tornadus","Thundurus","Landorus","Dialga","Jirachi"],
 Alola:["Incineroar","Vikavolt","Lycanroc","Wishiwashi","Lurantis","Mimikyu","Salazzle","Solgaleo","Marshadow","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Silvally","Kommo-o","Nihilego","Buzzwole","Xurkitree","Kartana","Guzzlord"],
 "Mega Light Platinum":[],
 Glazed:[],
 "Dark Rising":["Chandelure"],
 Quetzal:[],
 Unbound:[],
 "Radical Red":[],
 Galar:["Inteleon","Corviknight","Toxtricity","Coalossal","Grimmsnarl","Dragapult","Duraludon","Obstagoon","Hatterene","Eternatus","Zacian","Zamazenta","Galarian Articuno","Galarian Zapdos","Galarian Moltres","Urshifu"]
};

// per-pokemon metadata
const SHINY=new Set(["Metagross","Lucario","Rayquaza","Greninja","Gyarados","Swampert"]);
const LEGEND=new Set(["Mewtwo","Moltres","Zapdos","Articuno","Rayquaza","Latias","Giratina","Reshiram","Kyurem","Yveltal","Zygarde","Solgaleo","Eternatus","Zacian","Zamazenta","Urshifu","Galarian Articuno","Galarian Zapdos","Galarian Moltres","Ho-oh","Lugia","Entei","Suicune","Raikou","Groudon","Kyogre","Palkia","Dialga","Tornadus","Thundurus","Landorus","Cobalion","Terrakion","Virizion","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Silvally"]);
const MYTH=new Set(["Deoxys","Victini","Hoopa","Diancie","Marshadow","Mew","Keldeo","Meloetta","Genesect","Celebi","Jirachi"]);
const UB=new Set(["Nihilego","Buzzwole","Xurkitree","Kartana","Guzzlord"]); // Ultra Beasts (todas em Alola)
const HA=new Set(["Blaziken","Gliscor","Greninja"]); // 3, counting Ash Greninja
const HASMEGA=new Set(["Charizard","Alakazam","Gengar","Mewtwo","Ampharos","Scizor","Tyranitar","Blaziken","Gardevoir","Glalie","Metagross","Aggron","Salamence","Rayquaza","Latias","Garchomp","Lucario","Gallade","Diancie","Gyarados","Absol","Manectric","Banette","Sharpedo","Blastoise","Abomasnow","Venusaur","Aerodactyl","Heracross","Swampert","Sceptile"]);
const FINAL=new Set(["Blaziken","Greninja","Metagross","Gengar","Marshadow","Gliscor"]);

// teams per region (as MD, order preserved). Names cleaned for sprite lookup.
const TEAMS=[
 {region:"Red",title:"Campeão de Kanto (Red)",mvp:"Charizard",mons:["Charizard","Pikachu","Lapras","Snorlax","Kabutops","Hitmonlee"]},
 {region:"Yellow",title:"Campeão de Kanto (Yellow)",mvp:"Pikachu",mons:["Pikachu","Charizard","Blastoise","Venusaur","Lapras","Snorlax"],note:"Charizard, Lapras e Snorlax reaproveitados de Red."},
 {region:"Kanto",title:"Campeão de Kanto (FireRed)",mvp:"Charizard",mons:["Charizard","Pikachu","Gengar","Snorlax","Lapras","Dragonite"],note:"Charizard, Pikachu, Snorlax e Lapras reaproveitados de Red/Yellow."},
 {region:"LeafGreen",title:"Campeão de Kanto (LeafGreen)",mvp:"Pikachu",mons:["Blastoise","Alakazam","Pikachu","Machamp","Exeggutor","Flareon"],note:"Pikachu capturado em Red, reaproveitado aqui como MVP. Blastoise capturado em Yellow."},
 {region:"Laranja",title:"Campeão das Ilhas Laranja",mvp:"Mewtwo",mons:["Charizard","Pikachu","Dragonite","Zapdos","Articuno","Mewtwo"]},
 {region:"Johto",title:"Campeão de Johto",mvp:"Tyranitar",mons:["Typhlosion","Ampharos","Espeon","Scizor","Kingdra","Tyranitar"]},
 {region:"Hoenn",title:"Campeão de Hoenn (Emerald)",mvp:"Blaziken",mons:["Blaziken","Gardevoir","Flygon","Milotic","Glalie","Metagross"]},
 {region:"Sinnoh",title:"Campeão de Sinnoh",mvp:"Gliscor",mons:["Infernape","Luxray","Togekiss","Gliscor","Garchomp","Lucario"]},
 {region:"Unova",title:"Campeão de Unova (Black)",mvp:"Emboar",mons:["Emboar","Simipour","Krookodile","Reuniclus","Volcarona","Haxorus"]},
 {region:"Black 2",title:"Campeão de Unova (Black 2)",mvp:"Flygon",mons:["Samurott","Simisear","Magnezone","Roserade","Flygon","Zoroark"],note:"Flygon reaproveitado do Emerald."},
 {region:"Light Platinum",title:"Campeão de Zhery",mvp:"Blaziken",mons:["Charizard","Gyarados","Blaziken","Gengar","Lucario","Metagross"],note:"Blaziken HA • Gyarados Shiny • Metagross Shiny."},
 {region:"Kalos",title:"Campeão de Kalos (Y)",mvp:"Greninja",mons:["Greninja","Charizard","Heliolisk","Sylveon","Goodra","Trevenant"],note:"Charizard aqui em forma Mega Charizard X."},
 {region:"Kalos X",title:"Campeão de Kalos (X)",mvp:"Lucario",mons:["Delphox","Lucario","Blastoise","Aegislash","Abomasnow","Noivern"],note:"Mega Lucario • Mega Blastoise • Mega Abomasnow. Lucario reaproveitado de Sinnoh, Blastoise do LeafGreen e Noivern de Kalos (Y)."},
 {region:"Roria",title:"Campeão de Roria",mvp:"Absol",mons:["Blaziken","Luxray","Greninja","Gengar","Gardevoir","Absol"],note:"Mega Blaziken • Ash-Greninja • Mega Gengar • Mega Gardevoir • Mega Absol."},
 {region:"Omega Ruby",title:"Campeão de Hoenn (Omega Ruby)",mvp:"Blaziken",mons:["Blaziken","Salamence","Latias","Manectric","Banette","Sharpedo"],note:"Mega Salamence • Mega Latias • Mega Manectric • Mega Banette • Mega Sharpedo. Blaziken reaproveitado do Emerald."},
 // Marshadow é o MVP/assinatura de Alola mas, por escolha própria, nunca entra no time formal de 6 — só se junta a Pedro depois da conquista (ver nota no FINAL_TEAM). Não é um erro de dados.
 {region:"Alola",title:"Campeão de Alola",mvp:"Marshadow",mons:["Incineroar","Vikavolt","Lycanroc","Wishiwashi","Lurantis","Mimikyu"]},
 {region:"Mega Light Platinum",title:"Campeão de Lauren",mvp:"Metagross",mons:["Charizard","Gyarados","Blaziken","Gengar","Lucario","Metagross"],note:"Time inteiro em Mega Evolução."},
 {region:"Glazed",title:"Campeão de Tunod",mvp:"Lucario",mons:["Lucario","Gardevoir","Froslass","Blaziken","Sceptile","Dragonite"],note:"Mega Lucario Shiny • Blaziken HA • Mega Sceptile. Sceptile reaproveitado de Omega Ruby."},
 {region:"Dark Rising",title:"Campeão da Core Region",mvp:"Gengar",mons:["Dragonite","Gengar","Gliscor","Togekiss","Chandelure","Lucario"],note:"Lucario Shiny."},
 {region:"Quetzal",title:"Campeão de Hoenn (Quetzal)",mvp:"Marshadow",mons:["Swampert","Arcanine","Marshadow","Dragonite","Gliscor","Luxray"],note:"Mega Swampert Shiny. Swampert reaproveitado de Omega Ruby, Arcanine de FireRed, Marshadow de Alola, Dragonite de Kanto, Gliscor e Luxray de Sinnoh — sem novas capturas."},
 {region:"Unbound",title:"Campeão de Borrius",mvp:"Metagross",mons:["Metagross","Gengar","Togekiss","Gliscor","Blaziken","Greninja"],note:"Metagross Shiny • Gliscor HA • Ash Greninja Shiny."},
 {region:"Radical Red",title:"Campeão Mundial",titleLong:"Campeão Mundial — Radical Red",mvp:"Blaziken",mons:["Blaziken","Gengar","Gliscor","Greninja","Metagross","Marshadow"],world:true,note:"Mega Blaziken HA • Mega Gengar • Ash-Greninja Shiny • Mega Metagross Shiny."},
 {region:"Galar",title:"Campeão de Galar",mvp:"Dragapult",mons:["Inteleon","Corviknight","Toxtricity","Coalossal","Grimmsnarl","Dragapult"],note:"Gigantamax: Inteleon, Corviknight, Toxtricity, Coalossal e Grimmsnarl."}
];
// títulos = nº de vezes que o Pokémon aparece num time campeão (derivado de TEAMS, nunca contado à mão)
const TITLES={};
TEAMS.forEach(t=>t.mons.forEach(n=>{TITLES[n]=(TITLES[n]||0)+1;}));
// MVPs = nº de vezes que o Pokémon foi MVP de um título (derivado de TEAMS, nunca contado à mão)
const MVP_COUNT={};
TEAMS.forEach(t=>{MVP_COUNT[t.mvp]=(MVP_COUNT[t.mvp]||0)+1;});

// region themes + narrative + megas
const REGIONS={
 Red:{game:"Red",region:"Kanto",c:"#c0392b,#8b0000",sig:"Charizard",megas:0,blurb:"O início de tudo. Em Pokémon Red, Pedro deu os primeiros passos da lenda com Charizard ao lado, formando um time clássico com Kabutops e Hitmonlee, e capturando seus primeiros lendários."},
 Yellow:{game:"Yellow",region:"Kanto",c:"#ffcb3d,#ffde59",sig:"Pikachu",megas:0,blurb:"De volta a Kanto, agora em Yellow, Pedro reformula o time com o icônico Pikachu à frente, ao lado de Charizard, Blastoise, Venusaur, Lapras e Snorlax."},
 Kanto:{game:"FireRed",region:"Kanto",c:"#ff5c4d,#ff9f1c",sig:"Charizard",megas:0,blurb:"Kanto revisitada em FireRed. Pedro renova o time com Gengar e Dragonite ao lado dos veteranos Charizard, Pikachu, Snorlax e Lapras, conquistando os lendários restantes da região."},
 LeafGreen:{game:"LeafGreen",region:"Kanto",c:"#ffcb3d,#ff5c4d",sig:"Pikachu",megas:0,blurb:"De volta a Kanto, agora em LeafGreen, Pedro monta um time totalmente novo liderado pelo fiel Pikachu — ao lado de Blastoise, Alakazam, Machamp, Exeggutor e Flareon."},
 Laranja:{game:"Laranja",region:"Ilhas Laranja",c:"#ffcb3d,#ff5c4d",sig:"Mewtwo",megas:0,blurb:"O torneio dos lendários. Sem novas capturas, Pedro venceu com um time de aves lendárias e Mewtwo à frente."},
 Johto:{game:"HeartGold",region:"Johto",c:"#6a5cff,#28e0d8",sig:"Tyranitar",megas:0,blurb:"Fase de amadurecimento. Pedro refinou sua estratégia e coroou a região com o poderoso Tyranitar, mostrando evolução como treinador."},
 Hoenn:{game:"Emerald",region:"Hoenn",c:"#38e08b,#3d8bff",sig:"Blaziken",megas:0,blurb:"O nascimento de dois pilares eternos: Blaziken, futuro Pokémon mais titulado, e o primeiro shiny da coleção, Metagross Shiny."},
 Sinnoh:{game:"Platinum",region:"Sinnoh",c:"#a45cff,#3d8bff",sig:"Gliscor",megas:0,blurb:"Terras geladas e poderosas. Gliscor e Lucario Shiny surgem aqui, dois nomes que acompanhariam Pedro até o Time Final."},
 Unova:{game:"Black",region:"Unova",c:"#ff3b5c,#a45cff",sig:"Emboar",megas:0,blurb:"Visual moderno e intenso. Emboar lidera a campanha enquanto Pedro captura lendários e míticos raríssimos como Reshiram e Victini."},
 "Black 2":{game:"Black 2",region:"Unova",c:"#a45cff,#28e0d8",sig:"Flygon",megas:0,blurb:"Pedro retorna a Unova em Black 2 com um time renovado — Samurott, Simisear, Magnezone e Roserade se juntam ao veterano Flygon (trazido do Hoenn) e ao astuto Zoroark, enquanto Kyurem, Keldeo, Meloetta e Genesect completam a coleção."},
 "Light Platinum":{game:"Light Platinum",region:"Zhery",c:"#3d8bff,#28e0d8",sig:"Blaziken",megas:0,blurb:"Fase de preparação (região Zhery). Gyarados Shiny é capturado e Blaziken HA lidera rumo ao domínio das Megas."},
 Kalos:{game:"Y",region:"Kalos",c:"#ff3b5c,#ffcb3d",sig:"Greninja",megas:11,blurb:"A chegada das Mega Evoluções! Em Pokémon Y, Pedro desbloqueia suas primeiras 11 Megas — incluindo Venusaur, Aerodactyl e Heracross, capturados em etapas anteriores — e captura Greninja Shiny, além de Yveltal, Zygarde e Hoopa."},
 "Kalos X":{game:"X",region:"Kalos",c:"#3d8bff,#a45cff",sig:"Lucario",megas:10,blurb:"Em Pokémon X, Pedro forma um time inédito com Delphox, Aegislash e o raro Abomasnow, desbloqueia mais 10 Megas — incluindo Mega Lucario, Mega Blastoise e Mega Scizor — e captura o mítico Diancie e o exclusivo Hawlucha."},
 Roria:{game:"Brick Bronze",region:"Roria",c:"#e0873d,#28c0a8",sig:"Absol",megas:1,blurb:"Nova fronteira em Pokémon Brick Bronze. Em Roria, Pedro captura Absol e desbloqueia sua Mega Evolução, coroando a região com o imponente Mega Absol como assinatura."},
 "Omega Ruby":{game:"Omega Ruby",region:"Hoenn",c:"#3d8bff,#38e08b",sig:"Blaziken",megas:8,blurb:"Pedro retorna a Hoenn em Omega Ruby e destrava um arsenal de novas Megas — Salamence, Latias, Manectric, Banette, Sharpedo, Aggron, Swampert Shiny e Sceptile — reforçando o já lendário Mega Blaziken como líder do time."},
 Alola:{game:"Sun",region:"Alola",c:"#28e0d8,#6a2cff",sig:"Marshadow",megas:0,allZ:true,blurb:"Clima tropical com energia sombria. Em Alola, Pedro desbloqueia TODOS os Z-Moves e recruta Marshadow, o mítico do Z-Move exclusivo, ao lado de Solgaleo."},
 "Mega Light Platinum":{game:"Mega Light Platinum",region:"Lauren",c:"#ff3b5c,#a45cff",sig:"Metagross",megas:1,blurb:"Domínio total das Megas (região Lauren). Todo o time Mega Evolui, incluindo o recém-adquirido Mega Gyarados Shiny."},
 Glazed:{game:"Glazed",region:"Tunod",c:"#ffcb3d,#38e08b",sig:"Lucario",megas:0,blurb:"Honra e experiência (região Tunod). Mega Lucario Shiny brilha como assinatura desta etapa da jornada."},
 "Dark Rising":{game:"Dark Rising",region:"Core Region",c:"#6a2cff,#111",sig:"Gengar",megas:0,blurb:"A fase mais sombria (Core Region). Gengar assume o comando em batalhas intensas e obscuras."},
 Quetzal:{game:"Quetzal",region:"Hoenn",c:"#2ecc71,#1f8a5c",sig:"Marshadow",megas:0,blurb:"Pedro retorna a Hoenn pela terceira vez, em Quetzal, reunindo um time de veteranos: Mega Swampert Shiny reforça ao lado de Arcanine, Marshadow, Dragonite, Gliscor e Luxray — nenhuma captura nova, só experiência acumulada de toda a jornada."},
 Unbound:{game:"Unbound",region:"Borrius",c:"#ff9f1c,#ff3b5c",sig:"Metagross",megas:0,blurb:"A reta final antes do mundial (região Borrius). Ash Greninja Shiny e Gliscor HA entram em cena — o time final começa a tomar forma."},
 "Radical Red":{game:"Radical Red",region:"Kanto",c:"#ffcb3d,#ff3b5c",sig:"Blaziken",megas:0,world:true,blurb:"O ápice absoluto. Pedro se torna CAMPEÃO MUNDIAL com seu Time Final definitivo: Mega Blaziken HA, Ash-Greninja Shiny, Mega Metagross Shiny, Mega Gengar, Marshadow e Gliscor."},
 Galar:{game:"Sword & Shield",region:"Galar",c:"#e0455c,#3d7bff",sig:"Dragapult",megas:0,gmax:true,blurb:"O recomeço absoluto. Após o título mundial, Pedro parte para Galar com um time inteiramente novo e domina a era Gigantamax — coroando a região com Dragapult, capturando os lendários Zacian, Zamazenta, Eternatus, Urshifu e as três aves de Galar, e desbloqueando o Gigantamax de Venusaur, Blastoise, Butterfree e Machamp, capturados em etapas anteriores."}
};
// helpers de exibição: capítulo (jogo) e região geográfica
function chapterName(key){return (REGIONS[key]&&REGIONS[key].game)||key;}
function regionName(key){return (REGIONS[key]&&REGIONS[key].region)||key;}
const REGION_ORDER=Object.keys(REGIONS);

// signature per region
const SIGNATURE={Red:"Charizard",Yellow:"Pikachu",Kanto:"Charizard",LeafGreen:"Pikachu",Johto:"Tyranitar",Hoenn:"Blaziken",Sinnoh:"Gliscor",Unova:"Emboar","Black 2":"Flygon",Kalos:"Greninja","Kalos X":"Lucario",Alola:"Marshadow",Laranja:"Mewtwo","Light Platinum":"Blaziken","Mega Light Platinum":"Metagross",Roria:"Absol","Omega Ruby":"Blaziken",Glazed:"Lucario","Dark Rising":"Gengar",Quetzal:"Marshadow",Unbound:"Metagross","Radical Red":"Blaziken",Galar:"Dragapult"};

// final team detailed
const FINAL_TEAM=[
 {name:"Mega Blaziken",base:"Blaziken",origin:"Hoenn",lvl:100,nat:"Jolly",item:"Blazikenite",abi:"Speed Boost",role:"Sweeper físico",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"252 Atk / 4 SpD / 252 Spe",moves:["Swords Dance","Flare Blitz","Close Combat","Stone Edge"],tags:["mega","ha","final"],note:`Maior campeão de Pedro, com ${TITLES.Blaziken} títulos conquistados ao longo da jornada.`},
 {name:"Ash-Greninja",base:"Greninja",origin:"Kalos / Ash em Unbound",lvl:100,nat:"Modest",item:"Choice Specs",abi:"Battle Bond",role:"Atacante especial",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"252 SpA / 4 SpD / 252 Spe",moves:["Hydro Pump","Water Shuriken","Dark Pulse","Ice Beam"],tags:["shiny","ha","final"],note:"Forma especial e única, vínculo absoluto com Pedro."},
 {name:"Mega Metagross",base:"Metagross",origin:"Hoenn",lvl:100,nat:"Adamant",item:"Metagrossite",abi:"Tough Claws",role:"Tanque ofensivo",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"252 Atk / 4 SpD / 252 Spe",moves:["Meteor Mash","Zen Headbutt","Thunder Punch","Earthquake"],tags:["mega","shiny","final"],note:"Primeiro shiny de Pedro, símbolo raro de sua jornada e um dos pilares do Time Final."},
 {name:"Mega Gengar",base:"Gengar",origin:"Kanto",lvl:100,nat:"Timid",item:"Gengarite",abi:"Shadow Tag",role:"Controle ofensivo",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"252 SpA / 4 SpD / 252 Spe",moves:["Shadow Ball","Sludge Bomb","Icy Wind","Destiny Bond"],tags:["mega","final"],note:"Pedro pode usar tanto sua Mega Evolução quanto sua forma Gigantamax."},
 {name:"Marshadow",base:"Marshadow",origin:"Alola",lvl:100,nat:"Jolly",item:"Marshadium Z",abi:"Technician",role:"Finalizador físico",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"252 Atk / 4 SpD / 252 Spe",moves:["Spectral Thief","Close Combat","Shadow Sneak","Bulk Up"],tags:["myth","final"],note:"Escolheu Pedro por vontade própria, não fica em Pokébola e domina seu Z-Move Exclusivo."},
 {name:"Gliscor",base:"Gliscor",origin:"Sinnoh",lvl:100,nat:"Impish",item:"Toxic Orb",abi:"Poison Heal",role:"Suporte defensivo",
  ivs:"31 / 31 / 31 / 31 / 31 / 31",evs:"244 HP / 192 Def / 72 Spe",moves:["Stealth Rock","Earthquake","Roost","Toxic"],tags:["ha","final"],note:"Defensor estratégico do Time Final, usando Poison Heal para resistir e controlar o campo."}
];

// lista de títulos (jornada) = derivada de TEAMS, na mesma ordem (titleLong sobrescreve title quando existe)
const TITLE_LIST=TEAMS.map(t=>t.titleLong||t.title);
const RESERVE=[{n:"Charizard",l:"Mega Charizard X"},{n:"Mewtwo",l:"Mega Mewtwo Y"},{n:"Lucario",l:"Mega Lucario"},{n:"Pikachu",l:"Parceiro clássico"},{n:"Dragonite",l:"Reforço veterano"},{n:"Gardevoir",l:"Mega Gardevoir"}];
// Time C — esquadrão alternativo de Pedro
const TEAM_C=["Luxray","Togekiss","Flygon","Gyarados","Dragapult","Tyranitar"];
const MEGAS=[
 ["Charizard","Kalos","Mega Charizard X",10034],["Alakazam","Kalos","Mega Alakazam",10037],["Gengar","Kalos","Mega Gengar",10038],["Mewtwo","Kalos","Mega Mewtwo Y",10044],
 ["Ampharos","Kalos","Mega Ampharos",10045],["Tyranitar","Kalos","Mega Tyranitar",10049],["Blaziken","Kalos","Mega Blaziken",10050],
 ["Gardevoir","Kalos","Mega Gardevoir",10051],
 ["Venusaur","Kalos","Mega Venusaur",10033],["Aerodactyl","Kalos","Mega Aerodactyl",10042],["Heracross","Kalos","Mega Heracross",10047],
 ["Glalie","Kalos X","Mega Glalie",10074],["Metagross","Kalos X","Mega Metagross Shiny",10076],["Rayquaza","Kalos X","Mega Rayquaza Shiny",10079],
 ["Garchomp","Kalos X","Mega Garchomp",10058],["Lucario","Kalos X","Mega Lucario Shiny",10059],["Gallade","Kalos X","Mega Gallade",10068],["Diancie","Kalos X","Mega Diancie",10075],
 ["Blastoise","Kalos X","Mega Blastoise",10036],["Abomasnow","Kalos X","Mega Abomasnow",10060],["Scizor","Kalos X","Mega Scizor",10046],
 ["Aggron","Omega Ruby","Mega Aggron",10053],["Salamence","Omega Ruby","Mega Salamence",10089],["Latias","Omega Ruby","Mega Latias",10062],
 ["Manectric","Omega Ruby","Mega Manectric",10055],["Banette","Omega Ruby","Mega Banette",10056],["Sharpedo","Omega Ruby","Mega Sharpedo",10070],["Swampert","Omega Ruby","Mega Swampert Shiny",10064],["Sceptile","Omega Ruby","Mega Sceptile",10065],
 ["Gyarados","Mega Light Platinum","Mega Gyarados Shiny",10041],
 ["Absol","Roria","Mega Absol",10057]
];
// base da mega -> sprite da mega (para o botão na ficha)
const MEGA_INFO={};MEGAS.forEach(m=>MEGA_INFO[m[0]]={id:m[3],shiny:/Shiny/.test(m[2]),name:m[2]});
// Gigantamax dominados [base, nome, spriteId] — desbloqueados em Galar
const GMAX=[
 ["Inteleon","Gigantamax Inteleon",10211],["Corviknight","Gigantamax Corviknight",10212],["Toxtricity","Gigantamax Toxtricity",10219],
 ["Coalossal","Gigantamax Coalossal",10215],["Grimmsnarl","Gigantamax Grimmsnarl",10222],["Duraludon","Gigantamax Duraludon",10225],
 ["Charizard","Gigantamax Charizard",10196],["Pikachu","Gigantamax Pikachu",10199],["Gengar","Gigantamax Gengar",10202],
 ["Lapras","Gigantamax Lapras",10204],["Snorlax","Gigantamax Snorlax",10206],["Hatterene","Gigantamax Hatterene",10221],
 ["Urshifu","Gigantamax Urshifu",10226],
 ["Venusaur","Gigantamax Venusaur",10195],["Blastoise","Gigantamax Blastoise",10197],["Butterfree","Gigantamax Butterfree",10198],["Machamp","Gigantamax Machamp",10201]
];
const GMAX_INFO={};GMAX.forEach(g=>GMAX_INFO[g[0]]={id:g[2],name:g[1]});
// Formas alternativas [base, nome da forma, spriteId, selo, [tipos]] — Primal / Therian / Resolute / Pirouette
const FORMS=[
 ["Groudon","Primal Groudon",10078,"🔴 PRIMAL",["ground","fire"]],
 ["Kyogre","Primal Kyogre",10077,"🔵 PRIMAL",["water"]],
 ["Tornadus","Tornadus Therian",10019,"🌪️ THERIAN",["flying"]],
 ["Thundurus","Thundurus Therian",10020,"⚡ THERIAN",["electric","flying"]],
 ["Landorus","Landorus Therian",10021,"⛰️ THERIAN",["ground","flying"]],
 ["Keldeo","Keldeo Resolute",10024,"⚔️ RESOLUTE",["water","fighting"]],
 ["Meloetta","Meloetta Pirouette",10018,"💃 PIROUETTE",["normal","fighting"]],
 ["Greninja","Ash-Greninja",10117,"🌀 ASH",["water","dark"]],
 ["Wishiwashi","Wishiwashi School Form",10127,"🐟 SCHOOL",["water"]],
 ["Giratina","Giratina Origin Forme",10007,"👻 ORIGIN",["ghost","dragon"]],
 ["Hoopa","Hoopa Unbound",10086,"🔓 UNBOUND",["psychic","dark"]],
 ["Zygarde","Zygarde Complete Forme",10120,"💯 COMPLETE",["dragon","ground"]],
 ["Zacian","Zacian Crowned Sword",10188,"⚔️ CROWNED",["fairy","steel"]],
 ["Zamazenta","Zamazenta Crowned Shield",10189,"🛡️ CROWNED",["fighting","steel"]],
 ["Marshadow","Zenith Marshadow",0,"✦ ZENITH",["fighting","ghost"],"https://static.wikia.nocookie.net/international-pokedex/images/d/d6/Marshadow_%28Zenith_Marshadow%29.png/revision/latest/scale-to-width-down/488?cb=20190611181246"]
];
// sprite da forma: URL custom (f[5]) quando existir, senão official-artwork por id
function formSrc(info,shiny){return info.url||ART+(shiny?"shiny/":"")+info.id+".png";}
const FORM_INFO={};FORMS.forEach(f=>FORM_INFO[f[0]]={id:f[2],name:f[1],label:f[3],types:f[4],url:f[5]});
const FORM_SWAP={};FORMS.forEach(f=>{if(!DEX[f[0]])return;
  FORM_SWAP[img(f[0],false)]={u:f[5]||ART+f[2]+".png",label:f[3],base:f[0]};
  FORM_SWAP[img(f[0],true)]={u:f[5]||ART+"shiny/"+f[2]+".png",label:f[3],base:f[0]};});
// Formas com múltiplas variantes escolhíveis pelo jogador (hoje só Deoxys) — usuário escolhe qual ativa no hover/popup
const MULTI_FORMS={Deoxys:[["attack","Deoxys Attack Forme",10001,"🔺 ATTACK"],["defense","Deoxys Defense Forme",10002,"🛡️ DEFENSE"],["speed","Deoxys Speed Forme",10003,"💨 SPEED"]]};
const FORM_VARIANT={Deoxys:"attack"};
function applyFormVariant(base){
  const opts=MULTI_FORMS[base];if(!opts)return;
  const v=opts.find(o=>o[0]===FORM_VARIANT[base])||opts[0];
  FORM_INFO[base]={id:v[2],name:v[1],label:v[3],types:TYPES[base]};
  FORM_SWAP[img(base,false)]={u:ART+v[2]+".png",label:v[3],base};
  FORM_SWAP[img(base,true)]={u:ART+"shiny/"+v[2]+".png",label:v[3],base};
}
Object.keys(MULTI_FORMS).forEach(applyFormVariant);
function setFormVariant(base,k){
  FORM_VARIANT[base]=k;applyFormVariant(base);
  document.querySelectorAll("#modalBox .fv-opt").forEach(b=>b.classList.toggle("on",b.dataset.k===k));
  const fb=document.getElementById("formBtn");if(fb)fb.textContent=FORM_INFO[base].label;
  const im=document.getElementById("mHeroImg");
  if(im&&im.dataset.form==="form")applyModalForm(base,SHINY.has(STAGE_BASE[base]||base),"form");
}
// Z-Moves exclusivos dominados [base, cristal Z, nome do Z-Move, URL do sprite do cristal (estilo uniforme)]
const ZMOVES=[
 ["Incineroar","Incinium Z","Malicious Moonsault","https://static.wikia.nocookie.net/pokemon/images/d/db/Incinium_Z_sprite.png/revision/latest?cb=20200910092135"],
 ["Lycanroc","Lycanium Z","Splintered Stormshards","https://static.wikia.nocookie.net/pokemon/images/9/9b/Lycanium_Z_sprite.png/revision/latest?cb=20200910092138"],
 ["Mimikyu","Mimikium Z","Let's Snuggle Forever","https://static.wikia.nocookie.net/pokemon/images/c/ce/Mimikium_Z_sprite.png/revision/latest?cb=20200910093420"],
 ["Pikachu","Pikashunium Z","10.000.000 de Volts","https://static.wikia.nocookie.net/pokemon/images/5/56/Pikashunium_Z_sprite.png/revision/latest?cb=20200909075652"],
 ["Pikachu","Pikanium Z","Catastropika","https://static.wikia.nocookie.net/pokemon/images/6/69/Pikanium_Z_sprite.png/revision/latest?cb=20200909075651"],
 ["Solgaleo","Solganium Z","Searing Sunraze Smash","https://static.wikia.nocookie.net/pokemon/images/5/53/Solganium_Z_sprite.png/revision/latest?cb=20200910093418"],
 ["Marshadow","Marshadium Z","Soul-Stealing 7-Star Strike","https://static.wikia.nocookie.net/pokemon/images/6/6c/Marshadium_Z_sprite.png/revision/latest?cb=20200910092137"],
 ["Mew","Mewnium Z","Genesis Supernova","https://static.wikia.nocookie.net/pokemon/images/3/3b/Mewnium_Z_sprite.png/revision/latest"],
 ["Tapu Koko","Tapunium Z","Guardian of Alola","https://static.wikia.nocookie.net/pokemon/images/d/d5/Tapunium_Z_sprite.png/revision/latest"],
 ["Kommo-o","Kommonium Z","Clangorous Soulblaze","https://static.wikia.nocookie.net/pokemon/images/d/d1/Kommonium_Z_sprite.png/revision/latest"],
 ["Eevee","Eevium Z","Extreme Evoboost","https://static.wikia.nocookie.net/pokemon/images/7/7f/Eevium_Z_sprite.png/revision/latest"],
 ["Snorlax","Snorlium Z","Pulverizing Pancake","https://static.wikia.nocookie.net/pokemon/images/7/78/Snorlium_Z_sprite.png/revision/latest"]
];
const ZMOVE_BASES=new Set(ZMOVES.map(z=>z[0]));
const ZMOVE_CRYSTAL={};ZMOVES.forEach(z=>{if(!ZMOVE_CRYSTAL[z[0]])ZMOVE_CRYSTAL[z[0]]=z[3];});
// Tapunium Z é um único Z-Move compartilhado pelos 4 Tapus (conta 1x acima); os outros 3 herdam o cristal para o hover
const TAPUNIUM_URL="https://static.wikia.nocookie.net/pokemon/images/d/d5/Tapunium_Z_sprite.png/revision/latest";
["Tapu Lele","Tapu Bulu","Tapu Fini"].forEach(t=>{ZMOVE_BASES.add(t);ZMOVE_CRYSTAL[t]=TAPUNIUM_URL;});
// URLs dos símbolos (Mega, Gigantamax, Z-Move) para os ícones-botão do card
const STATUS_ICON={
  mega:"https://archives.bulbagarden.net/media/upload/b/bb/Tretta_Mega_Evolution_icon.png",
  gmax:"https://static.wikia.nocookie.net/pokemon/images/7/75/Gigantamax_Icon.png/revision/latest?cb=20220415192501",
  zmove:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b4a0729-e336-46c0-a516-f2d41afa56dc/dauok4l-52c7b35e-b0e0-44f2-be49-12cce4ccb603.png/v1/fill/w_1600,h_900/z_move_symbol_by_professeurvacoa_dauok4l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mLzViNGEwNzI5LWUzMzYtNDZjMC1hNTE2LWYyZDQxYWZhNTZkYy9kYXVvazRsLTUyYzdiMzVlLWIwZTAtNDRmMi1iZTQ5LTEyY2NlNGNjYjYwMy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wEfnb2mwINDPLql8Dky1jkGq-7OnJ7wp-dp3jWHNTSE"};

// Pokédex nacional — linhas evolutivas completas [b=base capturado, r=região, l=[[nome,dexId]...]]
const POKEDEX=[{"b":"Charizard","r":"Red","l":[["Charmander",4],["Charmeleon",5],["Charizard",6]]},{"b":"Pikachu","r":"Red","l":[["Pichu",172],["Pikachu",25]]},{"b":"Gengar","r":"Kanto","l":[["Gastly",92],["Haunter",93],["Gengar",94]]},{"b":"Snorlax","r":"Red","l":[["Munchlax",446],["Snorlax",143]]},{"b":"Lapras","r":"Red","l":[["Lapras",131]]},{"b":"Dragonite","r":"Kanto","l":[["Dratini",147],["Dragonair",148],["Dragonite",149]]},
{"b":"Kabutops","r":"Red","l":[["Kabuto",140],["Kabutops",141]]},{"b":"Hitmonlee","r":"Red","l":[["Hitmonlee",106]]},{"b":"Jolteon","r":"Red","l":[["Eevee",133],["Jolteon",135]]},{"b":"Aerodactyl","r":"Red","l":[["Aerodactyl",142]]},{"b":"Rhydon","r":"Red","l":[["Rhyhorn",111],["Rhydon",112]]},{"b":"Golem","r":"Red","l":[["Geodude",74],["Graveler",75],["Golem",76]]},{"b":"Tauros","r":"Red","l":[["Tauros",128]]},
{"b":"Venusaur","r":"Yellow","l":[["Bulbasaur",1],["Ivysaur",2],["Venusaur",3]]},{"b":"Butterfree","r":"Yellow","l":[["Caterpie",10],["Metapod",11],["Butterfree",12]]},{"b":"Alakazam","r":"Kanto","l":[["Abra",63],["Kadabra",64],["Alakazam",65]]},{"b":"Arcanine","r":"Kanto","l":[["Growlithe",58],["Arcanine",59]]},{"b":"Mewtwo","r":"Kanto","l":[["Mewtwo",150]]},{"b":"Moltres","r":"Kanto","l":[["Moltres",146]]},{"b":"Zapdos","r":"Kanto","l":[["Zapdos",145]]},{"b":"Articuno","r":"Kanto","l":[["Articuno",144]]},{"b":"Mew","r":"Kanto","l":[["Mew",151]]},{"b":"Typhlosion","r":"Johto","l":[["Cyndaquil",155],["Quilava",156],["Typhlosion",157]]},{"b":"Ampharos","r":"Johto","l":[["Mareep",179],["Flaaffy",180],["Ampharos",181]]},{"b":"Espeon","r":"Johto","l":[["Eevee",133],["Espeon",196]]},{"b":"Scizor","r":"Johto","l":[["Scyther",123],["Scizor",212]]},{"b":"Kingdra","r":"Johto","l":[["Horsea",116],["Seadra",117],["Kingdra",230]]},{"b":"Tyranitar","r":"Johto","l":[["Larvitar",246],["Pupitar",247],["Tyranitar",248]]},{"b":"Umbreon","r":"Johto","l":[["Eevee",133],["Umbreon",197]]},{"b":"Ho-oh","r":"Johto","l":[["Ho-oh",250]]},{"b":"Lugia","r":"Johto","l":[["Lugia",249]]},{"b":"Entei","r":"Johto","l":[["Entei",244]]},{"b":"Suicune","r":"Johto","l":[["Suicune",245]]},{"b":"Raikou","r":"Johto","l":[["Raikou",243]]},{"b":"Celebi","r":"Johto","l":[["Celebi",251]]},{"b":"Heracross","r":"Johto","l":[["Heracross",214]]},{"b":"Blaziken","r":"Hoenn","l":[["Torchic",255],["Combusken",256],["Blaziken",257]]},{"b":"Gardevoir","r":"Hoenn","l":[["Ralts",280],["Kirlia",281],["Gardevoir",282]]},{"b":"Flygon","r":"Hoenn","l":[["Trapinch",328],["Vibrava",329],["Flygon",330]]},{"b":"Milotic","r":"Hoenn","l":[["Feebas",349],["Milotic",350]]},{"b":"Glalie","r":"Hoenn","l":[["Snorunt",361],["Glalie",362]]},{"b":"Metagross","r":"Hoenn","l":[["Beldum",374],["Metang",375],["Metagross",376]]},{"b":"Aggron","r":"Hoenn","l":[["Aron",304],["Lairon",305],["Aggron",306]]},{"b":"Salamence","r":"Hoenn","l":[["Bagon",371],["Shelgon",372],["Salamence",373]]},{"b":"Rayquaza","r":"Hoenn","l":[["Rayquaza",384]]},{"b":"Latias","r":"Hoenn","l":[["Latias",380]]},{"b":"Deoxys","r":"Hoenn","l":[["Deoxys",386]]},{"b":"Groudon","r":"Hoenn","l":[["Groudon",383]]},{"b":"Kyogre","r":"Hoenn","l":[["Kyogre",382]]},{"b":"Palkia","r":"Hoenn","l":[["Palkia",484]]},{"b":"Tornadus","r":"Hoenn","l":[["Tornadus",641]]},{"b":"Thundurus","r":"Hoenn","l":[["Thundurus",642]]},{"b":"Landorus","r":"Hoenn","l":[["Landorus",645]]},{"b":"Dialga","r":"Hoenn","l":[["Dialga",483]]},{"b":"Jirachi","r":"Hoenn","l":[["Jirachi",385]]},{"b":"Infernape","r":"Sinnoh","l":[["Chimchar",390],["Monferno",391],["Infernape",392]]},{"b":"Luxray","r":"Sinnoh","l":[["Shinx",403],["Luxio",404],["Luxray",405]]},{"b":"Leafeon","r":"Sinnoh","l":[["Eevee",133],["Leafeon",470]]},{"b":"Gliscor","r":"Sinnoh","l":[["Gligar",207],["Gliscor",472]]},{"b":"Garchomp","r":"Sinnoh","l":[["Gible",443],["Gabite",444],["Garchomp",445]]},{"b":"Lucario","r":"Sinnoh","l":[["Riolu",447],["Lucario",448]]},{"b":"Gallade","r":"Sinnoh","l":[["Ralts",280],["Kirlia",281],["Gallade",475]]},{"b":"Mamoswine","r":"Sinnoh","l":[["Swinub",220],["Piloswine",221],["Mamoswine",473]]},{"b":"Giratina","r":"Sinnoh","l":[["Giratina",487]]},{"b":"Froslass","r":"Sinnoh","l":[["Snorunt",361],["Froslass",478]]},{"b":"Emboar","r":"Unova","l":[["Tepig",498],["Pignite",499],["Emboar",500]]},{"b":"Simipour","r":"Unova","l":[["Panpour",515],["Simipour",516]]},{"b":"Krookodile","r":"Unova","l":[["Sandile",551],["Krokorok",552],["Krookodile",553]]},{"b":"Reuniclus","r":"Unova","l":[["Solosis",577],["Duosion",578],["Reuniclus",579]]},{"b":"Volcarona","r":"Unova","l":[["Larvesta",636],["Volcarona",637]]},{"b":"Haxorus","r":"Unova","l":[["Axew",610],["Fraxure",611],["Haxorus",612]]},{"b":"Zoroark","r":"Unova","l":[["Zorua",570],["Zoroark",571]]},{"b":"Golurk","r":"Unova","l":[["Golett",622],["Golurk",623]]},{"b":"Hydreigon","r":"Unova","l":[["Deino",633],["Zweilous",634],["Hydreigon",635]]},{"b":"Reshiram","r":"Unova","l":[["Reshiram",643]]},{"b":"Kyurem","r":"Unova","l":[["Kyurem",646]]},{"b":"Victini","r":"Unova","l":[["Victini",494]]},{"b":"Cobalion","r":"Unova","l":[["Cobalion",638]]},{"b":"Terrakion","r":"Unova","l":[["Terrakion",639]]},{"b":"Virizion","r":"Unova","l":[["Virizion",640]]},{"b":"Keldeo","r":"Unova","l":[["Keldeo",647]]},{"b":"Meloetta","r":"Unova","l":[["Meloetta",648]]},{"b":"Genesect","r":"Unova","l":[["Genesect",649]]},{"b":"Greninja","r":"Kalos","l":[["Froakie",656],["Frogadier",657],["Greninja",658]]},{"b":"Heliolisk","r":"Kalos","l":[["Helioptile",694],["Heliolisk",695]]},{"b":"Sylveon","r":"Kalos","l":[["Eevee",133],["Sylveon",700]]},{"b":"Goodra","r":"Kalos","l":[["Goomy",704],["Sliggoo",705],["Goodra",706]]},{"b":"Trevenant","r":"Kalos","l":[["Phantump",708],["Trevenant",709]]},{"b":"Noivern","r":"Kalos","l":[["Noibat",714],["Noivern",715]]},{"b":"Yveltal","r":"Kalos","l":[["Yveltal",717]]},{"b":"Zygarde","r":"Kalos","l":[["Zygarde",718]]},{"b":"Hoopa","r":"Kalos","l":[["Hoopa",720]]},{"b":"Diancie","r":"Kalos","l":[["Diancie",719]]},{"b":"Incineroar","r":"Alola","l":[["Litten",725],["Torracat",726],["Incineroar",727]]},{"b":"Vikavolt","r":"Alola","l":[["Grubbin",736],["Charjabug",737],["Vikavolt",738]]},{"b":"Lycanroc","r":"Alola","l":[["Rockruff",744],["Lycanroc",745]]},{"b":"Wishiwashi","r":"Alola","l":[["Wishiwashi",746]]},{"b":"Lurantis","r":"Alola","l":[["Fomantis",753],["Lurantis",754]]},{"b":"Mimikyu","r":"Alola","l":[["Mimikyu",778]]},{"b":"Salazzle","r":"Alola","l":[["Salandit",757],["Salazzle",758]]},{"b":"Solgaleo","r":"Alola","l":[["Cosmog",789],["Cosmoem",790],["Solgaleo",791]]},{"b":"Marshadow","r":"Alola","l":[["Marshadow",802]]},{"b":"Tapu Koko","r":"Alola","l":[["Tapu Koko",785]]},{"b":"Tapu Lele","r":"Alola","l":[["Tapu Lele",786]]},{"b":"Tapu Bulu","r":"Alola","l":[["Tapu Bulu",787]]},{"b":"Tapu Fini","r":"Alola","l":[["Tapu Fini",788]]},{"b":"Silvally","r":"Alola","l":[["Type-Null",772],["Silvally",773]]},{"b":"Kommo-o","r":"Alola","l":[["Jangmo-o",782],["Hakamo-o",783],["Kommo-o",784]]},{"b":"Nihilego","r":"Alola","l":[["Nihilego",793]]},{"b":"Buzzwole","r":"Alola","l":[["Buzzwole",794]]},{"b":"Xurkitree","r":"Alola","l":[["Xurkitree",796]]},{"b":"Kartana","r":"Alola","l":[["Kartana",798]]},{"b":"Guzzlord","r":"Alola","l":[["Guzzlord",799]]},{"b":"Gyarados","r":"Light Platinum","l":[["Magikarp",129],["Gyarados",130]]},{"b":"Absol","r":"Roria","l":[["Absol",359]]},{"b":"Chandelure","r":"Dark Rising","l":[["Litwick",607],["Lampent",608],["Chandelure",609]]},{"b":"Togekiss","r":"Unbound","l":[["Togepi",175],["Togetic",176],["Togekiss",468]]},{"b":"Inteleon","r":"Galar","l":[["Sobble",816],["Drizzile",817],["Inteleon",818]]},{"b":"Corviknight","r":"Galar","l":[["Rookidee",821],["Corvisquire",822],["Corviknight",823]]},{"b":"Toxtricity","r":"Galar","l":[["Toxel",848],["Toxtricity",849]]},{"b":"Coalossal","r":"Galar","l":[["Rolycoly",837],["Carkol",838],["Coalossal",839]]},{"b":"Grimmsnarl","r":"Galar","l":[["Impidimp",859],["Morgrem",860],["Grimmsnarl",861]]},{"b":"Dragapult","r":"Galar","l":[["Dreepy",885],["Drakloak",886],["Dragapult",887]]},{"b":"Duraludon","r":"Galar","l":[["Duraludon",884]]},{"b":"Obstagoon","r":"Galar","l":[["Zigzagoon",263],["Linoone",264],["Obstagoon",862]]},{"b":"Hatterene","r":"Galar","l":[["Hatenna",856],["Hattrem",857],["Hatterene",858]]},{"b":"Eternatus","r":"Galar","l":[["Eternatus",890]]},{"b":"Zacian","r":"Galar","l":[["Zacian",888]]},{"b":"Zamazenta","r":"Galar","l":[["Zamazenta",889]]},{"b":"Galarian Articuno","r":"Galar","l":[["Galarian Articuno",10169]]},{"b":"Galarian Zapdos","r":"Galar","l":[["Galarian Zapdos",10170]]},{"b":"Galarian Moltres","r":"Galar","l":[["Galarian Moltres",10171]]},{"b":"Urshifu","r":"Galar","l":[["Kubfu",891],["Urshifu",892]]},
{"b":"Blastoise","r":"Yellow","l":[["Squirtle",7],["Wartortle",8],["Blastoise",9]]},
{"b":"Machamp","r":"LeafGreen","l":[["Machop",66],["Machoke",67],["Machamp",68]]},
{"b":"Exeggutor","r":"LeafGreen","l":[["Exeggcute",102],["Exeggutor",103]]},
{"b":"Flareon","r":"LeafGreen","l":[["Eevee",133],["Flareon",136]]},
{"b":"Manectric","r":"Omega Ruby","l":[["Electrike",309],["Manectric",310]]},
{"b":"Banette","r":"Omega Ruby","l":[["Shuppet",353],["Banette",354]]},
{"b":"Sharpedo","r":"Omega Ruby","l":[["Carvanha",318],["Sharpedo",319]]},
{"b":"Swampert","r":"Omega Ruby","l":[["Mudkip",258],["Marshtomp",259],["Swampert",260]]},
{"b":"Sceptile","r":"Omega Ruby","l":[["Treecko",252],["Grovyle",253],["Sceptile",254]]},
{"b":"Samurott","r":"Black 2","l":[["Oshawott",501],["Dewott",502],["Samurott",503]]},
{"b":"Simisear","r":"Black 2","l":[["Pansear",513],["Simisear",514]]},
{"b":"Magnezone","r":"Black 2","l":[["Magnemite",81],["Magneton",82],["Magnezone",462]]},
{"b":"Roserade","r":"Black 2","l":[["Budew",406],["Roselia",315],["Roserade",407]]},
{"b":"Delphox","r":"Kalos X","l":[["Fennekin",653],["Braixen",654],["Delphox",655]]},
{"b":"Aegislash","r":"Kalos X","l":[["Honedge",679],["Doublade",680],["Aegislash",681]]},
{"b":"Abomasnow","r":"Kalos X","l":[["Snover",459],["Abomasnow",460]]},
{"b":"Hawlucha","r":"Kalos X","l":[["Hawlucha",701]]}];
const DEX_SPECIES=new Set();POKEDEX.forEach(f=>f.l.forEach(p=>DEX_SPECIES.add(p[1])));
// espécie de qualquer estágio -> espécie final capturada da linha (para herdar shiny/raridade ao longo da evolução)
const STAGE_BASE={};POKEDEX.forEach(f=>f.l.forEach(p=>{if(STAGE_BASE[p[0]]==null)STAGE_BASE[p[0]]=f.b;}));
// espécie de qualquer estágio -> região onde foi capturada pela 1ª vez (estágios compartilhados por várias linhas, ex: Eevee, Ralts, usam a região cronologicamente mais antiga)
const STAGE_REGION={};POKEDEX.forEach(f=>f.l.forEach(p=>{const cur=STAGE_REGION[p[0]];
  if(cur==null||REGION_ORDER.indexOf(f.r)<REGION_ORDER.indexOf(cur))STAGE_REGION[p[0]]=f.r;}));
// número real da Pokédex nacional por espécie (distinto do id de sprite em DEX, ex: Pikachu boné=10094 mas dex nacional=25)
const DEXNUM={};POKEDEX.forEach(f=>f.l.forEach(p=>{if(DEXNUM[p[0]]==null)DEXNUM[p[0]]=p[1];}));
// região de origem da espécie (onde ela nasceu nos jogos), baseada no nº da Pokédex nacional — não confundir com a região onde Pedro capturou
const ORIGIN_OVERRIDE={"Galarian Articuno":"Galar","Galarian Zapdos":"Galar","Galarian Moltres":"Galar"};
const ORIGIN_RANGES=[[1,151,"Kanto"],[152,251,"Johto"],[252,386,"Hoenn"],[387,493,"Sinnoh"],[494,649,"Unova"],[650,721,"Kalos"],[722,809,"Alola"],[810,905,"Galar"]];
function originRegion(name){
  if(ORIGIN_OVERRIDE[name])return ORIGIN_OVERRIDE[name];
  const id=DEXNUM[name]!=null?DEXNUM[name]:DEXNUM[STAGE_BASE[name]];
  if(id==null)return "—";
  const rg=ORIGIN_RANGES.find(x=>id>=x[0]&&id<=x[1]);
  return rg?rg[2]:"—";
}
// tipos de TODAS as espécies das linhas evolutivas (para o filtro de tipo na Pokédex)
const SPECIES_TYPES={Charmander:["fire"],Charmeleon:["fire"],Charizard:["fire","flying"],Pichu:["electric"],Pikachu:["electric"],Gastly:["ghost","poison"],Haunter:["ghost","poison"],Gengar:["ghost","poison"],Munchlax:["normal"],Snorlax:["normal"],Lapras:["water","ice"],Dratini:["dragon"],Dragonair:["dragon"],Dragonite:["dragon","flying"],Abra:["psychic"],Kadabra:["psychic"],Alakazam:["psychic"],Growlithe:["fire"],Arcanine:["fire"],Mewtwo:["psychic"],Moltres:["fire","flying"],Zapdos:["electric","flying"],Articuno:["ice","flying"],Mew:["psychic"],Cyndaquil:["fire"],Quilava:["fire"],Typhlosion:["fire"],Mareep:["electric"],Flaaffy:["electric"],Ampharos:["electric"],Eevee:["normal"],Espeon:["psychic"],Scyther:["bug","flying"],Scizor:["bug","steel"],Horsea:["water"],Seadra:["water"],Kingdra:["water","dragon"],Larvitar:["rock","ground"],Pupitar:["rock","ground"],Tyranitar:["rock","dark"],Umbreon:["dark"],"Ho-oh":["fire","flying"],Lugia:["psychic","flying"],Entei:["fire"],Suicune:["water"],Raikou:["electric"],Celebi:["psychic","grass"],Torchic:["fire"],Combusken:["fire","fighting"],Blaziken:["fire","fighting"],Ralts:["psychic","fairy"],Kirlia:["psychic","fairy"],Gardevoir:["psychic","fairy"],Trapinch:["ground"],Vibrava:["ground","dragon"],Flygon:["ground","dragon"],Feebas:["water"],Milotic:["water"],Snorunt:["ice"],Glalie:["ice"],Beldum:["steel","psychic"],Metang:["steel","psychic"],Metagross:["steel","psychic"],Aron:["steel","rock"],Lairon:["steel","rock"],Aggron:["steel","rock"],Bagon:["dragon"],Shelgon:["dragon"],Salamence:["dragon","flying"],Rayquaza:["dragon","flying"],Latias:["dragon","psychic"],Deoxys:["psychic"],Groudon:["ground"],Kyogre:["water"],Palkia:["water","dragon"],Tornadus:["flying"],Thundurus:["electric","flying"],Landorus:["ground","flying"],Dialga:["steel","dragon"],Jirachi:["steel","psychic"],Chimchar:["fire"],Monferno:["fire","fighting"],Infernape:["fire","fighting"],Shinx:["electric"],Luxio:["electric"],Luxray:["electric"],Leafeon:["grass"],Gligar:["ground","flying"],Gliscor:["ground","flying"],Gible:["dragon","ground"],Gabite:["dragon","ground"],Garchomp:["dragon","ground"],Riolu:["fighting"],Lucario:["fighting","steel"],Gallade:["psychic","fighting"],Swinub:["ice","ground"],Piloswine:["ice","ground"],Mamoswine:["ice","ground"],Giratina:["ghost","dragon"],Tepig:["fire"],Pignite:["fire","fighting"],Emboar:["fire","fighting"],Panpour:["water"],Simipour:["water"],Sandile:["ground","dark"],Krokorok:["ground","dark"],Krookodile:["ground","dark"],Solosis:["psychic"],Duosion:["psychic"],Reuniclus:["psychic"],Larvesta:["bug","fire"],Volcarona:["bug","fire"],Axew:["dragon"],Fraxure:["dragon"],Haxorus:["dragon"],Zorua:["dark"],Zoroark:["dark"],Golett:["ground","ghost"],Golurk:["ground","ghost"],Deino:["dark","dragon"],Zweilous:["dark","dragon"],Hydreigon:["dark","dragon"],Reshiram:["dragon","fire"],Kyurem:["dragon","ice"],Victini:["psychic","fire"],Cobalion:["steel","fighting"],Terrakion:["rock","fighting"],Virizion:["grass","fighting"],Keldeo:["water","fighting"],Meloetta:["normal","psychic"],Genesect:["bug","steel"],Froakie:["water"],Frogadier:["water"],Greninja:["water","dark"],Helioptile:["electric","normal"],Heliolisk:["electric","normal"],Sylveon:["fairy"],Goomy:["dragon"],Sliggoo:["dragon"],Goodra:["dragon"],Phantump:["ghost","grass"],Trevenant:["ghost","grass"],Noibat:["flying","dragon"],Noivern:["flying","dragon"],Yveltal:["dark","flying"],Zygarde:["dragon","ground"],Hoopa:["psychic","ghost"],Diancie:["rock","fairy"],Litten:["fire"],Torracat:["fire"],Incineroar:["fire","dark"],Grubbin:["bug"],Charjabug:["bug","electric"],Vikavolt:["bug","electric"],Rockruff:["rock"],Lycanroc:["rock"],Wishiwashi:["water"],Fomantis:["grass"],Lurantis:["grass"],Mimikyu:["ghost","fairy"],Salandit:["poison","fire"],Salazzle:["poison","fire"],Cosmog:["psychic"],Cosmoem:["psychic"],Solgaleo:["psychic","steel"],Marshadow:["fighting","ghost"],"Tapu Koko":["electric","fairy"],"Tapu Lele":["psychic","fairy"],"Tapu Bulu":["grass","fairy"],"Tapu Fini":["water","fairy"],"Type-Null":["normal"],Silvally:["normal"],"Jangmo-o":["dragon"],"Hakamo-o":["dragon","fighting"],"Kommo-o":["dragon","fighting"],Nihilego:["rock","poison"],Buzzwole:["bug","fighting"],Xurkitree:["electric"],Kartana:["grass","steel"],Guzzlord:["dark","dragon"],Magikarp:["water"],Gyarados:["water","flying"],Absol:["dark"],Litwick:["ghost","fire"],Lampent:["ghost","fire"],Chandelure:["ghost","fire"],Togepi:["fairy"],Togetic:["fairy","flying"],Togekiss:["fairy","flying"],Sobble:["water"],Drizzile:["water"],Inteleon:["water"],Rookidee:["flying"],Corvisquire:["flying"],Corviknight:["flying","steel"],Toxel:["electric","poison"],Toxtricity:["electric","poison"],Rolycoly:["rock"],Carkol:["rock","fire"],Coalossal:["rock","fire"],Impidimp:["dark","fairy"],Morgrem:["dark","fairy"],Grimmsnarl:["dark","fairy"],Dreepy:["dragon","ghost"],Drakloak:["dragon","ghost"],Dragapult:["dragon","ghost"],Duraludon:["steel","dragon"],Zigzagoon:["normal"],Linoone:["normal"],Obstagoon:["dark","normal"],Hatenna:["psychic"],Hattrem:["psychic"],Hatterene:["psychic","fairy"],Eternatus:["poison","dragon"],Zacian:["fairy"],Zamazenta:["fighting"],"Galarian Articuno":["psychic","flying"],"Galarian Zapdos":["fighting","flying"],"Galarian Moltres":["dark","flying"],Kubfu:["fighting"],Urshifu:["fighting","dark"],Squirtle:["water"],Wartortle:["water"],Blastoise:["water"],Machop:["fighting"],Machoke:["fighting"],Machamp:["fighting"],Exeggcute:["grass","psychic"],Exeggutor:["grass","psychic"],Flareon:["fire"],Electrike:["electric"],Manectric:["electric"],Shuppet:["ghost"],Banette:["ghost"],Carvanha:["water","dark"],Sharpedo:["water","dark"],Oshawott:["water"],Dewott:["water"],Samurott:["water"],Pansear:["fire"],Simisear:["fire"],Magnemite:["electric","steel"],Magneton:["electric","steel"],Magnezone:["electric","steel"],Budew:["grass","poison"],Roselia:["grass","poison"],Roserade:["grass","poison"],Fennekin:["fire"],Braixen:["fire"],Delphox:["fire","psychic"],Honedge:["steel","ghost"],Doublade:["steel","ghost"],Aegislash:["steel","ghost"],Snover:["grass","ice"],Abomasnow:["grass","ice"],Hawlucha:["fighting","flying"],Kabuto:["rock","water"],Kabutops:["rock","water"],Hitmonlee:["fighting"],Jolteon:["electric"],Aerodactyl:["rock","flying"],Rhyhorn:["ground","rock"],Rhydon:["ground","rock"],Geodude:["rock","ground"],Graveler:["rock","ground"],Golem:["rock","ground"],Tauros:["normal"],Bulbasaur:["grass","poison"],Ivysaur:["grass","poison"],Venusaur:["grass","poison"],Caterpie:["bug"],Metapod:["bug"],Butterfree:["bug","flying"]};
// lista achatada de TODAS as espécies (uma por Nº), ordenada pelo número da Pokédex
const DEX_ALL=[];{const _s=new Set();POKEDEX.forEach(f=>f.l.forEach(p=>{if(!_s.has(p[1])){_s.add(p[1]);DEX_ALL.push({name:p[0],id:p[1],region:f.r});}}));DEX_ALL.sort((a,b)=>a.id-b.id);}
const SPRITE_ID={};DEX_ALL.forEach(m=>{if(SPRITE_ID[m.name]==null)SPRITE_ID[m.name]=m.id;});
function typesOf(n){return TYPES[n]||SPECIES_TYPES[n]||TYPES[baseKey(n)]||SPECIES_TYPES[baseKey(n)]||[];}
function monSprite(n,sh){const id=DEX[n]||SPRITE_ID[n];return id?ART+(sh?"shiny/":"")+id+".png":"";}
/* ===== CONTADORES AUTOMÁTICOS — derivados dos dados acima ===== */
const COUNTS={
  dex:DEX_SPECIES.size,
  titulos:TITLE_LIST.length,
  etapas:TITLE_LIST.length,
  regioes:new Set(REGION_ORDER.map(r=>REGIONS[r].region||r)).size,
  megas:MEGAS.length,
  shiny:SHINY.size, lendarios:LEGEND.size, miticos:MYTH.size, ha:HA.size, ub:UB.size,
  gmax:GMAX.length, zmove:ZMOVES.length, formas:FORMS.length+Object.values(MULTI_FORMS).reduce((s,a)=>s+a.length,0),
  kalosMegas:MEGAS.filter(m=>m[1]==="Kalos"||m[1]==="Kalos X").length,
  orMegas:MEGAS.filter(m=>m[1]==="Omega Ruby").length
};
COUNTS.raros=COUNTS.shiny+COUNTS.lendarios+COUNTS.miticos+COUNTS.ub;
function applyCounts(){const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set("cnEtapas",COUNTS.etapas);set("cnTitulos",COUNTS.titulos);set("cnMegasSub",COUNTS.megas);
  set("cnMegasStat",COUNTS.megas);set("cnKalosMegas",COUNTS.kalosMegas);set("cnORMegas",COUNTS.orMegas);set("cnGmax",COUNTS.gmax);
  set("cnGmaxSub",COUNTS.gmax);set("cnGmaxSub2",COUNTS.gmax);set("cnGmaxInline",COUNTS.gmax);
  set("cnZmove",COUNTS.zmove);set("cnZmoveSub2",COUNTS.zmove);set("cnZmovesSub",COUNTS.zmove);
  set("cnFormas",COUNTS.formas);set("cnFormasSub",COUNTS.formas);set("cnFormasSub2",COUNTS.formas);
  set("cnDex",COUNTS.dex);}

const ACH=[
 {t:"Primeiro Parceiro",mon:"Charizard",d:"O Pokémon que iniciou toda a lenda de Pedro.",star:"🔥"},
 {t:"Parceiro Clássico",mon:"Pikachu",d:"O icônico Pikachu de boné, companheiro eterno.",star:"⚡"},
 {t:"Primeiro Lendário",mon:"Mewtwo",d:"O primeiro lendário capturado, ainda em Kanto.",star:"🌀"},
 {t:"Primeiro Mítico",mon:"Mew",d:"O primeiro Pokémon mítico da coleção, capturado ainda em Kanto.",star:"🛸"},
 {t:"Primeiro Shiny",mon:"Metagross",d:"Metagross Shiny, a primeira raridade brilhante.",star:"✨",shiny:true},
 {t:"Primeira Mega",mon:"Charizard",d:"Mega Charizard X, marco da era das Mega Evoluções.",star:"🔺"},
 {t:"Maior Número de Títulos",mon:"Blaziken",d:`${TITLES.Blaziken} títulos — o Pokémon mais vitorioso da jornada.`,star:"🏆"},
 {t:"Golpe Exclusivo",mon:"Marshadow",d:"Soul-Stealing 7-Star Strike, o Z-Move exclusivo de Marshadow.",star:"💥"}
];

/* ================= HELPERS ================= */
function img(name,shiny){const id=DEX[name]; if(!id) return "";return ART+(shiny?"shiny/":"")+id+".png";}
function isShinyName(n){return SHINY.has(cleanName(n));}
function cleanName(n){return n.replace(/^Ash[- ]/,"").replace(/^Alolan /,"Alolan ").replace(" HA","").replace(" shiny","").replace(" Shiny","").replace(/^Pikachu$/,"Pikachu");}
function baseKey(n){ // for metadata sets that use base species
  let b=n.replace(/^Ash[- ]/,"").replace(/ HA$/,"").replace(/ shiny$/i,"").replace(/^Mega /,"").trim();
  if(b==="Ash Greninja"||b==="Greninja") b="Greninja";
  return b;
}
// medalha por time (ouro=Final, prata=Reserva de Luxo, bronze=Reserva)
const RESERVE_SET=new Set(RESERVE.map(r=>baseKey(r.n)));
const TEAMC_SET=new Set(TEAM_C.map(n=>baseKey(n)));
function teamMedal(name){const b=baseKey(name);
  const m=FINAL.has(b)?["👑","Time Final"]:RESERVE_SET.has(b)?["🥈","Time Reserva de Luxo"]:TEAMC_SET.has(b)?["🥉","Time Reserva"]:null;
  return m?`<span class="medal-btn" title="${m[1]}">${m[0]}</span>`:"";}
function badgesFor(name,opts){
  opts=opts||{};
  const b=baseKey(name); let h="";
  if(!opts.noMedal) h+=teamMedal(name);
  if(!opts.noMega&&(HASMEGA.has(b)||/^Mega /.test(name))) h+='<span class="badge b-mega">Mega</span>';
  if(SHINY.has(STAGE_BASE[name]||b)) h+='<span class="badge b-shiny">✦ Shiny</span>';
  if(LEGEND.has(b)) h+='<span class="badge b-legend">Lendário</span>';
  if(MYTH.has(b)) h+='<span class="badge b-myth">Mítico</span>';
  if(UB.has(b)) h+='<span class="badge b-ub">Ultra Beast</span>';
  if(!opts.noHA&&HA.has(b)) h+='<span class="badge b-ha">HA</span>';
  return h;
}
function cardClass(name){const b=baseKey(name);const sb=STAGE_BASE[name]||b;let c="";if(FINAL.has(b))c+=" is-final";else if(MYTH.has(b))c+=" is-myth";else if(SHINY.has(sb))c+=" is-shiny";else if(LEGEND.has(b))c+=" is-legend";return c;}
// badges de status (canto sup. esquerdo do card): apenas a medalha do time
function mvpBadge(name){const c=MVP_COUNT[baseKey(name)]||0;return c>=1?`<span class="pk-mvp-pill">⭐${c}</span>`:"";}
function statusBadges(name){return teamMedal(name);}
// badges de raridade — mesmo estilo/fonte dos tipos (Shiny vira brilho no card; HA sem texto)
function rarityBadges(name){const b=baseKey(name);const out=[];
  if(LEGEND.has(b)) out.push(["Lendário","linear-gradient(90deg,#ffcb3d,#ff7b00)","#241800"]);
  if(MYTH.has(b)) out.push(["Mítico","linear-gradient(90deg,#a45cff,#6a2cff)","#fff"]);
  if(UB.has(b)) out.push(["Ultra Beast","linear-gradient(90deg,#28e0d8,#7a4dff)","#04121a"]);
  return out.map(([t,bg,c])=>`<span class="type-badge" style="background:${bg};color:${c};text-shadow:none">${t}</span>`).join("");}
function renderTypeList(list){return (list||[]).map(tp=>{const m=TYPE_META[tp];return m?`<span class="type-badge" style="background:${m[1]}">${m[2]} ${m[0]}</span>`:"";}).join("");}
function typeBadges(name){return renderTypeList(typesOf(name));}
function modalMorph(base,baseShiny,form){
  const im=document.getElementById("mHeroImg");if(!im)return;
  const target=(im.dataset.form===form)?"base":form;
  applyModalForm(base,baseShiny,target);
}
function applyModalForm(base,baseShiny,form){
  const im=document.getElementById("mHeroImg"),tp=document.getElementById("mTypes"),nm=document.getElementById("mHeroName"),zc=document.getElementById("mZCrystal");if(!im)return;
  im.dataset.form=form;im.classList.remove("mega-flash");
  // limpa qualquer resíduo deixado pelo hover (mega-active/megaBack), pra clique nos botões sempre valer por cima
  delete im.dataset.megaBack;const host=im.closest(".m-hero");if(host){host.classList.remove("mega-active");delete host.dataset.morph;}
  if(zc){if(form==="zmove"){zc.style.display="";zc.classList.remove("zc-pop");void zc.offsetWidth;zc.classList.add("zc-pop");}else{zc.style.display="none";zc.classList.remove("zc-pop");}}
  if(form==="mega"){const i=MEGA_INFO[base];im.src=ART+(i.shiny?"shiny/":"")+i.id+".png";tp.innerHTML=renderTypeList(MEGA_TYPES[base]||TYPES[base]);void im.offsetWidth;im.classList.add("mega-flash");if(nm)nm.textContent=i.name.replace(/ Shiny$/,"");}
  else if(form==="gmax"){const i=GMAX_INFO[base];im.src=ART+i.id+".png";tp.innerHTML=typeBadges(base);void im.offsetWidth;im.classList.add("mega-flash");if(nm)nm.textContent=i.name;}
  else if(form==="form"){const i=FORM_INFO[base];im.src=formSrc(i,baseShiny);tp.innerHTML=renderTypeList(i.types);void im.offsetWidth;im.classList.add("mega-flash");if(nm)nm.textContent=i.name;}
  else{im.src=img(base,baseShiny);tp.innerHTML=typeBadges(base);if(nm)nm.textContent=nm.dataset.name;}
  const mb=document.getElementById("megaBtn"),gb=document.getElementById("gmaxBtn"),fb=document.getElementById("formBtn"),zb=document.getElementById("zmoveBtn");
  if(mb)mb.classList.toggle("active",form==="mega");
  if(gb)gb.classList.toggle("active",form==="gmax");
  if(fb)fb.classList.toggle("active",form==="form");
  if(zb)zb.classList.toggle("active",form==="zmove");
}
function setHoverForm(base,form){HOVER_SEL[base]=form;
  document.querySelectorAll("#modalBox .hs-opt").forEach(b=>b.classList.toggle("on",b.dataset.k===form));
  const im=document.getElementById("mHeroImg"),zc=document.getElementById("mZCrystal");
  if(zc){if(form==="zmove"){zc.style.display="";zc.classList.remove("zc-pop");void zc.offsetWidth;zc.classList.add("zc-pop");}else{zc.style.display="none";zc.classList.remove("zc-pop");}}
  if(im&&form==="zmove"&&im.dataset.megaBack){
    im.src=im.dataset.megaBack;delete im.dataset.megaBack;
    const host=im.closest(".m-hero");if(host){host.classList.remove("mega-active");delete host.dataset.morph;}
  }}

// build master pokemon list (unique, first region)
const MONS=[];const seen=new Set();
REGION_ORDER.forEach(r=>{(CAPTURES[r]||[]).forEach(n=>{if(!seen.has(n)){seen.add(n);MONS.push({name:n,region:r});}});});

/* ===== FORM HOVER: passar o mouse no card mostra a transformação (Mega / Ash) ===== */
const MEGA_SWAP={}; // url do sprite base -> {u:url da forma, label:selo, base}
const GMAX_SWAP={}; // url do sprite base -> forma gigantamax (alternativa de hover)
const HOVER_SEL={}; // base -> mecânica ativa no hover: "mega"|"gmax"|"form"|"zmove"
// prioridade: Forma alternativa > Mega > Gigantamax > Z-Move
function morphKeys(base){const k=[];if(FORM_INFO[base])k.push("form");if(MEGA_INFO[base])k.push("mega");if(GMAX_INFO[base])k.push("gmax");if(ZMOVE_CRYSTAL[base])k.push("zmove");return k;}
// mecânica padrão do hover = a de maior prioridade disponível
function hoverSel(base){return HOVER_SEL[base]||morphKeys(base)[0]||"mega";}
function morphLabel(base,k){return k==="mega"?"⚡ Mega":k==="gmax"?"Gigantamax":k==="form"?(FORM_INFO[base]?FORM_INFO[base].label:"Forma"):k==="zmove"?"Z-Move":k;}
function addMorph(base,id,label){if(!id||!DEX[base])return;
  MEGA_SWAP[img(base,false)]={u:ART+id+".png",label,base};
  MEGA_SWAP[img(base,true)]={u:ART+"shiny/"+id+".png",label,base};}
// versão que aceita uma URL completa (para formas fora do PokeAPI, ex: Zenith Marshadow)
function addMorphURL(base,url,label){if(!url||!DEX[base])return;
  MEGA_SWAP[img(base,false)]={u:url,label,base};
  MEGA_SWAP[img(base,true)]={u:url,label,base};}
MEGAS.forEach(m=>addMorph(m[0],m[3],"⚡ MEGA"));
addMorph("Greninja",10117,"🌀 ASH");
// Zenith Marshadow (forma exclusiva de Radical Red):
addMorphURL("Marshadow","https://static.wikia.nocookie.net/international-pokedex/images/d/d6/Marshadow_%28Zenith_Marshadow%29.png/revision/latest/scale-to-width-down/488?cb=20190611181246","✦ ZENITH");
// Gigantamax no hover: alternativa para quem tem mega + gmax, e forma padrão para quem só tem gmax
GMAX.forEach(g=>{if(!DEX[g[0]])return;
  GMAX_SWAP[img(g[0],false)]={u:ART+g[2]+".png",label:"⚡ GMAX",base:g[0]};
  GMAX_SWAP[img(g[0],true)]={u:ART+"shiny/"+g[2]+".png",label:"⚡ GMAX",base:g[0]};});
const MEGA_SEL=".pk-card,.team-mon,.final-card,.orb,.hof,.hof-sig,.medal,.m-hero,.tl-sig,.pf-mon";
function megaHost(el){if(el.closest(".mega-card"))return null; // Mecânicas: hover simples, sem transformação
  const c=el.closest(MEGA_SEL);if(c){const im=[...c.querySelectorAll("img")].find(i=>!i.closest(".pk-status")&&!i.classList.contains("z-hover"))||c.querySelector("img");return im?[c,im]:null;}
  return el.tagName==="IMG"&&!el.closest(".pk-status")&&!el.classList.contains("z-hover")?[el,el]:null;}
function morphFullName(base,sel){
  if(sel==="mega")return MEGA_INFO[base]?MEGA_INFO[base].name.replace(/ Shiny$/,""):null;
  if(sel==="gmax")return GMAX_INFO[base]?GMAX_INFO[base].name:null;
  if(sel==="form")return FORM_INFO[base]?FORM_INFO[base].name:null;
  return null;
}
document.addEventListener("mouseover",e=>{if(e.target.closest("[data-nomega]"))return;const h=megaHost(e.target);if(!h)return;
  const[host,im]=h;const src=im.getAttribute("src");const noGmax=!!e.target.closest("[data-nogmax]");
  const base=(MEGA_SWAP[src]||GMAX_SWAP[src]||FORM_SWAP[src]||{}).base;
  if(!base)return; // sem morph de sprite (Z-Move puro é mostrado pelo cristal via CSS)
  const sel=hoverSel(base);let mg=null;
  if(sel==="mega"&&MEGA_SWAP[src])mg=MEGA_SWAP[src];
  else if(sel==="gmax"&&!noGmax&&GMAX_SWAP[src])mg=GMAX_SWAP[src];
  else if(sel==="form"&&FORM_SWAP[src])mg=FORM_SWAP[src];
  // sel==="zmove": não troca o sprite; só o cristal aparece no hover (CSS)
  if(mg&&!host.classList.contains("mega-active")){
    im.dataset.megaBack=src;im.src=mg.u;host.dataset.morph=mg.label;host.classList.add("mega-active");
    const nameEl=host.querySelector(".morph-name");const fullName=morphFullName(base,sel);
    if(nameEl&&fullName){nameEl.dataset.nameBack=nameEl.textContent;nameEl.textContent=fullName;}
  }});
document.addEventListener("mouseout",e=>{const h=megaHost(e.target);if(!h)return;
  const[host,im]=h;if(!host.classList.contains("mega-active"))return;
  if(e.relatedTarget&&host.contains(e.relatedTarget))return;
  if(im.dataset.megaBack){im.src=im.dataset.megaBack;delete im.dataset.megaBack;}
  const nameEl=host.querySelector(".morph-name");
  if(nameEl&&nameEl.dataset.nameBack!=null){nameEl.textContent=nameEl.dataset.nameBack;delete nameEl.dataset.nameBack;}
  host.classList.remove("mega-active");delete host.dataset.morph;});

/* Fallback de sprite quebrado: mostra uma pokébola neutra no lugar do ícone de imagem quebrada */
const IMG_FALLBACK="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23141a30' stroke='%232b345c' stroke-width='4'/%3E%3Cpath d='M5 50h28a17 17 0 0 1 34 0h28' fill='none' stroke='%232b345c' stroke-width='4'/%3E%3Ccircle cx='50' cy='50' r='11' fill='%230a0d1c' stroke='%232b345c' stroke-width='4'/%3E%3C/svg%3E";
document.addEventListener("error",e=>{const t=e.target;if(t&&t.tagName==="IMG"&&!t.dataset.fb){t.dataset.fb="1";t.src=IMG_FALLBACK;}},true);

/* ================= RENDER ================= */
function renderHome(){
  const stats=[[COUNTS.titulos,"Títulos"],[COUNTS.regioes,"Regiões"],[COUNTS.dex,"Pokédex"],[MONS.length,"Treinados"],[COUNTS.lendarios,"Lendários"],[COUNTS.miticos,"Míticos"],[COUNTS.ub,"UB"],[COUNTS.shiny,"Shiny"],[COUNTS.ha,"HA"],[COUNTS.megas,"Megas"],[COUNTS.gmax,"Gmax"],[COUNTS.zmove,"Z-Moves"],[COUNTS.formas,"Formas"]];
  document.getElementById("heroStats").innerHTML=stats.map(s=>`<div class="s"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
  const team=FINAL_TEAM;const R=150;
  let orbs="";
  team.forEach((m,i)=>{const ang=(-90+i*60)*Math.PI/180;const x=Math.cos(ang)*R,y=Math.sin(ang)*R;
    orbs+=`<div class="orb" style="transform:translate(${x}px,${y}px)" title="${m.name}" onclick="openMon('${m.base}')"><img loading="lazy" src="${img(m.base,SHINY.has(m.base))}" alt="${m.name}"></div>`;});
  document.getElementById("heroTeam").innerHTML=`<div class="ring"></div>${orbs}<div class="center" style="background-image:url('https://res.cloudinary.com/dokl8hfqz/image/upload/v1782926448/Pedro_Castanho_-_Imagem_de_Treinador_sem_fundo_g0aomc.png');background-size:190%;background-position:50% 5%;background-repeat:no-repeat"></div>`;
}

function renderProfile(){
  const stats=[[COUNTS.titulos,"Títulos Conquistados","gold"],[COUNTS.regioes,"Regiões Vencidas",""],[COUNTS.dex,"Registrados na Pokédex",""],[MONS.length,"Pokémon Treinados",""],[COUNTS.lendarios,"Lendários",""],[COUNTS.miticos,"Míticos",""],[COUNTS.ub,"Ultra Beasts",""],[COUNTS.shiny,"Shiny",""],[COUNTS.ha,"Hidden Ability",""],[COUNTS.megas,"Mega Evoluções",""],[COUNTS.gmax,"Gigantamax",""],[COUNTS.zmove,"Z-Moves Exclusivos",""],[COUNTS.formas,"Formas Alternativas",""]];
  document.getElementById("profileStats").innerHTML=stats.map(s=>`<div class="tile ${s[2]}"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
  const pft=document.getElementById("profileFinalTeam");
  if(pft)pft.innerHTML=FINAL_TEAM.map(m=>`<div class="pf-mon" title="${m.name}" onclick="openMon('${m.base}')"><img loading="lazy" src="${img(m.base,SHINY.has(m.base))}"></div>`).join("");
}

function renderTimeline(){
  document.getElementById("timelineList").innerHTML=TEAMS.map((t,i)=>{
    const rg=REGIONS[t.region];const caps=CAPTURES[t.region]||[];
    const megaTxt=rg.megas?`<b>${rg.megas} Mega${rg.megas>1?"s":""}</b> · `:"";
    const zTxt=rg.allZ?`<b style="color:#28e0d8">${COUNTS.zmove} Z-Moves</b> · `:"";
    const preMega=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Kalos");
    const preGmax=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Galar");
    const preZmove=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Alola");
    return `<div class="tl-item"${preMega?" data-nomega":""}${preGmax?" data-nogmax":""}${preZmove?" data-nozmove":""}><div class="tl-dot">${i+1}</div>
     <div class="tl-card" onclick="openRegion('${t.region}')">
       <div>
         <h3>${chapterName(t.region)} ${t.world?'👑':''}</h3>
         <div class="ti" style="color:var(--muted)">📍 Região: ${regionName(t.region)}</div>
         <div class="ti">🏅 ${t.title}</div>
         <div class="meta">${megaTxt}${zTxt}<b>Assinatura:</b> ${SIGNATURE[t.region]} · <b>Capturas:</b> ${caps.length||"—"} · <b>Time:</b> ${t.mons.slice(0,3).join(", ")}…</div>
       </div>
       <div class="tl-sig"><img loading="lazy" src="${img(SIGNATURE[t.region],SHINY.has(SIGNATURE[t.region]))}"></div>
     </div></div>`;
  }).join("");
}

function regionBannerHTML(r){
  const rg=REGIONS[r];const t=TEAMS.find(x=>x.region===r);
  return `<div class="region-banner" style="background:linear-gradient(115deg,${rg.c.split(',')[0]}22,${rg.c.split(',')[1]}18),linear-gradient(180deg,var(--panel),var(--bg2))">
    <img class="rb-art" loading="lazy" src="${img(rg.sig,SHINY.has(rg.sig))}">
    <div class="rb-txt"><div class="kicker" style="color:${rg.c.split(',')[1]}">Etapa ${REGION_ORDER.indexOf(r)+1}</div>
    <h2>${chapterName(r)}</h2><div style="color:var(--muted);font-weight:700;margin:2px 0 4px">📍 Região: ${regionName(r)}</div><div style="color:var(--gold);font-weight:700">🏅 ${t.title}</div></div>
  </div>`;
}

function renderRegions(){
  document.getElementById("regionsList").innerHTML=REGION_ORDER.map(r=>{
    const rg=REGIONS[r];const t=TEAMS.find(x=>x.region===r);const caps=CAPTURES[r]||[];
    const teamMons=t.mons.map(m=>{const b=baseKey(m);return `<div class="team-mon" onclick="event.stopPropagation();openMon('${b}')"><span class="mm"><img loading="lazy" src="${img(b,SHINY.has(b))}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</span><span class="morph-name">${m}</span></div>`;}).join("");
    const capChips=caps.length?caps.map(c=>`<span class="chip" onclick="openMon('${baseKey(c)}')">${c}${SHINY.has(baseKey(c))?' ✦':''}</span>`).join(""):'<span style="color:var(--dim)">Nenhuma nova captura nesta etapa.</span>';
    const megaLine=rg.megas?`<div style="margin-top:12px;color:var(--purple);font-weight:700">🔮 ${rg.megas} Mega Evoluç${rg.megas>1?"ões":"ão"} adquirida${rg.megas>1?"s":""} aqui.</div>`:"";
    const zLine=rg.allZ?`<div style="margin-top:12px;color:#28e0d8;font-weight:700">⚡ ${COUNTS.zmove} Z-Moves adquiridos aqui.</div>`:"";
    const preMega=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Kalos");
    const preGmax=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Galar");
    const preZmove=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Alola");
    return `<div style="margin-bottom:34px"${preMega?" data-nomega":""}${preGmax?" data-nogmax":""}${preZmove?" data-nozmove":""}>
     ${regionBannerHTML(r)}
     <div style="color:var(--muted);font-size:15px;line-height:1.6;margin-bottom:16px">${rg.blurb}</div>
     <div class="grid g-2">
       <div class="card" style="padding:16px 18px"><div class="kicker">Time Campeão</div>
         <div class="team-mons" style="grid-template-columns:repeat(3,1fr);padding:12px 0 0">${teamMons}</div>
         <div style="margin-top:10px;color:var(--muted);font-size:13px">⭐ Assinatura: <b style="color:var(--gold)">${SIGNATURE[r]}</b>${t.note?` · ${t.note}`:''}</div>
       </div>
       <div class="card" style="padding:16px 18px"><div class="kicker">Capturas nesta região</div>
         <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:7px">${capChips}</div>
         ${megaLine}${zLine}
       </div>
     </div>
    </div>`;
  }).join("");
}

function renderTeams(){
  document.getElementById("teamsList").innerHTML=TEAMS.map(t=>{
    const mons=t.mons.map(m=>{const b=baseKey(m);const sh=SHINY.has(b);
      return `<div class="team-mon" onclick="openMon('${b}')"><span class="mm"><img loading="lazy" src="${img(b,sh)}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</span><span class="morph-name">${m}</span>${sh?'<span class="mini">✦</span>':''}</div>`;}).join("");
    const preMega=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Kalos");
    const preGmax=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Galar");
    const preZmove=REGION_ORDER.indexOf(t.region)<REGION_ORDER.indexOf("Alola");
    return `<div class="card team-card ${t.world?'is-final':''}"${preMega?" data-nomega":""}${preGmax?" data-nogmax":""}${preZmove?" data-nozmove":""}>
      <div class="tc-head"><div><h3>${chapterName(t.region)} ${t.world?'👑':''}</h3><div class="ti" style="color:var(--muted)">📍 ${regionName(t.region)}</div><div class="ti">🏅 ${t.title}</div></div>
      ${t.world?'<span class="badge b-champ">Mundial</span>':`<span class="badge" style="background:rgba(255,255,255,.08);color:var(--muted)">MVP: ${t.mvp}</span>`}</div>
      <div class="team-mons">${mons}</div>
      ${t.note?`<div style="padding:0 16px 14px;color:var(--dim);font-size:12.5px">✦ ${t.note}</div>`:''}
    </div>`;
  }).join("");
}

function renderTitles(){
  document.getElementById("titlesList").innerHTML=TITLE_LIST.map((t,i)=>{
    const world=/Mundial/.test(t);
    return `<div class="card" style="padding:20px 18px;text-align:center;${world?'border-color:var(--gold)':''}">
      <div style="font-size:34px">${world?'👑':'🏅'}</div>
      <div style="font-family:'Orbitron';font-size:14px;margin-top:8px;${world?'color:var(--gold)':''}">${t}</div>
    </div>`;}).join("");
}
function renderMyTeams(){
  const teamMon=(name,base,sh,extra)=>`<div class="team-mon" onclick="openMon('${base}')">${extra||''}<span class="mm"><img loading="lazy" src="${img(base,sh)}">${ZMOVE_CRYSTAL[base]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[base]}" alt="Z-Move">`:''}</span><span class="morph-name">${name}</span>${sh?'<span class="mini">✦</span>':''}</div>`;
  document.getElementById("titlesMainTeam").innerHTML=FINAL_TEAM.map((m,i)=>teamMon(m.name,m.base,SHINY.has(m.base),`<span class="hero-num">${i+1}</span>`)).join("");
  document.getElementById("reserveList").innerHTML=RESERVE.map(r=>teamMon(r.n,r.n,SHINY.has(r.n))).join("");
  document.getElementById("teamCList").innerHTML=TEAM_C.map(n=>teamMon(n,n,SHINY.has(n))).join("");
  const usedBases=new Set([...FINAL_TEAM.map(m=>m.base),...RESERVE.map(r=>baseKey(r.n)),...TEAM_C.map(baseKey)]);
  const available=Object.keys(TITLES).filter(n=>!usedBases.has(baseKey(n)));
  document.getElementById("availableList").innerHTML=available.map(n=>teamMon(n,baseKey(n),SHINY.has(baseKey(n)))).join("");
}

/* Pokédex */
let dexFilter="all";
let boxRegion="all",boxType1="all",boxType2="all";
const DEX_FILTERS=[["all","Todos"],["final","Time Final"],["champ","Campeões"],["shiny","Shiny"],["legend","Lendários"],["myth","Míticos"],["ha","Hidden Ability"],["mega","Mega Evolução"],["titles","Mais Títulos"]];
function getFav(){return JSON.parse(localStorage.getItem("pedro_fav")||"[]");}
function toggleFav(n,e){if(e)e.stopPropagation();let f=getFav();f.includes(n)?f=f.filter(x=>x!==n):f.push(n);localStorage.setItem("pedro_fav",JSON.stringify(f));renderDex();}
function passFilter(m){const b=baseKey(m.name);const f=dexFilter;
  if(f==="all")return true;
  if(f==="final")return FINAL.has(b);
  if(f==="champ")return(TITLES[m.name]||0)>0;
  if(f==="shiny")return SHINY.has(b);
  if(f==="legend")return LEGEND.has(b);
  if(f==="myth")return MYTH.has(b);
  if(f==="ha")return HA.has(b);
  if(f==="mega")return HASMEGA.has(b);
  if(f==="titles")return(TITLES[m.name]||0)>=3;
  return true;}
function renderDexFilters(){
  document.getElementById("pkFilters").innerHTML=DEX_FILTERS.map(f=>`<span class="chip ${dexFilter===f[0]?'on':''}" onclick="dexFilter='${f[0]}';renderDex()">${f[1]}</span>`).join("");
  const regs=ORIGIN_RANGES.map(x=>x[2]);
  const rSel=document.getElementById("boxSelRegion");
  if(rSel)rSel.innerHTML=`<option value="all">🌍 Todas as regiões</option>`+regs.map(r=>`<option value="${r}"${boxRegion===r?" selected":""}>${r}</option>`).join("");
  const tOpts=sel=>`<option value="all">Todos os tipos</option>`+Object.entries(TYPE_META).map(([k,v])=>`<option value="${k}"${sel===k?" selected":""}>${v[2]} ${v[0]}</option>`).join("");
  const t1=document.getElementById("boxSelType1"),t2=document.getElementById("boxSelType2");
  if(t1)t1.innerHTML=tOpts(boxType1);
  if(t2)t2.innerHTML=tOpts(boxType2);
}
function filteredBox(){
  const q=(document.getElementById("pkSearch").value||"").toLowerCase();
  return MONS.filter(m=>{
    if(!passFilter(m))return false;
    if(!m.name.toLowerCase().includes(q))return false;
    if(boxRegion!=="all"&&originRegion(m.name)!==boxRegion)return false;
    const ts=typesOf(m.name);
    if(boxType1!=="all"&&!ts.includes(boxType1))return false;
    if(boxType2!=="all"&&!ts.includes(boxType2))return false;
    return true;
  });
}
function renderDex(){
  renderDexFilters();
  let list=filteredBox();
  if(dexFilter==="titles")list.sort((a,b)=>(TITLES[b.name]||0)-(TITLES[a.name]||0));
  document.getElementById("pkCount").textContent=`${list.length} Pokémon`;
  document.getElementById("dexGrid").innerHTML=list.map(m=>{
    const b=baseKey(m.name);const sh=SHINY.has(b);const tc=TITLES[m.name]||0;
    const st=statusBadges(m.name),ra=rarityBadges(m.name);
    return `<div class="card pk-card${cardClass(m.name)}${sh?' shiny-glow':''}" onclick="openMon('${b}','${m.region}')">
      <div class="pk-top">${st?`<div class="pk-status">${st}</div>`:''}<span class="mm"><img loading="lazy" src="${img(b,sh)}" alt="${m.name}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</span></div>
      <div class="pk-body"><div class="nm"><span class="morph-name">${m.name}</span>${tc>=1?`<span class="pk-title-pill">🏅${tc}</span>`:''}${mvpBadge(m.name)}</div>
      <div class="rg">📍 ${originRegion(m.name)}</div><div class="pk-types">${typeBadges(m.name)}${ra?`<span class="pk-rarity">${ra}</span>`:''}</div></div>
    </div>`;
  }).join("");
}

/* Pokédex nacional — TODOS os Pokémon (Box style), ordenados por Nº, com filtros por seleção + chips */
let dexRegion="all",dexType1="all",dexType2="all",dexAttr="";
const DEX_ATTRS=[["shiny","✦ Shiny"],["ha","HA"],["forms","Formas Alt."],["mega","Mega"],["zmove","Z-Move"],["gmax","Gigantamax"],["legend","Lendário"],["myth","Mítico"]];
function dexAttrMatch(n,a){
  if(a==="shiny")return SHINY.has(STAGE_BASE[n]||n);
  if(a==="ha")return HA.has(n);
  if(a==="forms")return !!FORM_INFO[n];
  if(a==="mega")return !!MEGA_INFO[n];
  if(a==="zmove")return ZMOVE_BASES.has(n)||!!ZMOVE_CRYSTAL[n];
  if(a==="gmax")return !!GMAX_INFO[n];
  if(a==="legend")return LEGEND.has(n);
  if(a==="myth")return MYTH.has(n);
  return true;
}
function renderPokedexFilters(){
  const regs=ORIGIN_RANGES.map(x=>x[2]);
  const rSel=document.getElementById("dexSelRegion");
  if(rSel)rSel.innerHTML=`<option value="all">🌍 Todas as regiões</option>`+regs.map(r=>`<option value="${r}"${dexRegion===r?" selected":""}>${r}</option>`).join("");
  const tOpts=sel=>`<option value="all">Todos os tipos</option>`+Object.entries(TYPE_META).map(([k,v])=>`<option value="${k}"${sel===k?" selected":""}>${v[2]} ${v[0]}</option>`).join("");
  const t1=document.getElementById("dexSelType1"),t2=document.getElementById("dexSelType2");
  if(t1)t1.innerHTML=tOpts(dexType1);
  if(t2)t2.innerHTML=tOpts(dexType2);
  const cel=document.getElementById("dexFullFilters");
  if(cel)cel.innerHTML=DEX_ATTRS.map(a=>`<span class="chip ${dexAttr===a[0]?'on':''}" onclick="dexAttr=dexAttr==='${a[0]}'?'':'${a[0]}';renderPokedex()">${a[1]}</span>`).join("");
}
function filteredPokedex(){
  const se=document.getElementById("dexSearch");const q=((se&&se.value)||"").toLowerCase();
  return DEX_ALL.filter(m=>{
    if(dexRegion!=="all"&&originRegion(m.name)!==dexRegion)return false;
    const ts=typesOf(m.name);
    if(dexType1!=="all"&&!ts.includes(dexType1))return false;
    if(dexType2!=="all"&&!ts.includes(dexType2))return false;
    if(dexAttr&&!dexAttrMatch(m.name,dexAttr))return false;
    if(q&&!m.name.toLowerCase().includes(q))return false;
    return true;
  });
}
function renderPokedex(){
  renderPokedexFilters();
  const list=filteredPokedex();
  const cnt=document.getElementById("dexFullCount");if(cnt)cnt.textContent=`${list.length} de ${DEX_ALL.length} espécies`;
  document.getElementById("dexFullList").innerHTML=list.map(m=>{
    const n=m.name;const sh=SHINY.has(STAGE_BASE[n]||n);const tc=TITLES[n]||0;
    const sid=DEX[n]||m.id;const zc=ZMOVE_CRYSTAL[n];
    const st=statusBadges(n),ra=rarityBadges(n);
    const dexNo=m.id<10000?"Nº "+String(m.id).padStart(3,"0"):"Forma";
    return `<div class="card pk-card${cardClass(n)}${sh?' shiny-glow':''}" onclick="openMon('${n.replace(/'/g,"\\'")}','${m.region}')">
      <div class="pk-top">${st?`<div class="pk-status">${st}</div>`:''}<span class="mm"><img loading="lazy" src="${ART+(sh?"shiny/":"")+sid+".png"}" alt="${n}">${zc?`<img class="z-hover" loading="lazy" src="${zc}" alt="Z-Move">`:''}</span></div>
      <div class="pk-body"><div class="nm"><span class="morph-name">${n}</span>${tc>=1?`<span class="pk-title-pill">🏅${tc}</span>`:''}${mvpBadge(n)}</div>
      <div class="rg">${dexNo} · 📍 ${originRegion(n)}</div>
      <div class="pk-types">${renderTypeList(typesOf(n))}${ra?`<span class="pk-rarity">${ra}</span>`:''}</div></div>
    </div>`;
  }).join("");
}

/* ================= EXPORTAÇÃO (Box / Pokédex) ================= */
function downloadFile(filename,content,mime){
  const blob=new Blob([content],{type:mime});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download=filename;a.click();
  URL.revokeObjectURL(url);
}
function csvEscape(v){const s=String(v==null?"":v);return /[",\n;]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
function toCSV(rows){
  if(!rows.length)return "";
  const headers=Object.keys(rows[0]);
  return [headers.join(",")].concat(rows.map(r=>headers.map(h=>csvEscape(r[h])).join(","))).join("\n");
}
function exportBox(format){
  const rows=filteredBox().map(m=>{
    const b=baseKey(m.name);
    return {nome:m.name,regiao_origem:originRegion(m.name),regiao_captura:regionName(m.region),
      tipos:typesOf(m.name).join("/"),titulos:TITLES[m.name]||0,
      shiny:SHINY.has(b)?"sim":"não",lendario:LEGEND.has(b)?"sim":"não",mitico:MYTH.has(b)?"sim":"não",
      ha:HA.has(b)?"sim":"não",mega:HASMEGA.has(b)?"sim":"não",gmax:GMAX_INFO[b]?"sim":"não",
      forma_alternativa:(FORM_INFO[b]||MULTI_FORMS[b])?"sim":"não",time_final:FINAL.has(b)?"sim":"não"};
  });
  const ts=new Date().toISOString().slice(0,10);
  if(format==="csv")downloadFile(`box-pedro-${ts}.csv`,toCSV(rows),"text/csv;charset=utf-8");
  else downloadFile(`box-pedro-${ts}.json`,JSON.stringify(rows,null,2),"application/json");
}
function exportPokedex(format){
  const rows=filteredPokedex().map(m=>{
    const n=m.name;
    return {nome:n,numero_dex:m.id<10000?m.id:"",regiao_origem:originRegion(n),tipos:typesOf(n).join("/"),
      titulos:TITLES[n]||0,shiny:SHINY.has(STAGE_BASE[n]||n)?"sim":"não",
      lendario:LEGEND.has(n)?"sim":"não",mitico:MYTH.has(n)?"sim":"não",ha:HA.has(n)?"sim":"não",
      mega:MEGA_INFO[n]?"sim":"não",gmax:GMAX_INFO[n]?"sim":"não",forma_alternativa:FORM_INFO[n]?"sim":"não",
      zmove:(ZMOVE_BASES.has(n)||ZMOVE_CRYSTAL[n])?"sim":"não"};
  });
  const ts=new Date().toISOString().slice(0,10);
  if(format==="csv")downloadFile(`pokedex-pedro-${ts}.csv`,toCSV(rows),"text/csv;charset=utf-8");
  else downloadFile(`pokedex-pedro-${ts}.json`,JSON.stringify(rows,null,2),"application/json");
}

function renderMechanics(){
  document.getElementById("megaList").innerHTML=MEGAS.map(m=>{
    const sh=/Shiny/.test(m[2]);
    const megaSrc=m[3]?ART+(sh?"shiny/":"")+m[3]+".png":img(m[0],sh);
    return `<div class="card mega-card" onclick="openMon('${m[0]}')"><div class="mm"><img loading="lazy" src="${megaSrc}"><span class="badge b-mega" style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%)">Mega</span></div>
      <div class="nm">${m[2]}</div><div class="bs">de ${m[0]} · ${m[1]}</div></div>`;}).join("");
  document.getElementById("gmaxList").innerHTML=GMAX.map(g=>{
    const gSrc=ART+g[2]+".png";
    return `<div class="card mega-card" onclick="openMon('${g[0]}')"><div class="mm"><img loading="lazy" src="${gSrc}"><span class="badge" style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#ff3b5c,#ff9f1c);color:#fff;white-space:nowrap">Gigantamax</span></div>
      <div class="nm">${g[1]}</div><div class="bs">de ${g[0]}</div></div>`;}).join("");
  document.getElementById("zmoveList").innerHTML=ZMOVES.map(z=>{
    const b=z[0];const sh=SHINY.has(b);
    return `<div class="card mega-card" onclick="openMon('${b}')"><div class="mm"><img loading="lazy" src="${img(b,sh)}">
      <img class="z-crystal" loading="lazy" src="${z[3]}" alt="${z[1]}" title="${z[1]}">
      <span class="badge" style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#28e0d8,#6a2cff);color:#fff;white-space:nowrap">Z-Move</span></div>
      <div class="nm">${z[2]}</div><div class="bs">${z[1]} · ${b}</div></div>`;}).join("");
  const fl=document.getElementById("formsList");
  const multiEntries=[];
  Object.entries(MULTI_FORMS).forEach(([base,opts])=>opts.forEach(o=>multiEntries.push([base,o[1],o[2],o[3]])));
  const formCard=f=>{const fSrc=f[5]||(ART+(SHINY.has(f[0])?"shiny/":"")+f[2]+".png");
    return `<div class="card mega-card" onclick="openMon('${f[0]}')"><div class="mm"><img loading="lazy" src="${fSrc}"><span class="badge" style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#a45cff,#ff3b5c);color:#fff;white-space:nowrap">${f[3]}</span></div>
      <div class="nm">${f[1]}</div><div class="bs">de ${f[0]}</div></div>`;};
  if(fl)fl.innerHTML=FORMS.map(formCard).concat(multiEntries.map(formCard)).join("");
}

function renderRare(){
  const groups=[
    ["shiny","✨ Shiny",`Brilho prateado — ${COUNTS.shiny} encontros raríssimos.`,MONS.filter(m=>SHINY.has(baseKey(m.name)))],
    ["legend","👑 Lendários",`Poder dourado — ${COUNTS.lendarios} lendários dominados.`,MONS.filter(m=>LEGEND.has(baseKey(m.name)))],
    ["myth","🔮 Míticos",`Energia roxa — ${COUNTS.miticos} míticos capturados.`,MONS.filter(m=>MYTH.has(baseKey(m.name)))],
    ["ub","🛸 Ultra Beasts",`Vindos de Ultra Wormholes — ${COUNTS.ub} Ultra Beasts capturadas em Alola.`,MONS.filter(m=>UB.has(baseKey(m.name)))],
    ["ha","⚡ Hidden Ability",`Azul elétrico — ${COUNTS.ha} habilidades ocultas (incl. Ash Greninja).`,MONS.filter(m=>HA.has(baseKey(m.name)))]
  ];
  document.getElementById("rareList").innerHTML=groups.map(g=>`
   <div class="rare-group ${g[0]}"><div class="rh"><h3>${g[1]}</h3><span style="color:var(--muted);font-size:13.5px">${g[2]}</span></div>
   <div class="grid g-auto">${g[3].map(m=>{const b=baseKey(m.name);const sh=SHINY.has(b);
     const st=statusBadges(m.name);
     return `<div class="card pk-card${cardClass(m.name)}${sh?' shiny-glow':''}" onclick="openMon('${b}','${m.region}')"><div class="pk-top">${st?`<div class="pk-status">${st}</div>`:''}<span class="mm"><img loading="lazy" src="${img(b,sh)}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</span></div>
       <div class="pk-body"><div class="nm"><span class="morph-name">${m.name}</span></div><div class="rg">📍 ${regionName(m.region)}</div><div class="pk-types">${typeBadges(m.name)}${rarityBadges(m.name)?`<span class="pk-rarity">${rarityBadges(m.name)}</span>`:''}</div></div></div>`;}).join("")}</div></div>`).join("");
}

function renderFinal(){
  document.getElementById("finalOrbs").innerHTML=FINAL_TEAM.map(m=>`<span class="chip on" onclick="openMon('${m.base}')">${m.name}</span>`).join("");
  document.getElementById("finalTeam").innerHTML=FINAL_TEAM.map(m=>{
    const sh=SHINY.has(m.base);
    const baseSrc=img(m.base,sh);
    const activeSrc=(MEGA_SWAP[baseSrc]&&MEGA_SWAP[baseSrc].u)||baseSrc;
    return `<div class="card final-card">
      <div class="fc-top"><img loading="lazy" src="${activeSrc}">
        <div><span class="badge b-final">👑 Campeão Mundial</span><h3 style="margin-top:6px" class="morph-name">${m.name}</h3>
        <div class="role">⚔️ ${m.role}</div><div style="color:var(--muted);font-size:12.5px">📍 Origem: ${m.origin}</div></div></div>
      <div class="final-stats">
        <div class="r"><span>Level</span><b>${m.lvl}</b></div>
        <div class="r"><span>Nature</span><b>${m.nat}</b></div>
        <div class="r"><span>Item</span><b>${m.item}</b></div>
        <div class="r"><span>Ability</span><b>${m.abi}</b></div>
        <div class="r" style="grid-column:1/3"><span>IVs</span><b>${m.ivs}</b></div>
        <div class="r" style="grid-column:1/3"><span>EVs</span><b>${m.evs}</b></div>
      </div>
      <div class="moves"><div class="mt">ATAQUES</div><div class="mv">${m.moves.map(a=>`<span>${a}</span>`).join("")}</div>
      ${m.note?`<div class="m-note" style="margin-top:12px">✦ ${m.note}</div>`:''}</div>
    </div>`;
  }).join("");
}

function renderHOF(){
  const top=Object.entries(TITLES).filter(([n,c])=>c>=2).sort((a,b)=>b[1]-a[1]);
  document.getElementById("hofTop").innerHTML=top.map(([n,c])=>{const b=baseKey(n);
    return `<div class="hof" onclick="openMon('${b}')"><div class="pod"><img loading="lazy" src="${img(b,SHINY.has(b))}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</div>
      <div class="nm morph-name">${n}</div><div class="tcount">🏅 ${c} títulos</div></div>`;}).join("");
  const topMvp=Object.entries(MVP_COUNT).filter(([n,c])=>c>=2).sort((a,b)=>b[1]-a[1]);
  document.getElementById("hofMvp").innerHTML=topMvp.map(([n,c])=>{const b=baseKey(n);
    return `<div class="hof" onclick="openMon('${b}')"><div class="pod"><img loading="lazy" src="${img(b,SHINY.has(b))}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</div>
      <div class="nm morph-name">${n}</div><div class="tcount">👑 ${c}x MVP</div></div>`;}).join("");
  document.getElementById("hofSig").innerHTML=REGION_ORDER.map(r=>{const s=SIGNATURE[r];const b=baseKey(s);
    const preMega=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Kalos");
    const preGmax=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Galar");
    const preZmove=REGION_ORDER.indexOf(r)<REGION_ORDER.indexOf("Alola");
    return `<div class="card hof-sig" style="display:flex;gap:14px;align-items:center;padding:14px 16px;cursor:pointer;position:relative" onclick="openMon('${b}')"${preMega?" data-nomega":""}${preGmax?" data-nogmax":""}${preZmove?" data-nozmove":""}>
      ${teamMedal(s)?`<span style="position:absolute;top:10px;right:10px;z-index:2">${teamMedal(s)}</span>`:''}
      <span class="hof-sig-ico" style="position:relative;flex:none;width:74px;height:74px;display:inline-block"><img loading="lazy" style="width:74px;height:74px;object-fit:contain;filter:drop-shadow(0 6px 10px rgba(0,0,0,.5))" src="${img(b,SHINY.has(b))}">${ZMOVE_CRYSTAL[b]?`<img class="z-hover" loading="lazy" src="${ZMOVE_CRYSTAL[b]}" alt="Z-Move">`:''}</span>
      <div><div style="color:var(--dim);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">${chapterName(r)} · 📍 ${regionName(r)}</div>
      <div style="font-family:'Orbitron';font-size:16px" class="morph-name">${s}</div></div></div>`;}).join("");
}

function renderAch(){
  document.getElementById("achList").innerHTML=ACH.map(a=>`
   <div class="medal"><div class="mdl"><img loading="lazy" src="${img(a.mon,a.shiny)}"><span class="star">${a.star}</span></div>
   <div><h4>${a.t}</h4><div class="who">${a.mon}${a.shiny?' ✦':''}</div><p>${a.d}</p></div></div>`).join("");
}

/* ================= MODAL ================= */
function openMon(base,region){
  const name=base;const sh=SHINY.has(STAGE_BASE[base]||base);
  // find capture region
  let mObj=MONS.find(m=>baseKey(m.name)===base);
  const displayName=mObj?mObj.name:base;
  const capRegion=regionName(region||(mObj?mObj.region:STAGE_REGION[base])||"—");
  const tc=TITLES[displayName]||TITLES[base]||0;
  // teams participated
  const inTeams=TEAMS.filter(t=>t.mons.some(x=>baseKey(x)===base)).map(t=>chapterName(t.region));
  const finalM=FINAL_TEAM.find(m=>m.base===base);
  let extra="";
  if(finalM){extra=`
    <div class="m-row"><span>Level</span><b>${finalM.lvl}</b></div>
    <div class="m-row"><span>Nature</span><b>${finalM.nat}</b></div>
    <div class="m-row"><span>Item</span><b>${finalM.item}</b></div>
    <div class="m-row"><span>Ability</span><b>${finalM.abi}${HA.has(base)?' <span class="ha-star" title="Hidden Ability — habilidade oculta, rara">✨</span>':''}</b></div>
    <div class="m-row full"><span>Função</span><b>${finalM.role}</b></div>
    <div class="m-row full"><span>IVs</span><b>${finalM.ivs}</b></div>
    <div class="m-row full"><span>EVs</span><b>${finalM.evs}</b></div>
    <div class="m-row full"><span>Ataques</span><b>${finalM.moves.join(", ")}</b></div>`;}
  const megaOf=MEGAS.find(m=>m[0]===base);
  document.getElementById("modalBox").innerHTML=`
    <div class="m-top">
    <div class="modal-actions">
      ${morphKeys(base).length>=2?`<div class="hover-sel">🖱️ Hover mostra: ${morphKeys(base).map(k=>`<button class="hs-opt ${hoverSel(base)===k?'on':''}" data-k="${k}" onclick="setHoverForm('${base}','${k}')">${morphLabel(base,k)}</button>`).join("")}</div>`:'<span></span>'}
      ${MULTI_FORMS[base]?`<div class="hover-sel">🔀 Forma: ${MULTI_FORMS[base].map(o=>`<button class="hs-opt fv-opt ${FORM_VARIANT[base]===o[0]?'on':''}" data-k="${o[0]}" onclick="setFormVariant('${base}','${o[0]}')">${o[3]}</button>`).join("")}</div>`:''}
      <div class="modal-actions-btns">
      ${MEGA_INFO[base]?`<button class="morph-btn" id="megaBtn" onclick="modalMorph('${base}',${sh},'mega')">⚡ Mega</button>`:''}
      ${GMAX_INFO[base]?`<button class="morph-btn gmax" id="gmaxBtn" onclick="modalMorph('${base}',${sh},'gmax')">Gigantamax</button>`:''}
      ${FORM_INFO[base]?`<button class="morph-btn" id="formBtn" onclick="modalMorph('${base}',${sh},'form')">${FORM_INFO[base].label}</button>`:''}
      ${ZMOVE_CRYSTAL[base]?`<button class="morph-btn zmove" id="zmoveBtn" onclick="modalMorph('${base}',${sh},'zmove')">Z-Move</button>`:''}
      <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
    </div>
    <div class="m-hero"><div class="mm"><img id="mHeroImg" src="${monSprite(base,sh)}" alt="${displayName}" data-form="base">${ZMOVE_CRYSTAL[base]?`<img class="z-crystal" id="mZCrystal" src="${ZMOVE_CRYSTAL[base]}" alt="Z-Move" title="Z-Move" style="display:none">`:''}</div>
      <div><h3 style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span id="mHeroName" data-name="${displayName}">${displayName}</span>${teamMedal(base)}</h3><div class="mo">📍 Capturado em: ${capRegion}</div>
      <div class="pk-types" id="mTypes" style="margin:8px 0 6px">${typeBadges(displayName)||typeBadges(base)}</div>
      <div class="m-badges">${badgesFor(displayName,{noMega:!!MEGA_INFO[base],noHA:!!finalM,noMedal:true})}</div></div></div>
    </div>
    <div class="m-body">
      <div class="m-row"><span>Região de Origem</span><b>${originRegion(base)}</b></div>
      <div class="m-row"><span>Região de Captura</span><b>${capRegion}</b></div>
      <div class="m-row"><span>Títulos conquistados</span><b>🏅 ${tc}</b></div>
      <div class="m-row full"><span>Campeão em:</span><b>${inTeams.length?inTeams.join(", "):"—"}</b></div>
      ${megaOf?`<div class="m-row"><span>Forma Mega</span><b>${megaOf[2]}</b></div>`:""}
      ${FORM_INFO[base]?`<div class="m-row"><span>Forma alternativa</span><b>${FORM_INFO[base].name}</b></div>`:""}
      ${GMAX_INFO[base]?`<div class="m-row"><span>Forma Gigantamax</span><b>${GMAX_INFO[base].name}</b></div>`:""}
      ${finalM?`<div class="m-row"><span>Status</span><b style="color:var(--gold)">👑 Time Final Mundial</b></div>`:""}
      ${extra}
      ${finalM&&finalM.note?`<div class="m-note">✦ ${finalM.note}</div>`:""}
    </div>`;
  const modalEl=document.getElementById("modal");modalEl.dataset.base=base;modalEl.classList.add("open");
  const nh="pokemon/"+encodeURIComponent(base);if(location.hash.slice(1)!==nh)location.hash=nh;
}
function closeModal(){document.getElementById("modal").classList.remove("open");if(location.hash.indexOf("#pokemon/")===0)location.hash=currentView;}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});

document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});

function openRegion(r){go('regions');setTimeout(()=>{
  const el=document.getElementById("regionsList");
  const idx=REGION_ORDER.indexOf(r);
  const target=el.children[idx];if(target)target.scrollIntoView({behavior:"smooth",block:"start"});
},120);}

/* ================= NAV ================= */
const RENDERED={};
let currentView="home";
const RENDERERS={home:renderHome,profile:renderProfile,timeline:renderTimeline,regions:renderRegions,teams:renderTeams,myteams:renderMyTeams,titles:renderTitles,box:renderDex,pokedex:renderPokedex,mechanics:renderMechanics,rare:renderRare,final:renderFinal,hof:renderHOF,achievements:renderAch};
function go(view){
  const modal=document.getElementById("modal");if(modal.classList.contains("open"))modal.classList.remove("open");
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+view).classList.add("active");
  document.querySelectorAll("#nav a,.botnav a").forEach(a=>a.classList.toggle("active",a.dataset.view===view));
  if(RENDERERS[view]&&!RENDERED[view]){RENDERERS[view]();if(view!=="box"&&view!=="pokedex")RENDERED[view]=true;}
  if(view==="box")renderDex();if(view==="pokedex")renderPokedex();
  window.scrollTo({top:0,behavior:"smooth"});
  if(window.innerWidth<=920)closeMenu();
  currentView=view;location.hash=view;
}
/* roteia mudanças de URL: #pokemon/Nome abre a ficha; #view troca de aba (suporta o botão Voltar) */
function onHashChange(){
  const h=location.hash.slice(1);const modal=document.getElementById("modal");
  if(h.indexOf("pokemon/")===0){
    const n=decodeURIComponent(h.slice(8));
    if((!modal.classList.contains("open")||modal.dataset.base!==n)&&(DEX[n]||SPRITE_ID[n]))openMon(n);
  }else{
    if(modal.classList.contains("open"))modal.classList.remove("open");
    const v=h||"home";
    if(v!==currentView&&document.getElementById("view-"+v))go(v);
  }
}
document.querySelectorAll("#nav a,.botnav a").forEach(a=>a.addEventListener("click",()=>{if(a.dataset.view)go(a.dataset.view);}));
function toggleMenu(){document.getElementById("sidebar").classList.toggle("open");document.getElementById("scrim").classList.toggle("on");}
function closeMenu(){document.getElementById("sidebar").classList.remove("open");document.getElementById("scrim").classList.remove("on");}

/* init */
applyCounts();
renderHome();
window.addEventListener("hashchange",onHashChange);
(function(){const h=(location.hash||"#home").slice(1);
  if(h.indexOf("pokemon/")===0){go("pokedex");const n=decodeURIComponent(h.slice(8));if(DEX[n]||SPRITE_ID[n])openMon(n);}
  else if(document.getElementById("view-"+h))go(h);
  else go("home");})();
