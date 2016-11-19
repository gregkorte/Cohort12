'use strict';

let arena = new Battledome.Arena();

let bots = ['Hal9000', 'MCP', 'RedQueen', 'Amee', 'TX', 'NS5', 'Project2501', 'Grevious', 'EVA', 'Sentinel', 'Gort', 'Microbot']

let player1 = $('.p1Input');
let player2 = $('.p2Input');
let p1index = null;
let p2index = null;

$('.p1Image').click(function(){
  console.log(p1index, p2index)
  if (p1index === bots.length -1 || p1index === null){
    p1index = 0;
  }
  if (p1index === p2index){
    p1index++;
  } else {
    p1index++;
  }
  arena.setPlayer('player1', player1.val());
  arena.player1.setBot(bots[p1index]);
  botStats(arena.player1.bot, 'p1');
  updateStats(arena.player1.bot, 'p1');
  updateWeapons(arena.player1.bot, 'p1');
  updateMods(arena.player1.bot, 'p1');
  console.log(p1index, p2index)
})

$('.p2Image').click(function(){
  console.log(p2index, p1index)
  if (p2index === bots.length -1 || p2index === null){
    p2index = 0;
  }
  if (p2index === p1index){
    p2index++;
  } else {
    p2index++;
  }
  arena.setPlayer('player2', player2.val());
  arena.player2.setBot(bots[p2index]);
  botStats(arena.player2.bot, 'p2');
  updateStats(arena.player2.bot, 'p2');
  updateWeapons(arena.player2.bot, 'p2');
  updateMods(arena.player2.bot, 'p2');
  console.log(p2index, p1index)
})

function botStats(bot, player){
  $(`.${player}Image`).css(`background`, `url(${bot.image})`)
}

function updateStats(bot, player){
  $(`.${player}Stats`).html(`<h2>${bot.name}`);
  let stats = `<table class="table"><thead><tr><th colspan='2'>Abilities</tr></thead><tbody>`;
  for (let key in bot){
    if (typeof(bot[key]) != 'number' || bot[key] === 'NaN'){
      continue;
    }
    stats += `<thead>
              <tr>
                <td>${key}</td>
                <td>${bot[key]}</td>
              </tr>`
  }
  stats += `</tbody></table>`
  $(`.${player}Stats`).append(stats);
}

function updateWeapons(bot, player){
  let weapons = `<table class="table"><thead><tr><th colspan='2'>Available Weapons</tr></thead><tbody>`;
  let weaponCache;
  for (let key in bot){
    if (key === 'WeaponsAllowed'){
      weaponCache = bot[key];
    }
  }
  for (let weapon in weaponCache){
    weapons += `<thead>
                <tr>
                  <td>${weaponCache[weapon]}</td>
                </tr>`
  }
  weapons += `</tbody></table>`
  $(`.${player}Stats`).append(weapons);
}

function updateMods(bot, player){
  let mods = `<table class="table"><thead><tr><th colspan='2'>Available Mods</tr></thead><tbody>`;
  let modBank;
  for (let key in bot){
    if (key === 'ModsAllowed'){
      modBank = bot[key];
    }
  }
  for (let mod in modBank){
    mods += `<thead>
                <tr>
                  <td>${modBank[mod]}</td>
                </tr>`
  }
  mods += `</tbody></table>`
  $(`.${player}Stats`).append(mods);
}

// arena.setBg('Space');

// arena.setPlayer('player1', 'Titan');
// arena.player1.setBot('Hal9000');

// arena.player1.bot.setWeapon('AirLock', 1);
// arena.player1.bot.setWeapon('PowerKill', 2);
// arena.player1.bot.setWeapon('LightDisc', 3)
// arena.player1.bot.setMod('AccessControl', 1);
// arena.player1.bot.setMod('AcquireFunction', 2);

// arena.setPlayer('player2', 'Strange');
// arena.player2.setBot('TX');

// arena.player2.bot.setWeapon('AirLock', 1);
// arena.player2.bot.setWeapon('PowerKill', 2);
// arena.player2.bot.setWeapon('LightDisc', 3)
// arena.player2.bot.setMod('AccessControl', 1);
// arena.player2.bot.setMod('AcquireFunction', 2);