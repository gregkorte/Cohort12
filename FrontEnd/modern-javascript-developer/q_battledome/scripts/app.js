'use strict';

var arena = new Battledome.Arena();

arena.setBg('Space');

arena.setPlayer('player1', 'Titan');
arena.setPlayer('player2', 'Strange');

arena.player1.setBot('Gort');
arena.player2.setBot('TX');

console.log(arena)

// var r1 = new Battledome.Combatants.Player('Titan');

// r1.setBot('Gort')
// r1.setArena('Space')
// r1.bot.setWeapon('SunDancer')
// r1.bot.setMod('ForceField')

// console.log(r1)
// console.log(Battledome)
