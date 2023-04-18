/* Global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved.
//
// Created by: Mr. Coxall
// Created on: Oct 2020
// This is the Phaser3 game configuration file

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physcis: {
    default: 'arcade',
    arcade: {
      debug: true
    },
  },
  // set background colour
  backgroundColor: '#0x5f6e7a',
  Scale: {
    mode: Phaser.Scale.FIT,
  // we place it in the middle of the page.
  autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)
