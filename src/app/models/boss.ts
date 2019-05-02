export class Boss {
    constructor(public assetUrl: string, public posX: number, public posY: number) {

    }

}
export class BossMonster extends Boss {
    
    constructor(
        public initPosX: number, initPosY: number, 
        public amplitude: number = 3, 
        public direction = 1,/* MOVE_RIGHT */
        public scaleX = -1,
        public pdv = 20,
        public attack : boolean = false
        )
         {


        super('/assets/Sprites/bigBoss.png', initPosX, initPosY)

    }
}
