export class Ogr {
    constructor(public assetUrl: string, public posX: number, public posY: number) {

    }

}
export class OgrMonster extends Ogr {
    
    constructor(
        public initPosX: number, initPosY: number, 
        public amplitude: number = 3, 
        public direction = 1,/* MOVE_RIGHT */
        public scaleX = -1,
        public isFlying = false,
        public isRotating = 0,
        public width = 32,
        public height = 64
        )
         {


        super('/assets/Sprites/ogr.png', initPosX, initPosY)

    }
}
