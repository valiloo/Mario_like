
export class Monster {
    constructor(public assetUrl: string,
                public posX: number, 
                public posY: number) {
    }
}
export class OsMonster extends Monster {
    
    constructor(public  initPosX: number, 
                public  initPosY: number, 
                public amplitude: number = 3, 
                public direction = 1 /* MOVE_RIGHT */,
                public scaleX = -1,
                public isFlying = false,
                public isRotating = 0) {

        super('/assets/Sprites/os3.png', initPosX, initPosY)
    }


}
