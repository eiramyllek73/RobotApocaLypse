/// <reference path="../objects/button.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="objects/orangeBackground.ts" />
/// <reference path="objects/redBackground.ts" />
/// <reference path="../objects/hero.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../managers/collision.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
play state of this game
*/
module states {
    export function playState() {
        red1.update();
        crystal.update();
        crystal.update();
        hero.update();

        for (var count = 0; count < constants.CRYSTAL_NUM; count++) {
            crystals[count].update();
        }

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

        // Change to Level 2 State if player hits 1000 points
        if (scoreboard.score >= 1000) {
            stage.removeChild(game);
            hero.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }

    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        red1 = new objects.RedBackground(game);
       crystal = new objects.Crystal(game);
        crystal = new objects.Enemy(crystals, game);
        hero = new objects.Hero(game);

        // Display the Level Label
        levelLabel = new objects.LevelLabel("level 1");
        createjs.Sound.play("levelUp");

        // Show Cursor
        stage.cursor = "none";

        // Create multiple crystals
        for (var count = 0; count < constants.CRYSTAL_NUM; count++) {
            crystals[count] = new objects.Crystal(game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(game);

        // Instantiate Collision Manager
        collision = new managers.Collision(hero, crystal, crystals, scoreboard, game);

        stage.addChild(game);

    }
}