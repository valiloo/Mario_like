import { extend } from 'webdriver-js-extender';

export class Monster {
    constructor(public assetUrl: string, public posX: number, public posY: number) {

    }

}
export class OsMonster extends Monster {
    constructor(posX: number, posY: number) {
        super('/assets/Sprites/os3.png', posX, posY)
    }
}
