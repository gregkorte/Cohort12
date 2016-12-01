'use strict';

let arena = new Battledome.Arena();

let bots = ['Hal9000', 'MCP', 'RedQueen', 'Amee', 'TX', 'NS5', 'Project2501', 'Grevious', 'EVA', 'Sentinel', 'Gort', 'Microbot']

let p1name = $('.p1Input');
let p2name = $('.p2Input');
let p1index = null;
let p2index = null;
let p1modCount = 0;
let p2modCount = 0;
let p1weaponCount = 0;
let p2weaponCount = 0;


// Select an image for player setup //

$('.p1Image').click(function(){
  if (p1index === bots.length -1 || p1index === null){
    p1index = 0;
  } else if (p1index >= 0) {
    p1index++;
  }
  if (p1index === p2index){
    p1index++;
  }
  playerSetup('player1', p1name.val(), 'p1', p1index)
})

$('.p2Image').click(function(){
  if (p2index === bots.length -1 || p2index === null){
    p2index = 0;
  } else if (p2index >= 0) {
    p2index++;
  }
  if (p2index === p1index){
    p2index++;
  }
  playerSetup('player2', p2name.val(), 'p2', p2index)
})

// Player setup function //

function playerSetup(player, name, pNumber, currentIndex){
  arena.setPlayer(player, name);
  let p = arena[player];
  p.setBot(bots[currentIndex]);
  botStats(p.bot, pNumber);
  updateStats(p.bot, pNumber);
  updateWeapons(p.bot, player, pNumber);
  updateMods(p.bot, player, pNumber);
}

// Get selected bot image //

function botStats(bot, player){
  $(`.${player}Image`).css(`background-image`, `url(${bot.image})`)
}

/*&#9660;*/

// Bot stats to DOM //

function updateStats(bot, player){
  $(`.${player}Stats`).html(`<h2>${bot.name}`);
  let stats = `<div><div class='selectionLink' data-toggle='collapse' data-target='#${player}abilities'><span class='arrow'>&#9654;</span> Abilities</div><div><ul id='${player}abilities' class='collapse'>`;
  for (let key in bot){
    if (typeof(bot[key]) != 'number' || isNaN(bot[key]) ){
      continue;
    }
    stats += `<li>${key}<span class='abilityScore'>${bot[key]}</span></li>`
  }
  stats += `</div>`
  $(`.${player}Stats`).append(stats);
}

// Bot weapons to DOM //

function updateWeapons(bot, player, pNumber){
  console.log(player)
  let weapons = `<div><div class='selectionLink' data-toggle='collapse' data-target='#${pNumber}weapons'><span class='arrow'>&#9654;</span> Available Weapons</div><div><ul id='${pNumber}weapons' class='collapse'>`;
  let weaponCache;
  for (let key in bot){
    if (key === 'WeaponsAllowed'){
      weaponCache = bot[key];
    }
  }
  for (let weapon in weaponCache){
    weapons += `<li id='${weaponCache[weapon]}' class='${player}weapon'>${weaponCache[weapon]}</li>`
  }
  weapons += `</div>`
  $(`.${pNumber}Stats`).append(weapons);
  loadSelectionEvents('weapons', player);
}

// Bot mods to DOM //

function updateMods(bot, player, pNumber){
  let mods = `<div><div class='selectionLink' data-toggle='collapse' data-target='#${pNumber}mods'><span class='arrow'>&#9654;</span> Available Mods</div><div><ul id='${pNumber}mods' class='collapse'>`;
  let modBank;
  for (let key in bot){
    if (key === 'ModsAllowed'){
      modBank = bot[key];
    }
  }
  for (let mod in modBank){
    mods += `<li id='${modBank[mod]}' class='${player}mod'>${modBank[mod]}</li>`
  }
  mods += `</div>`
  $(`.${pNumber}Stats`).append(mods);
  loadSelectionEvents('mods', player);
}

// Load selection events //

function loadSelectionEvents(type, player) {
  switch (type){
    case 'weapons':
      $(`.${player}weapon`).each(function(){
        loadWeaponEvents(this, player, type);
      })
      break;
    case 'mods':
      $(`.${player}mod`).each(function(){
        loadModEvents(this, player, type);
      })
      break;
  }
}

// Load weapons selection events //

function loadWeaponEvents(weapons, player, type){
  $(weapons).click(function(){
    addSelection(weapons);
    let p = arena[player].bot;
    p.setWeapon($(weapons).prop('id'), modifyCount(`${type}`, player));
    console.log(arena)
  });
}

// Load mod selection events //

function loadModEvents(mods, player, type){
  $(mods).click(function(){
    addSelection(mods);
    let p = arena[player].bot;
    p.setMod($(mods).prop('id'), modifyCount(`${type}`, player));
    console.log(arena)
  });
}

// Define selected class //

function addSelection(selector) {
  if ($(selector).hasClass('selected')){
    console.log('Selected detected. Deselecting now.')
    $(selector).toggleClass('selected').html(`${$(selector).prop('id')}`);
  } else {
    console.log('No selected class. Add checkmark.')
    $(`<span class='check'>&#10004;</span>`).appendTo(selector).parent().toggleClass('selected')
  }
}

// Modify and monitor selection option count //

function modifyCount(type, player) {
  console.log('Modifying count...');
  if (player === 'player1' && type === 'mods'){
    console.log('Accessing player1 mods');
    if (p1modCount === 1){
      console.log('p1modCount = 1. Set to zero');
      p1modCount = 0;
      optionState(type, player);
      return p1modCount;
    } else {
      console.log('Increment p1modCount.');
      p1modCount++;
      optionState(type, player);
      return p1modCount;
    }
  } else if (player === 'player2' && type === 'mods'){
    console.log('Accessing player2 mods')
    if (p2modCount === 1){
      console.log('p2modCount = 1. Set to zero');
      p2modCount = 0;
      optionState(type, player);
      return p2modCount;
    } else {
      console.log('Increment p2modCount.');
      p2modCount++;
      optionState(type, player);
      return p2modCount;
    }
  }
}

function optionState(type, player){
  console.log('optionState running.')
  console.log(`Selecting ${type} case.`)
  switch (type) {
    // case 'weapons':
    //   $(`.${player}weapon`).each(function(){
    //     if ((p1weaponCount > 0 || p1weaponCount < 4) && !$(this).hasClass('selected')){
    //       console.log('Selected class detected. Disabling clicks.')
    //       $(this).off('click').addClass('disabled');
    //     } else {
    //       console.log('Selected class not detected. Enabling all clicks.')
    //       $(this).on('click').removeClass('disabled');
    //     }
    //     if (p1weaponCount === 0) {
    //       $(this).removeClass('disabled').on('click');
    //       loadWeaponEvents(this, player, type);
    //     }
    //   })
    // break;
    case 'mods':
      $(`.${player}mod`).each(function(){
        console.log('p1modCount = ', p1modCount)
        if ((p1modCount === 1 || p2modCount === 1) && !$(this).hasClass('selected')){
          console.log('Selected class detected. Disabling unselected click events.')
          console.log(this)
          $(this).off('click').addClass('disabled');
        } else if (p1modCount === 0 || p2modCount === 0) {
          $(this).removeClass('disabled').on('click');
          loadModEvents(this, player, type);
        }
      })
    break;
  }
}


// {
//           console.log('Selected class not detected. Enabling all click events.')
//           $(this).on('click').removeClass('disabled');
//         }

// function botSelectionMusic(){
//   let audio = $('#audio');
//   audio[0].play();

//   audio.muted = true;
//   if (!muted){
//     console.log('not muted');
//   } else {
//     audio.animate({volume: 1}, 1000, )
//   }
// }

// botSelectionMusic();
