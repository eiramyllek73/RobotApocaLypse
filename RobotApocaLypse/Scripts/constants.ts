/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file contains
all of the constants for this game
*/

module constants {
    // Stage Size Constants
    export var GAME_WIDTH: number = 640;
    export var GAME_HEIGHT: number = 480;

    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;
    export var LEVEL2_STATE: number = 4;

    // Game Constants
    export var CRYSTAL_NUM: number = 3;
    export var LABEL_FONT = "28px Utility";
    export var LABEL_COLOUR = "CC0000";
    export var HERO_LIVES = 3;
    export var ENEMY_NUM: number = 1;

    // Layer Constants
    export var BACKGROUND_LEVEL: number = 0;
    export var ROBOT_LEVEL: number = 1;
    export var ENEMY_LEVEL: number = 2;
    export var HERO_LEVEL: number = 3;
    export var CRYSTAL_LEVEL = [4, 5, 6];
    export var SCOREBOARD_LEVEL = 7;
    export var LEVEL_LABEL_LEVEL: number = 8;
}