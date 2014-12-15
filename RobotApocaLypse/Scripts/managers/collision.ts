/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/hero.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles all of the 
collision functions for this game
*/

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private hero: objects.Hero;
        private crystal: objects.Crystal;
        private robot: objects.Enemy;
        private crystals = [];
        private crystal = [];
        private bullets = [];
        private scoreboard: objects.Scoreboard;
        private game: createjs.Container;

        constructor(hero: objects.Hero, robot: objects.Enemy, crystals, scoreboard: objects.Scoreboard, game: createjs.Container, enemies?, bullets?) {
            this.hero = hero;
            this.robot = robot;
            this.crystals = crystals;
            this.crystal = enemies;
            this.bullets = bullets;
            this.scoreboard = scoreboard;

            this.game = game;

        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between Hero and any crystal bomb
        private heroAndCrystal(crystal: objects.Crystal) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.hero.x;
            p1.y = this.hero.y;
            p2.x = crystal.x;
            p2.y = crystal.y;
            if (this.distance(p1, p2) < ((this.hero.height * 0.5) + (crystal.height * 0.5))) {
                createjs.Sound.play("poisonBomb");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.hero.x;
                explosion.y = this.hero.y;
                explosion.on("animationend", function (e) { explosion.remove();});
                this.hero.gotoAndPlay("flickerPlane");
                this.hero.onStage = false;
                setTimeout(function (e) {
                    this.hero.gotoAndPlay("Hero");
                    this.hero.onStage = true;
                }, 2000);
                
                this.scoreboard.lives -= 1;
                crystal.reset();
            }
        }

        // check collision between Hero and Robot
        private heroAndRobot() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.hero.x;
            p1.y = this.hero.y;
            p2.x = this.robot.x;
            p2.y = this.robot.y;
            if (this.distance(p1, p2) < ((this.hero.height * 0.5) + (this.robot.height * 0.5))) {
                createjs.Sound.play("coin");
                this.scoreboard.score += 100;
                // increase player's lives every 1500 points
                if (this.scoreboard.score % 1500 == 0) {
                    createjs.Sound.play("lives");
                    this.scoreboard.lives++;
                }
                this.robot.onStage = false;
            }
        }

        
        // check collision between bullet and any enemy object
        private bulletAndEnemy(bullet: objects.Bullet, enemy: objects.Crystal) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = enemy.x;
                explosion.y = enemy.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                this.scoreboard.score += 200;
                enemy.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            if (hero.onStage == true) {
                for (var count = 0; count < constants.CRYSTAL_NUM; count++) {
                    this.heroAndCrystal(this.crystals[count]);
                }
                this.heroAndRobot();

                if (typeof this.crystal != "undefined") {
                    this.heroAndCrystal(this.crystal[0]);

                    if (bulletManager.firing == true) {
                        var len: number = this.bullets.length;
                        for (var count = 0; count < len; count++) {
                            this.bulletAndEnemy(this.bullets[count], this.crystal[0]);
                        }
                    }
                }   
            }
        }


    }
} 