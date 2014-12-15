/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/robot.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="objects/orangeBackground.ts" />
/// <reference path="objects/redBackground.ts" />
/// <reference path="../objects/hero.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletmanager.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
the second level state of this game
*/
module states {
    export function Level2State() {
        red1.update();
        crystal.update();
        crystal.update();
        hero.update();

        // One Enemy for now
        enemies[0].update();

        for (var count = 0; count < constants.CRYSTAL_NUM; count++) {
            crystals[count].update();
        }

        bulletManager.update();

        collision.update();
        scoreboard.update();
        levelLabel.update();

        // Change to Game Over State if the player has no lives left
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            hero.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // Fire the bullet when the mouse is clicked
    function mouseDown() {
        bulletManager.firing = true;
    }

    function mouseUp() {
        bulletManager.firing = false;
    }

    export function Level2() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        red1 = new objects.RedBackground(game);
        crystal = new objects.Crystal(game);
        crystal = new objects.Enemy(crystal, game);
        hero = new objects.Hero(game);

        enemies[0] = new objects.crystal(game);

        // Display the Level Label
        levelLabel = new objects.LevelLabel("LEVEL 2");
        createjs.Sound.play("levelUp");

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CRYSTAL_NUM; count++) {
            crystals[count] = new objects.Crystal(game);
        }

        // Show the Scoreboard
        scoreboard.showScoreBoard();

        // Instantiate Bullet Manager
        bulletManager = new managers.BulletManager(hero, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(hero, crystal, crystals, scoreboard, game, enemies, bulletManager.bullets);

        game.addEventListener("mousedown", mouseDown);
        game.addEventListener("pressup", mouseUp);

        stage.addChild(game);
    }
} 