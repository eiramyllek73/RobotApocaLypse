/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/hero.ts" />
/// <reference path="objects/orangeBackground.ts" />
/// <reference path="objects/redBackground.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
menu state of this game
*/
module states {
    export var PlayButton: objects.Button;
    export var InfoButton: objects.Button;
    export var BackButton: objects.Button;
    export var TryAgainButton: objects.Button;
    var soundtrack: createjs.SoundInstance;

    // Button Event Handlers
    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        hero.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        hero.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // State function
    export function menuState() {
        red1.update();
        hero.update();
    }

    // Body of Menu Scene
    export function menu() {
        
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        red1 = new objects.RedBackground(game);
        hero = new objects.Hero(game);

        soundtrack = createjs.Sound.play('intro', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Robot ApocaLypse");
        
        //Adjust Game Title for Screen Size
        if (screenScale < 1) {
            gameNameLabel.fontSize(40);
        }

        game.addChild(gameNameLabel);

        // Display Instructions Button
        InfoButton = new objects.Button(stage.canvas.width / 2, 230, "InfoButton");
        game.addChild(InfoButton);
        InfoButton.addEventListener("click", InfoButtonClicked);

        // Display Play Button
        PlayButton = new objects.Button(stage.canvas.width / 2, 330, "PlayButton");
        game.addChild(PlayButton);
        PlayButton.addEventListener("click", PlayButtonClicked);

        stage.addChild(game);
    }
} 