/// <reference path="../managers/asset.ts" />
/// <reference path="enemy.ts" />
module objects {
    export class Enemy extends objects.GameObject {
        private game: createjs.Container;
        private island: objects.Crystal;
        onStage: boolean = true;
        constructor(island: objects.Crystal, game: createjs.Container) {
            super("robot");
            this.game = game;
            this.game.addChild(this);
        }

        update() {
            // move the robot
            if (this.onStage == true) {
                this.x = crystal.image.x;
                this.y = crystal.image.y;
            }
            else {
                //position coin off stage
                this.y = -50;
            }

            // check if island has been reset
            if (crystal.image.y < 0) {
                this.onStage = true;
                this.alpha = 1;
            }
        }
    }
}  