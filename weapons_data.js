// Format: ["Category", [{id, name, icon}, ...], "Archetype"]
// Weapons ordered exactly as on the Albion Online wiki weapon page.
const WEAPON_CATALOG = [
// ── Warrior ──────────────────────────────────────────────────────────────────
["Swords", [
  {id:"MAIN_SWORD",            name:"Broadsword",     icon:"https://render.albiononline.com/v1/item/T4_MAIN_SWORD.png?quality=1&size=128"},
  {id:"2H_CLAYMORE",           name:"Claymore",       icon:"https://render.albiononline.com/v1/item/T4_2H_CLAYMORE.png?quality=1&size=128"},
  {id:"2H_DUALSWORD",          name:"Dual Swords",    icon:"https://render.albiononline.com/v1/item/T4_2H_DUALSWORD.png?quality=1&size=128"},
  {id:"MAIN_SCIMITAR_MORGANA", name:"Clarent Blade",  icon:"https://render.albiononline.com/v1/item/T4_MAIN_SCIMITAR_MORGANA.png?quality=1&size=128"},
  {id:"2H_CLEAVER_HELL",       name:"Carving Sword",  icon:"https://render.albiononline.com/v1/item/T4_2H_CLEAVER_HELL.png?quality=1&size=128"},
  {id:"2H_DUALSCIMITAR_UNDEAD",name:"Galatine Pair",  icon:"https://render.albiononline.com/v1/item/T4_2H_DUALSCIMITAR_UNDEAD.png?quality=1&size=128"},
  {id:"2H_CLAYMORE_AVALON",    name:"Kingmaker",      icon:"https://render.albiononline.com/v1/item/T4_2H_CLAYMORE_AVALON.png?quality=1&size=128"},
  {id:"MAIN_SWORD_CRYSTAL",    name:"Infinity Blade", icon:"https://render.albiononline.com/v1/item/T4_MAIN_SWORD_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

["Axes", [
  {id:"MAIN_AXE",          name:"Battleaxe",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_AXE.png?quality=1&size=128"},
  {id:"2H_AXE",            name:"Greataxe",       icon:"https://render.albiononline.com/v1/item/T4_2H_AXE.png?quality=1&size=128"},
  {id:"2H_HALBERD",        name:"Halberd",        icon:"https://render.albiononline.com/v1/item/T4_2H_HALBERD.png?quality=1&size=128"},
  {id:"2H_HALBERD_MORGANA",name:"Carrioncaller",  icon:"https://render.albiononline.com/v1/item/T4_2H_HALBERD_MORGANA.png?quality=1&size=128"},
  {id:"2H_SCYTHE_HELL",    name:"Infernal Scythe",icon:"https://render.albiononline.com/v1/item/T4_2H_SCYTHE_HELL.png?quality=1&size=128"},
  {id:"2H_DUALAXE_KEEPER", name:"Bear Paws",      icon:"https://render.albiononline.com/v1/item/T4_2H_DUALAXE_KEEPER.png?quality=1&size=128"},
  {id:"2H_AXE_AVALON",     name:"Realmbreaker",   icon:"https://render.albiononline.com/v1/item/T4_2H_AXE_AVALON.png?quality=1&size=128"},
  {id:"2H_SCYTHE_CRYSTAL", name:"Crystal Reaper", icon:"https://render.albiononline.com/v1/item/T4_2H_SCYTHE_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

["Maces", [
  {id:"MAIN_MACE",          name:"Mace",              icon:"https://render.albiononline.com/v1/item/T4_MAIN_MACE.png?quality=1&size=128"},
  {id:"2H_MACE",            name:"Heavy Mace",         icon:"https://render.albiononline.com/v1/item/T4_2H_MACE.png?quality=1&size=128"},
  {id:"2H_FLAIL",           name:"Morning Star",       icon:"https://render.albiononline.com/v1/item/T4_2H_FLAIL.png?quality=1&size=128"},
  {id:"MAIN_ROCKMACE_KEEPER",name:"Bedrock Mace",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_ROCKMACE_KEEPER.png?quality=1&size=128"},
  {id:"MAIN_MACE_HELL",     name:"Incubus Mace",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_MACE_HELL.png?quality=1&size=128"},
  {id:"2H_MACE_MORGANA",    name:"Camlann Mace",       icon:"https://render.albiononline.com/v1/item/T4_2H_MACE_MORGANA.png?quality=1&size=128"},
  {id:"2H_DUALMACE_AVALON", name:"Oathkeepers",        icon:"https://render.albiononline.com/v1/item/T4_2H_DUALMACE_AVALON.png?quality=1&size=128"},
  {id:"MAIN_MACE_CRYSTAL",  name:"Dreadstorm Monarch", icon:"https://render.albiononline.com/v1/item/T4_MAIN_MACE_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

["Hammers", [
  {id:"MAIN_HAMMER",        name:"Hammer",         icon:"https://render.albiononline.com/v1/item/T4_MAIN_HAMMER.png?quality=1&size=128"},
  {id:"2H_POLEHAMMER",      name:"Polehammer",     icon:"https://render.albiononline.com/v1/item/T4_2H_POLEHAMMER.png?quality=1&size=128"},
  {id:"2H_HAMMER",          name:"Great Hammer",   icon:"https://render.albiononline.com/v1/item/T4_2H_HAMMER.png?quality=1&size=128"},
  {id:"2H_HAMMER_UNDEAD",   name:"Tombhammer",     icon:"https://render.albiononline.com/v1/item/T4_2H_HAMMER_UNDEAD.png?quality=1&size=128"},
  {id:"2H_DUALHAMMER_HELL", name:"Forge Hammers",  icon:"https://render.albiononline.com/v1/item/T4_2H_DUALHAMMER_HELL.png?quality=1&size=128"},
  {id:"2H_RAM_KEEPER",      name:"Grovekeeper",    icon:"https://render.albiononline.com/v1/item/T4_2H_RAM_KEEPER.png?quality=1&size=128"},
  {id:"2H_HAMMER_AVALON",   name:"Hand of Justice",icon:"https://render.albiononline.com/v1/item/T4_2H_HAMMER_AVALON.png?quality=1&size=128"},
  {id:"2H_HAMMER_CRYSTAL",  name:"Truebolt Hammer",icon:"https://render.albiononline.com/v1/item/T4_2H_HAMMER_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

["War Gloves", [
  {id:"2H_KNUCKLES_SET1",   name:"Brawler Gloves",    icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_SET1.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_SET2",   name:"Battle Bracers",    icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_SET2.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_SET3",   name:"Spiked Gauntlets",  icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_SET3.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_KEEPER", name:"Ursine Maulers",    icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_KEEPER.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_HELL",   name:"Hellfire Hands",    icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_HELL.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_MORGANA",name:"Ravenstrike Cestus", icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_MORGANA.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_AVALON", name:"Fists of Avalon",   icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_AVALON.png?quality=1&size=128"},
  {id:"2H_KNUCKLES_CRYSTAL",name:"Forcepulse Bracers", icon:"https://render.albiononline.com/v1/item/T4_2H_KNUCKLES_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

["Crossbows", [
  {id:"2H_CROSSBOW",                  name:"Crossbow",       icon:"https://render.albiononline.com/v1/item/T4_2H_CROSSBOW.png?quality=1&size=128"},
  {id:"2H_CROSSBOWLARGE",             name:"Heavy Crossbow", icon:"https://render.albiononline.com/v1/item/T4_2H_CROSSBOWLARGE.png?quality=1&size=128"},
  {id:"MAIN_1HCROSSBOW",              name:"Light Crossbow", icon:"https://render.albiononline.com/v1/item/T4_MAIN_1HCROSSBOW.png?quality=1&size=128"},
  {id:"2H_REPEATINGCROSSBOW_UNDEAD",  name:"Weeping Repeater",icon:"https://render.albiononline.com/v1/item/T4_2H_REPEATINGCROSSBOW_UNDEAD.png?quality=1&size=128"},
  {id:"2H_DUALCROSSBOW_HELL",         name:"Boltcasters",    icon:"https://render.albiononline.com/v1/item/T4_2H_DUALCROSSBOW_HELL.png?quality=1&size=128"},
  {id:"2H_CROSSBOWLARGE_MORGANA",     name:"Siegebow",       icon:"https://render.albiononline.com/v1/item/T4_2H_CROSSBOWLARGE_MORGANA.png?quality=1&size=128"},
  {id:"2H_CROSSBOW_CANNON_AVALON",    name:"Energy Shaper",  icon:"https://render.albiononline.com/v1/item/T4_2H_CROSSBOW_CANNON_AVALON.png?quality=1&size=128"},
  {id:"2H_DUALCROSSBOW_CRYSTAL",      name:"Arclight Blasters",icon:"https://render.albiononline.com/v1/item/T4_2H_DUALCROSSBOW_CRYSTAL.png?quality=1&size=128"},
], "Warrior"],

// ── Hunter ────────────────────────────────────────────────────────────────────
["Bows", [
  {id:"2H_BOW",          name:"Bow",          icon:"https://render.albiononline.com/v1/item/T4_2H_BOW.png?quality=1&size=128"},
  {id:"2H_WARBOW",       name:"Warbow",       icon:"https://render.albiononline.com/v1/item/T4_2H_WARBOW.png?quality=1&size=128"},
  {id:"2H_LONGBOW",      name:"Longbow",      icon:"https://render.albiononline.com/v1/item/T4_2H_LONGBOW.png?quality=1&size=128"},
  {id:"2H_LONGBOW_UNDEAD",name:"Whispering Bow",icon:"https://render.albiononline.com/v1/item/T4_2H_LONGBOW_UNDEAD.png?quality=1&size=128"},
  {id:"2H_BOW_HELL",     name:"Wailing Bow",  icon:"https://render.albiononline.com/v1/item/T4_2H_BOW_HELL.png?quality=1&size=128"},
  {id:"2H_BOW_KEEPER",   name:"Bow of Badon", icon:"https://render.albiononline.com/v1/item/T4_2H_BOW_KEEPER.png?quality=1&size=128"},
  {id:"2H_BOW_AVALON",   name:"Mistpiercer",  icon:"https://render.albiononline.com/v1/item/T4_2H_BOW_AVALON.png?quality=1&size=128"},
  {id:"2H_BOW_CRYSTAL",  name:"Skystrider Bow",icon:"https://render.albiononline.com/v1/item/T4_2H_BOW_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

["Daggers", [
  {id:"MAIN_DAGGER",          name:"Dagger",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_DAGGER.png?quality=1&size=128"},
  {id:"2H_DAGGERPAIR",        name:"Dagger Pair",  icon:"https://render.albiononline.com/v1/item/T4_2H_DAGGERPAIR.png?quality=1&size=128"},
  {id:"2H_CLAWPAIR",          name:"Claws",        icon:"https://render.albiononline.com/v1/item/T4_2H_CLAWPAIR.png?quality=1&size=128"},
  {id:"MAIN_RAPIER_MORGANA",  name:"Bloodletter",  icon:"https://render.albiononline.com/v1/item/T4_MAIN_RAPIER_MORGANA.png?quality=1&size=128"},
  {id:"MAIN_DAGGER_HELL",     name:"Demonfang",    icon:"https://render.albiononline.com/v1/item/T4_MAIN_DAGGER_HELL.png?quality=1&size=128"},
  {id:"2H_DUALSICKLE_UNDEAD", name:"Deathgivers",  icon:"https://render.albiononline.com/v1/item/T4_2H_DUALSICKLE_UNDEAD.png?quality=1&size=128"},
  {id:"2H_DAGGER_KATAR_AVALON",name:"Bridled Fury", icon:"https://render.albiononline.com/v1/item/T4_2H_DAGGER_KATAR_AVALON.png?quality=1&size=128"},
  {id:"2H_DAGGERPAIR_CRYSTAL",name:"Twin Slayers", icon:"https://render.albiononline.com/v1/item/T4_2H_DAGGERPAIR_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

["Spears", [
  {id:"MAIN_SPEAR",           name:"Spear",        icon:"https://render.albiononline.com/v1/item/T4_MAIN_SPEAR.png?quality=1&size=128"},
  {id:"2H_SPEAR",             name:"Pike",         icon:"https://render.albiononline.com/v1/item/T4_2H_SPEAR.png?quality=1&size=128"},
  {id:"2H_GLAIVE",            name:"Glaive",       icon:"https://render.albiononline.com/v1/item/T4_2H_GLAIVE.png?quality=1&size=128"},
  {id:"MAIN_SPEAR_KEEPER",    name:"Heron Spear",  icon:"https://render.albiononline.com/v1/item/T4_MAIN_SPEAR_KEEPER.png?quality=1&size=128"},
  {id:"2H_HARPOON_HELL",      name:"Spirithunter", icon:"https://render.albiononline.com/v1/item/T4_2H_HARPOON_HELL.png?quality=1&size=128"},
  {id:"2H_TRIDENT_UNDEAD",    name:"Trinity Spear",icon:"https://render.albiononline.com/v1/item/T4_2H_TRIDENT_UNDEAD.png?quality=1&size=128"},
  {id:"MAIN_SPEAR_LANCE_AVALON",name:"Daybreaker", icon:"https://render.albiononline.com/v1/item/T4_MAIN_SPEAR_LANCE_AVALON.png?quality=1&size=128"},
  {id:"2H_GLAIVE_CRYSTAL",    name:"Rift Glaive",  icon:"https://render.albiononline.com/v1/item/T4_2H_GLAIVE_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

["Quarterstaves", [
  {id:"2H_QUARTERSTAFF",           name:"Quarterstaff",        icon:"https://render.albiononline.com/v1/item/T4_2H_QUARTERSTAFF.png?quality=1&size=128"},
  {id:"2H_IRONCLADEDSTAFF",        name:"Iron-clad Staff",     icon:"https://render.albiononline.com/v1/item/T4_2H_IRONCLADEDSTAFF.png?quality=1&size=128"},
  {id:"2H_DOUBLEBLADEDSTAFF",      name:"Double Bladed Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_DOUBLEBLADEDSTAFF.png?quality=1&size=128"},
  {id:"2H_COMBATSTAFF_MORGANA",    name:"Black Monk Stave",    icon:"https://render.albiononline.com/v1/item/T4_2H_COMBATSTAFF_MORGANA.png?quality=1&size=128"},
  {id:"2H_TWINSCYTHE_HELL",        name:"Soulscythe",          icon:"https://render.albiononline.com/v1/item/T4_2H_TWINSCYTHE_HELL.png?quality=1&size=128"},
  {id:"2H_ROCKSTAFF_KEEPER",       name:"Staff of Balance",    icon:"https://render.albiononline.com/v1/item/T4_2H_ROCKSTAFF_KEEPER.png?quality=1&size=128"},
  {id:"2H_QUARTERSTAFF_AVALON",    name:"Grailseeker",         icon:"https://render.albiononline.com/v1/item/T4_2H_QUARTERSTAFF_AVALON.png?quality=1&size=128"},
  {id:"2H_DOUBLEBLADEDSTAFF_CRYSTAL",name:"Phantom Twinblade", icon:"https://render.albiononline.com/v1/item/T4_2H_DOUBLEBLADEDSTAFF_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

["Shapeshifter Staves", [
  {id:"2H_SHAPESHIFTER_SET1",  name:"Prowling Staff",  icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_SET1.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_SET2",  name:"Rootbound Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_SET2.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_SET3",  name:"Primal Staff",    icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_SET3.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_MORGANA",name:"Bloodmoon Staff",icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_MORGANA.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_HELL",  name:"Hellspawn Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_HELL.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_KEEPER",name:"Earthrune Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_KEEPER.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_AVALON",name:"Lightcaller",     icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_AVALON.png?quality=1&size=128"},
  {id:"2H_SHAPESHIFTER_CRYSTAL",name:"Stillgaze Staff",icon:"https://render.albiononline.com/v1/item/T4_2H_SHAPESHIFTER_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

["Nature Staves", [
  {id:"MAIN_NATURESTAFF",        name:"Nature Staff",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_NATURESTAFF.png?quality=1&size=128"},
  {id:"2H_NATURESTAFF",          name:"Great Nature Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_NATURESTAFF.png?quality=1&size=128"},
  {id:"2H_WILDSTAFF",            name:"Wild Staff",         icon:"https://render.albiononline.com/v1/item/T4_2H_WILDSTAFF.png?quality=1&size=128"},
  {id:"MAIN_NATURESTAFF_KEEPER", name:"Druidic Staff",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_NATURESTAFF_KEEPER.png?quality=1&size=128"},
  {id:"2H_NATURESTAFF_HELL",     name:"Blight Staff",       icon:"https://render.albiononline.com/v1/item/T4_2H_NATURESTAFF_HELL.png?quality=1&size=128"},
  {id:"2H_NATURESTAFF_KEEPER",   name:"Rampant Staff",      icon:"https://render.albiononline.com/v1/item/T4_2H_NATURESTAFF_KEEPER.png?quality=1&size=128"},
  {id:"MAIN_NATURESTAFF_AVALON", name:"Ironroot Staff",     icon:"https://render.albiononline.com/v1/item/T4_MAIN_NATURESTAFF_AVALON.png?quality=1&size=128"},
  {id:"MAIN_NATURESTAFF_CRYSTAL",name:"Forgebark Staff",    icon:"https://render.albiononline.com/v1/item/T4_MAIN_NATURESTAFF_CRYSTAL.png?quality=1&size=128"},
], "Hunter"],

// ── Mage ──────────────────────────────────────────────────────────────────────
["Fire Staves", [
  {id:"MAIN_FIRESTAFF",         name:"Fire Staff",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_FIRESTAFF.png?quality=1&size=128"},
  {id:"2H_FIRESTAFF",           name:"Great Fire Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_FIRESTAFF.png?quality=1&size=128"},
  {id:"2H_INFERNOSTAFF",        name:"Infernal Staff",   icon:"https://render.albiononline.com/v1/item/T4_2H_INFERNOSTAFF.png?quality=1&size=128"},
  {id:"MAIN_FIRESTAFF_KEEPER",  name:"Wildfire Staff",   icon:"https://render.albiononline.com/v1/item/T4_MAIN_FIRESTAFF_KEEPER.png?quality=1&size=128"},
  {id:"2H_FIRESTAFF_HELL",      name:"Brimstone Staff",  icon:"https://render.albiononline.com/v1/item/T4_2H_FIRESTAFF_HELL.png?quality=1&size=128"},
  {id:"2H_INFERNOSTAFF_MORGANA",name:"Blazing Staff",    icon:"https://render.albiononline.com/v1/item/T4_2H_INFERNOSTAFF_MORGANA.png?quality=1&size=128"},
  {id:"2H_FIRE_RINGPAIR_AVALON",name:"Dawnsong",         icon:"https://render.albiononline.com/v1/item/T4_2H_FIRE_RINGPAIR_AVALON.png?quality=1&size=128"},
  {id:"MAIN_FIRESTAFF_CRYSTAL", name:"Flamewalker Staff",icon:"https://render.albiononline.com/v1/item/T4_MAIN_FIRESTAFF_CRYSTAL.png?quality=1&size=128"},
], "Mage"],

["Holy Staves", [
  {id:"MAIN_HOLYSTAFF",         name:"Holy Staff",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_HOLYSTAFF.png?quality=1&size=128"},
  {id:"2H_HOLYSTAFF",           name:"Great Holy Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_HOLYSTAFF.png?quality=1&size=128"},
  {id:"2H_DIVINESTAFF",         name:"Divine Staff",     icon:"https://render.albiononline.com/v1/item/T4_2H_DIVINESTAFF.png?quality=1&size=128"},
  {id:"MAIN_HOLYSTAFF_MORGANA", name:"Lifetouch Staff",  icon:"https://render.albiononline.com/v1/item/T4_MAIN_HOLYSTAFF_MORGANA.png?quality=1&size=128"},
  {id:"2H_HOLYSTAFF_HELL",      name:"Fallen Staff",     icon:"https://render.albiononline.com/v1/item/T4_2H_HOLYSTAFF_HELL.png?quality=1&size=128"},
  {id:"2H_HOLYSTAFF_UNDEAD",    name:"Redemption Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_HOLYSTAFF_UNDEAD.png?quality=1&size=128"},
  {id:"MAIN_HOLYSTAFF_AVALON",  name:"Hallowfall",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_HOLYSTAFF_AVALON.png?quality=1&size=128"},
  {id:"2H_HOLYSTAFF_CRYSTAL",   name:"Exalted Staff",    icon:"https://render.albiononline.com/v1/item/T4_2H_HOLYSTAFF_CRYSTAL.png?quality=1&size=128"},
], "Mage"],

["Arcane Staves", [
  {id:"MAIN_ARCANESTAFF",          name:"Arcane Staff",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_ARCANESTAFF.png?quality=1&size=128"},
  {id:"2H_ARCANESTAFF",            name:"Great Arcane Staff",icon:"https://render.albiononline.com/v1/item/T4_2H_ARCANESTAFF.png?quality=1&size=128"},
  {id:"2H_ENIGMATICSTAFF",         name:"Enigmatic Staff",   icon:"https://render.albiononline.com/v1/item/T4_2H_ENIGMATICSTAFF.png?quality=1&size=128"},
  {id:"MAIN_ARCANESTAFF_UNDEAD",   name:"Witchwork Staff",   icon:"https://render.albiononline.com/v1/item/T4_MAIN_ARCANESTAFF_UNDEAD.png?quality=1&size=128"},
  {id:"2H_ARCANESTAFF_HELL",       name:"Occult Staff",      icon:"https://render.albiononline.com/v1/item/T4_2H_ARCANESTAFF_HELL.png?quality=1&size=128"},
  {id:"2H_ENIGMATICORB_MORGANA",   name:"Malevolent Locus",  icon:"https://render.albiononline.com/v1/item/T4_2H_ENIGMATICORB_MORGANA.png?quality=1&size=128"},
  {id:"2H_ARCANE_RINGPAIR_AVALON", name:"Evensong",          icon:"https://render.albiononline.com/v1/item/T4_2H_ARCANE_RINGPAIR_AVALON.png?quality=1&size=128"},
  {id:"2H_ARCANESTAFF_CRYSTAL",    name:"Astral Staff",      icon:"https://render.albiononline.com/v1/item/T4_2H_ARCANESTAFF_CRYSTAL.png?quality=1&size=128"},
], "Mage"],

["Frost Staves", [
  {id:"MAIN_FROSTSTAFF",        name:"Frost Staff",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_FROSTSTAFF.png?quality=1&size=128"},
  {id:"2H_FROSTSTAFF",          name:"Great Frost Staff",icon:"https://render.albiononline.com/v1/item/T4_2H_FROSTSTAFF.png?quality=1&size=128"},
  {id:"2H_GLACIALSTAFF",        name:"Glacial Staff",    icon:"https://render.albiononline.com/v1/item/T4_2H_GLACIALSTAFF.png?quality=1&size=128"},
  {id:"MAIN_FROSTSTAFF_KEEPER", name:"Hoarfrost Staff",  icon:"https://render.albiononline.com/v1/item/T4_MAIN_FROSTSTAFF_KEEPER.png?quality=1&size=128"},
  {id:"2H_ICEGAUNTLETS_HELL",   name:"Icicle Staff",     icon:"https://render.albiononline.com/v1/item/T4_2H_ICEGAUNTLETS_HELL.png?quality=1&size=128"},
  {id:"2H_ICECRYSTAL_UNDEAD",   name:"Permafrost Prism", icon:"https://render.albiononline.com/v1/item/T4_2H_ICECRYSTAL_UNDEAD.png?quality=1&size=128"},
  {id:"MAIN_FROSTSTAFF_AVALON", name:"Chillhowl",        icon:"https://render.albiononline.com/v1/item/T4_MAIN_FROSTSTAFF_AVALON.png?quality=1&size=128"},
  {id:"2H_FROSTSTAFF_CRYSTAL",  name:"Arctic Staff",     icon:"https://render.albiononline.com/v1/item/T4_2H_FROSTSTAFF_CRYSTAL.png?quality=1&size=128"},
], "Mage"],

["Cursed Staves", [
  {id:"MAIN_CURSEDSTAFF",        name:"Cursed Staff",      icon:"https://render.albiononline.com/v1/item/T4_MAIN_CURSEDSTAFF.png?quality=1&size=128"},
  {id:"2H_CURSEDSTAFF",          name:"Great Cursed Staff", icon:"https://render.albiononline.com/v1/item/T4_2H_CURSEDSTAFF.png?quality=1&size=128"},
  {id:"2H_DEMONICSTAFF",         name:"Demonic Staff",      icon:"https://render.albiononline.com/v1/item/T4_2H_DEMONICSTAFF.png?quality=1&size=128"},
  {id:"MAIN_CURSEDSTAFF_UNDEAD", name:"Lifecurse Staff",    icon:"https://render.albiononline.com/v1/item/T4_MAIN_CURSEDSTAFF_UNDEAD.png?quality=1&size=128"},
  {id:"2H_SKULLORB_HELL",        name:"Cursed Skull",       icon:"https://render.albiononline.com/v1/item/T4_2H_SKULLORB_HELL.png?quality=1&size=128"},
  {id:"2H_CURSEDSTAFF_MORGANA",  name:"Damnation Staff",    icon:"https://render.albiononline.com/v1/item/T4_2H_CURSEDSTAFF_MORGANA.png?quality=1&size=128"},
  {id:"MAIN_CURSEDSTAFF_AVALON", name:"Shadowcaller",       icon:"https://render.albiononline.com/v1/item/T4_MAIN_CURSEDSTAFF_AVALON.png?quality=1&size=128"},
  {id:"MAIN_CURSEDSTAFF_CRYSTAL",name:"Rotcaller Staff",    icon:"https://render.albiononline.com/v1/item/T4_MAIN_CURSEDSTAFF_CRYSTAL.png?quality=1&size=128"},
], "Mage"],
];
