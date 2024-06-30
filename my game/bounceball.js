 let img;
 let bgSound;

function preload() {
    img = loadImage('diamond.png'); 
    bgSound = loadSound('Pokemon RubySapphireEmerald- Littleroot Town.mp3');
}
 let map = {
            tile_size: 16.5,
            keys: [
                {id: 0, colour: '#EEEBDD', solid: 1},
                {id: 1, colour: '#EEEBDD', solid: 0},
                {id: 2, colour: '#1B1717', solid: 1, bounce: 0.20},
                {id: 3, colour: 'rgba(121, 220, 242, 0.4)', friction: {x: 0.9, y: 0.9}, gravity: {x: 0, y: 0.1}, jump: 1, fore: 1},
                {id: 4, colour: '#777', jump: 1},
                {id: 5, colour: '#E373FA', solid: 1, bounce: 1.1},
                {id: 6, colour: '#666', solid: 1, bounce: 0},
                {id: 7, colour: '#73C6FA', solid: 0, script: 'change_colour'},
                {id: 8, img: img , solid: 0, script: 'next_level'},
                {id: 9, colour: '#C93232', solid: 0, script: 'death'},
                {id: 10, colour: '#555', solid: 1},
                {id: 11, colour: '#0FF', solid: 0, script: 'unlock'},
                {id: 12, colour: '#555', solid: 1},
                {id: 13, colour: '#0FF', solid: 0, script: 'unlock2'},
            ],
            data: [
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 6, 6, 6, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                // fire 1
                [2, 1, 1, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 12, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                //fire 2
                [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0,],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                //fire
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 2, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0],
                [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
                [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
                [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                // fire
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 9, 9, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            gravity: { x: 0, y: 0.3 },
            vel_limit: { x: 20, y: 16 },
            movement_speed: { jump: 6, left: 0.3, right: 0.3 },
            player: { x: 2, y: 2, colour: '#FF9900' },
            scripts: {
                change_colour: 'game.player.colour = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);',
                next_level: 'alert("Yay! You won! Reloading map."); game.load_map(map);',
                death: 'alert("You died!"); game.load_map(map);',
                unlock: 'game.current_map.keys[10].solid = 0; game.current_map.keys[10].colour = "#888";',
                unlock2: 'game.current_map.keys[12].solid = 0; game.current_map.keys[12].colour = "#333";'
            }
        };

        let game;
        let initialMapState = JSON.parse(JSON.stringify(map)); // Save the initial map state

        function setup() {
            let myCanvas = createCanvas(1280, 720);
            myCanvas.parent('game-container');
            game = new Clarity();
            game.set_viewport(width, height);
            game.load_map(map);
            game.limit_viewport = true; 
            // background(0);
            noStroke();
            bgSound.loop();
        }

        function draw() {
           
            game.update();
            game.draw();
        }

        class Clarity {
            constructor() {
                this.alert_errors = false;
                this.log_info = true;
                this.limit_viewport = false;
                this.jump_switch = 5;
                this.viewport = { x: 200, y: 200 };
                this.key = { left: false, right: false, up: false };
                this.player = { loc: { x: 0, y: 0 }, vel: { x: 0, y: 0 }, can_jump: true };
                this.last_tile = null;

                window.onkeydown = this.keydown.bind(this);
                window.onkeyup = this.keyup.bind(this);
            }

            log(message) {
                if (this.log_info) console.log(message);
            }

            set_viewport(x, y) {
                this.viewport.x = x;
                this.viewport.y = y;
            }

            keydown(e) {
                switch (e.keyCode) {
                    case 37:
                        this.key.left = true;
                        break;
                    case 38:
                        this.key.up = true;
                        break;
                    case 39:
                        this.key.right = true;
                        break;
                }
            }

            keyup(e) {
                switch (e.keyCode) {
                    case 37:
                        this.key.left = false;
                        break;
                    case 38:
                        this.key.up = false;
                        break;
                    case 39:
                        this.key.right = false;
                        break;
                }
            }

            load_map(map) {
                if (!map || !map.data || !map.keys) {
                    this.log('Error: Invalid map data!');
                    return false;
                }

                this.current_map = map;
                this.current_map.background = map.background || '#333';
                this.current_map.gravity = map.gravity || { x: 0, y: 0 };
                this.tile_size = map.tile_size || 16;
                this.current_map.width = 0;
                this.current_map.height = 0;

                map.keys.forEach(key => {
                       if (key.id === 8 && img) { // Check for ID 8 and loaded image
                         key.img = img;        // Associate the image with the key
                         } 
                    map.data.forEach((row, y) => {
                        this.current_map.height = Math.max(this.current_map.height, y);
                        row.forEach((tile, x) => {
                            this.current_map.width = Math.max(this.current_map.width, x);
                            if (tile == key.id) this.current_map.data[y][x] = key;
                        });
                    });
                });

                this.current_map.width_p = this.current_map.width * this.tile_size;
                this.current_map.height_p = this.current_map.height * this.tile_size;
                this.player.loc.x = map.player.x * this.tile_size || 0;
                this.player.loc.y = map.player.y * this.tile_size || 0;
                this.player.colour = map.player.colour || '#E44B4B';
                this.key.left = false;
                this.key.up = false;
                this.key.right = false;
                this.camera = { x: 0, y: 0 };
                this.player.vel = { x: 0, y: 0 };

                this.log('Successfully loaded map data.');
                return true;
            }

            get_tile(x, y) {
                return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
            }

            draw_tile(x, y, tile) {
                if (tile.img) {
                    image(tile.img, x, y, this.tile_size, this.tile_size,180,0,500,500); 
                } else if (tile.colour) {
                    fill(tile.colour);
                    rect(x, y, this.tile_size, this.tile_size);
                }
              }

            draw_map(fore) {
                for (let y = 0; y < this.current_map.data.length; y++) {
                    for (let x = 0; x < this.current_map.data[y].length; x++) {
                        if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {
                            let t_x = (x * this.tile_size) - this.camera.x;
                            let t_y = (y * this.tile_size) - this.camera.y;
                            if (t_x < -this.tile_size || t_y < -this.tile_size || t_x > this.viewport.x || t_y > this.viewport.y) continue;
                            this.draw_tile(t_x, t_y, this.current_map.data[y][x]);
                        }
                    }
                }
                if (!fore) this.draw_map(true);
            }

            move_player() {
                let tX = this.player.loc.x + this.player.vel.x;
                let tY = this.player.loc.y + this.player.vel.y;
                let offset = Math.round((this.tile_size / 2) - 1);
                let tile = this.get_tile(Math.round(this.player.loc.x / this.tile_size), Math.round(this.player.loc.y / this.tile_size));

                if (tile.gravity) {
                    this.player.vel.x += tile.gravity.x;
                    this.player.vel.y += tile.gravity.y;
                } else {
                    this.player.vel.x += this.current_map.gravity.x;
                    this.player.vel.y += this.current_map.gravity.y;
                }

                if (tile.friction) {
                    this.player.vel.x *= tile.friction.x;
                    this.player.vel.y *= tile.friction.y;
                }

                let t_y_up = Math.floor(tY / this.tile_size);
                let t_y_down = Math.ceil(tY / this.tile_size);
                let y_near1 = Math.round((this.player.loc.y - offset) / this.tile_size);
                let y_near2 = Math.round((this.player.loc.y + offset) / this.tile_size);
                let t_x_left = Math.floor(tX / this.tile_size);
                let t_x_right = Math.ceil(tX / this.tile_size);
                let x_near1 = Math.round((this.player.loc.x - offset) / this.tile_size);
                let x_near2 = Math.round((this.player.loc.x + offset) / this.tile_size);
                let top1 = this.get_tile(x_near1, t_y_up);
                let top2 = this.get_tile(x_near2, t_y_up);
                let bottom1 = this.get_tile(x_near1, t_y_down);
                let bottom2 = this.get_tile(x_near2, t_y_down);
                let left1 = this.get_tile(t_x_left, y_near1);
                let left2 = this.get_tile(t_x_left, y_near2);
                let right1 = this.get_tile(t_x_right, y_near1);
                let right2 = this.get_tile(t_x_right, y_near2);

                if (tile.jump && this.jump_switch > 15) {
                    this.player.can_jump = true;
                    this.jump_switch = 0;
                } else this.jump_switch++;

                this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
                this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);

                this.player.loc.x += this.player.vel.x;
                this.player.loc.y += this.player.vel.y;
                this.player.vel.x *= 0.9;

                if (left1.solid || left2.solid || right1.solid || right2.solid) {
                    while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid
                        || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
                        this.player.loc.x += 0.1;

                    while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid
                        || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
                        this.player.loc.x -= 0.1;

                    let bounce = 0;
                    if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
                    if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
                    if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
                    if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;
                    this.player.vel.x *= -bounce || 0;
                }

                if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {
                    while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid
                        || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
                        this.player.loc.y += 0.1;

                    while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid
                        || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
                        this.player.loc.y -= 0.1;

                    let bounce = 0;
                    if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
                    if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
                    if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
                    if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;
                    this.player.vel.y *= -bounce || 0;

                    if ((bottom1.solid || bottom2.solid) && !tile.jump) {
                        this.player.on_floor = true;
                        this.player.can_jump = true;
                    }
                }

                let c_x = Math.round(this.player.loc.x - this.viewport.x / 2);
                let c_y = Math.round(this.player.loc.y - this.viewport.y / 2);
                let x_dif = Math.abs(c_x - this.camera.x);
                let y_dif = Math.abs(c_y - this.camera.y);

                if (x_dif > 5) {
                    let mag = Math.round(Math.max(1, x_dif * 0.1));
                    if (c_x != this.camera.x) {
                        this.camera.x += c_x > this.camera.x ? mag : -mag;
                        if (this.limit_viewport) {
                            this.camera.x = Math.min(this.current_map.width_p - this.viewport.x + this.tile_size, this.camera.x);
                            this.camera.x = Math.max(0, this.camera.x);
                        }
                    }
                }

                if (y_dif > 5) {
                    let mag = Math.round(Math.max(1, y_dif * 0.1));
                    if (c_y != this.camera.y) {
                        this.camera.y += c_y > this.camera.y ? mag : -mag;
                        if (this.limit_viewport) {
                            this.camera.y = Math.min(this.current_map.height_p - this.viewport.y + this.tile_size, this.camera.y);
                            this.camera.y = Math.max(0, this.camera.y);
                        }
                    }
                }

                if (this.last_tile != tile.id && tile.script) {
                    eval(this.current_map.scripts[tile.script]);
                }
                this.last_tile = tile.id;
            }

            update_player() {
                if (this.key.left) {
                    if (this.player.vel.x > -this.current_map.vel_limit.x)
                        this.player.vel.x -= this.current_map.movement_speed.left;
                }

                if (this.key.up) {
                    if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {
                        this.player.vel.y -= this.current_map.movement_speed.jump;
                        this.player.can_jump = false;
                    }
                }

                if (this.key.right) {
                    if (this.player.vel.x < this.current_map.vel_limit.x)
                        this.player.vel.x += this.current_map.movement_speed.left;
                }

                this.move_player();
            }

            draw_player() {
                fill(this.player.colour);
                ellipse(
                    this.player.loc.x + this.tile_size / 2 - this.camera.x,
                    this.player.loc.y + this.tile_size / 2 - this.camera.y,
                    this.tile_size - 2,
                  
                );
            }

            update() {
                this.update_player();
            }

            draw() {
                this.draw_map(false);
                this.draw_player();
            }
        }

        // Modify the death script to reload the initial map state
        map.scripts.death = 'alert("You died!"); game.load_map(initialMapState);';

        function startGame() {
            new p5(function (p) {
                p.setup = setup;
                p.draw = draw;
            });
        }

        document.addEventListener('DOMContentLoaded', (event) => {
          const startScreen = document.getElementById('start-screen');
          const startButton = document.getElementById('start-button');
          const gameContainer = document.getElementById('game-container');

          startButton.addEventListener('click', () => {
              startScreen.style.display = 'none';
              gameContainer.style.display = 'block';
              startGame();
            });
        });
