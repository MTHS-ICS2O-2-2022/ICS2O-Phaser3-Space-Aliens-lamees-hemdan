/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved.
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This is the Title Scene

/** 
* This class is the Title scene 
*/
  class TitleScene extends Phaser.Scene {
  /** 
  * This method is the constructor 
  */
  constructor() {
    super({ key: "titleScene" })
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
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/alien_screen_image.jpg")
  }

  /** 
   * Can be defined on your own scenes 
   * Use it to create your own game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
    .sprite(0,0,"titleSceneBackground")
    .setScale(2.75) 
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle )
      .setOrigin(0.5)
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

export default TitleScene
