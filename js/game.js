/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved.
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This is the Phaser3 game configuration file

  // Scene import statements.
  import SplashScene from './splashScene.js'
  import TitleScene from './titleScene.js'
  import MenuScene from './menuScene.js'
  import GameScene from './gameScene.js'

  // create the new scenes.
  const splashScene = new SplashScene()
  const titleScene = new TitleScene()
  const menuScene = new MenuScene()
  const gameScene = new GameScene()
/**
 * Start Phaser Game
 */
//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    },
  },
  // set background colour
  backgroundColor: '0x5f6e7a',
  Scale: {
    mode: Phaser.Scale.FIT,
  // we place it in the middle of the page.
  autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
  // console.log(game)

  // Load scenes
  // Note: Any "Key" is global and CAN NOT be reused.
  game.scene.add('splashScene', splashScene)
  game.scene.add('titleScene', titleScene)
  game.scene.add('menuScene', menuScene)
  game.scene.add('gameScene', gameScene)

  // The start scene.
  game.scene.start('splashScene')
