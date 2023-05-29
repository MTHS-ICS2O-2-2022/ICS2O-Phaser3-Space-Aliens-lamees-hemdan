/* global Phaser */

// Copyright (c) 2023 Lamees Hemdan rights reserved.
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This is the splash scene

/** 
* This class is the splash scene 
*/
  class GameScene extends Phaser.Scene {
    // create an alien
    createAlien () {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1// this will get a number between 1 and 1920
    let alienXVelocity = Math.floor(Math.random() * 50) + 1// this will get a number between 1 and 50
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1// this will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(alienXLocation, -100, "alien")
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }
  /** 
  * This method is the constructor 
  */
  constructor() {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
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
    // Image
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
    this.load.image('alien', 'assets/alien.png')
    // Sound
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
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

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()

    // Collisions between missiles and aliens
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      missileCollide.destroy()
      alienCollide.destroy()
      this.sound.play('explosion')
      this.createAlien()
      this.createAlien()
    }.bind(this))
  }
  
  /**
   * Should be overridden by your own scenes
   * This method is called once per game step while game is running
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
    */
    update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
