export class Druid {
    constructor(public assetUrl: string, public posX: number, public posY: number) {

    }

}
export class DruidMonster extends Druid {
    
    constructor(
        public initPosX: number, initPosY: number, 
        public amplitude: number = 3, 
        public direction = 1,/* MOVE_RIGHT */
        public scaleX = -1
        )
         {


        super('/assets/Sprites/druid.png', initPosX, initPosY)

    }
}
