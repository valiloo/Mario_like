
export class Slim {
    constructor(public assetUrl: string,
                public posX: number, 
                public posY: number) {
    }
}
export class SlimMonster extends Slim {
    
    constructor(public  initPosX: number, 
                public  initPosY: number, 
                public amplitude: number = 3, 
                public direction = 1 /* MOVE_RIGHT */,
                public scaleX = -1) {

        super('/assets/Sprites/slim.png', initPosX, initPosY)
    }
}
