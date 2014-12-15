/// <reference path="../managers/asset.ts" />
module objects {
    // Hero Class
    export class Hero extends objects.GameObject {
        private game: createjs.Container;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        constructor(game: createjs.Container) {
            super("Hero");
            this.game = game;
            this.y = 430;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }

        update() {
            // Change plane position with some easing on update
            this.x += (stage.mouseX - this.x) * 0.3;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChildAt(constants.HERO_LEVEL);
        }
    }
}  