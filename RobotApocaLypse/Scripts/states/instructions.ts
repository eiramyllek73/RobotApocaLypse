/// <reference path="../constants.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
instructions state of this game
*/
module states {
    // Scene Variables
    export var backButton: objects.Button;
    var instructionsFont: string = constants.LABEL_FONT;
    var lineSpace: number = 45;
    var buttonPosition: number = 0.8;

    // Back Button Event Handler
    export function backButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    // Instruction State
    export function instructionState() {
        red1.update();
    }

    // Instructions Scene
    export function Instructions() {
        var gameInstructions = [];
        var instructionsArray = [];

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        red1 = new objects.RedBackground(game);

        instructionsArray = [
            "Artificial Intelligence has taken over Earth",
            "...Humanity will soon become extinct.",
            "You are the only hope.",
            "The robot army belongs to evil master mind, NinjaBob",
            "For every robot you kill, you win 100 points.",
            "Beware of NinjaBob's poisonous crystal bombs-",
            "Each time you collide with one, you lose a life.",
            "Lose 3 lives and the game is over.",
            "Steer with the mouse, or by touching the screen.",
            "Good Luck!"
        ];

        // Adjust Instructions for smaller screen size
        if (screenScale < 1) {
            instructionsFont = "12px Utility";
            lineSpace = 30;
            buttonPosition = 0.5
        }

        // Display each line of instructions
        for (var line = 0; line < instructionsArray.length; line++) {

            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.LABEL_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.05;
            gameInstructions[line].y = 20 + (lineSpace * line);
            
            game.addChild(gameInstructions[line]);
        }

        // Display Back Button
        backButton = new objects.Button(stage.canvas.width * buttonPosition, 430, "backbutton");
        game.addChild(backButton);
        backButton.addEventListener("click", backButtonClicked);
        
        // Show Cursor
        stage.cursor = "default";

        // Add Scene to Game Container
        stage.addChild(game);
    }
} 