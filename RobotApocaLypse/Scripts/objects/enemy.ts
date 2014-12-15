/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy Class
    export class Crystal {
        image: createjs.Sprite;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(game: createjs.Container) {
            this.game = game;

            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            if (this.image.y > stage.canvas.height + this.height) {
                game.removeChildAt(1);
                this.reset();
            }
        }

        private pickImage() {
            switch (Math.floor(Math.random() * 2 + 1)) {
                case 1:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy1");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy2");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy3");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy4");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy5");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "Enemy6");
                    break;
            }
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChildAt(this.image, 1);
        }

        reset() {
            // Swap the image
            this.pickImage();
            // Reset the island image location
            this.image.x = Math.floor(Math.random() * stage.canvas.width);
            this.image.y = -this.height;
        }

        destroy() {
            game.removeChildAt(1);
        }
    }

} 