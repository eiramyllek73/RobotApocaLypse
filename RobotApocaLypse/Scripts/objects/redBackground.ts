/// <reference path="../managers/asset.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
the controlling of the game's background
*/
module objects {
    // Background Class
    export class RedBackground extends createjs.Bitmap {
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(game: createjs.Container) {
            this.game = game;
            super(managers.Assets.loader.getResult("red1"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this);
        }

        update() {
            this.y += this.dy;
            if (this.y >= 0) {
                this.reset();
            }
        }

        reset() {
            this.y = -960;
        }

        destroy() {
            game.removeChild(this);
        }
    }

} 