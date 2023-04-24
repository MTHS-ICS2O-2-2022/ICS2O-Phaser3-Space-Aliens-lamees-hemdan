/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved.
//
// Created by: Lamees Hemdan
// Created on: April 2023
// This is the splash scene

/** 
* This class is the splash scene 
*/
  class SplashScene extends Phaser.Scene {
  /** 
  * This method is the constructor 
  */
  constructor() {
    super({ key: 'splashScene' })
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
    console.log("Splash Scene")
  }

  /** 
   * Can be defined on your own scenes 
   * Use it to create your own game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own scenes
   * This method is called once per game step while game is running
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
    */
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScene
