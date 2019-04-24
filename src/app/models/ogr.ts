export class Ogr {
    constructor(public assetUrl: string, public posX: number, public posY: number) {

    }

}
export class OgrMonster extends Ogr {
    
    constructor(public initPosX: number, initPosY: number, public amplitude: number = 2, public direction = 1 /* MOVE_RIGHT */) {

        super('/assets/Sprites/os3.png', initPosX, initPosY)
    }
}
