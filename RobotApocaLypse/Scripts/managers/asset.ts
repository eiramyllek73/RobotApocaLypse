/*
Author: Kelly McAlpine 200269425
Project: Final Project - Robot Apocalypse 2D Game
Last Updated: Dec 11/2014
Description: This file handles
all assets for the game (images, sounds & spritesheet)
*/

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "intro", src: "assets/sounds/208818__csmag__icy-logo.wav" },
        { id: "soundtrack", src: "assets/sounds/222044__dneproman__8-bit-space.wav" },
        { id: "levelUp", src: "assets/sounds/218369__airborne80__step-out-of-your-comfort-zone.mp3" },
        { id: "poisonBomb", src: "assets/sounds/251759__misosound__booming-punchy-explosion-close-big-schoeps-mk41.wav" },
        { id: "gameOver", src: "assets/sounds/57364__halomaniac__mission-complete-2-0.mp3" },
        { id: "bullet", src: "assets/sounds/bullet.mp3" },
        { id: "BackButton", src: "assets/images/BackButton1.png" },
        { id: "crystal", src: "assets/images/crystal.png" },
        { id: "Enemy", src: "assets/images/Enemy.png" },
        { id: "Hero", src: "assets/images/Hero.png" },
        { id: "NinjaBob", src: "assets/images/ninjaBob.png" },
        { id: "orange1", src: "assets/images/orangeBackground1.png" },
        { id: "orange2", src: "assets/images/orangeBackground2.png" },
        { id: "red1", src: "assets/images/redBackground1.png" },
        { id: "red2", src: "assets/images/redBackground2.png" },
        { id: "InfoButton", src: "assets/images/InfoButton1.png" },
        { id: "PlayButton", src: "assets/images/PlayButton1.png" },
        { id: "TryAgainButton", src: "assets/images/TryAgainButton.png" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {

"images": ["ObjectsAtlas.png"],
"frames": [

            [364, 204, 100, 41],
            [466, 204, 100, 41],
            [1013, 2, 101, 200],
            [1116, 2, 85, 200],
            [1288, 2, 74, 200],
            [1203, 2, 83, 200],
            [1438, 2, 69, 179],
            [1364, 2, 72, 200],
            [84, 2, 74, 203],
            [660, 2, 129, 200],
            [512, 2, 146, 200],
            [791, 2, 111, 200],
            [904, 2, 107, 200],
            [160, 2, 183, 200],
            [345, 2, 165, 200],
            [568, 204, 100, 41],
            [670, 204, 100, 41],
            [772, 204, 100, 40],
            [874, 204, 100, 40],
            [160, 204, 100, 42],
            [262, 204, 100, 42],
            [1509, 2, 63, 75],
            [1509, 79, 63, 75],
            [2, 2, 80, 225]
        ],
        "animations": {

            "BackButton": {
                frames: [0, 1],
                speed: 0.15
            },
            "Enemy": {
                frames: [2, 3, 4, 5, 6, 7, 8],
                speed: 0.15
            },
            "Hero": {
                frames: [9, 10, 11, 12, 13, 14],
                speed: 0.15
            },    
            "InfoButton": {
                frames: [15, 16],
                speed: 0.15
            },
            "PlayButton": {
                frames: [17, 18],
                speed: 0.15
            },
            "TryAgainButton": {
                frames: [19, 20],
                speed: 0.15
            },
            "crystal": {
                frames: [21, 22],
                speed: 0.15
            },
        "ninjaBob":[23]
},

}

    // BitMap Font SpriteSheet Data object
    var bitMapFontData = {
        "images": ["assets/fonts/utilityFontAtlas.png"],
        "frames": [

            [40, 943, 15, 54],
            [2, 660, 25, 41],
            [25, 974, 13, 41],
            [29, 664, 25, 41],
            [2, 703, 25, 41],
            [2, 617, 28, 41],
            [29, 707, 25, 41],
            [2, 746, 25, 41],
            [29, 750, 25, 41],
            [2, 789, 25, 41],
            [29, 793, 25, 41],
            [2, 59, 37, 56],
            [2, 389, 29, 56],
            [33, 403, 28, 56],
            [2, 331, 30, 56],
            [37, 294, 24, 54],
            [2, 832, 24, 54],
            [2, 447, 29, 55],
            [33, 461, 28, 56],
            [2, 560, 28, 55],
            [33, 519, 28, 56],
            [2, 274, 33, 55],
            [2, 2, 46, 55],
            [2, 162, 35, 54],
            [2, 218, 35, 54],
            [2, 504, 29, 54],
            [39, 165, 22, 41],
            [34, 350, 25, 51],
            [2, 931, 23, 41],
            [28, 836, 24, 52],
            [39, 208, 22, 41],
            [41, 59, 20, 53],
            [39, 251, 22, 41],
            [41, 114, 17, 49],
            [2, 888, 24, 41],
            [32, 621, 28, 41],
            [2, 117, 36, 43],
            [32, 577, 28, 42],
            [28, 890, 23, 51],
            [2, 974, 21, 41]
        ],
        "animations": {

            "!": [0],
            "0": [1],
            "1": [2],
            "2": [3],
            "3": [4],
            "4": [5],
            "5": [6],
            "6": [7],
            "7": [8],
            "8": [9],
            "9": [10],
            "A+": [11],
            "B+": [12],
            "C+": [13],
            "D+": [14],
            "E+": [15],
            "F+": [16],
            "R+": [17],
            "S+": [18],
            "T+": [19],
            "U+": [20],
            "V+": [21],
            "W+": [22],
            "X+": [23],
            "Y+": [24],
            "Z+": [25],
            "a": [26],
            "b": [27],
            "c": [28],
            "d": [29],
            "e": [30],
            "f": [31],
            "s": [32],
            "t": [33],
            "u": [34],
            "v": [35],
            "w": [36],
            "x": [37],
            "y": [38],
            "z": [39]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;
        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.bitMapFont = new createjs.SpriteSheet(bitMapFontData);
        }

    }
} 