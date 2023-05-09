/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved.
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This is the splash scene

/** 
* This class is the splash scene 
*/
  class GameScene extends Phaser.Scene {
  /** 
  * This method is the constructor 
  */
  constructor() {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
  }

/**
  * Can be defined on your own Scenes
  * This method is called by the Scene Manager when the scene starts,
  * before preload() and create()
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
  */
  init(data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  /**
   * Can be defined on your own Scenes
   * Use it to load assets
   */
  preload() {
    console.log("Game Scene")

    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
  }

  /** 
   * Can be defined on your own scenes 
   * Use it to create your own game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }
  
  /**
   * Should be overridden by your own scenes
   * This method is called once per game step while game is running
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
    */
  update(time, delta) {
    // pass
  }
}

export default GameScene
