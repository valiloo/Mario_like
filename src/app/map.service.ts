import { Injectable } from '@angular/core';

import {  OsMonster, Monster, } from './models/monster';
import {OgrMonster} from './models/ogr';
import { SlimMonster} from './models/slim'
import { DruidMonster} from './models/druid'
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { Piece } from './models/piece';


const VI = 0
const T1 = 1
const T2 = 2
const T3 = 3
const D1 = 4
const D2 = 5
const CG = 6
const CD = 7
const T4 = 8
const P1 = 9
const P2 = 10
const P3 = 11
const F1 = 12
const F2 = 13
const F3 = 14
const D4 = 15
const M1 = 16
const M2 = 17
const M3 = 18
const PG = 19
const PD = 20
const L1 = 21
const K1 = 22
const K2 = 23
const S1 = 24
const F4 = 25
const T5 = 26
const T6 = 27
const P4 = 28
const P5 = 29
const P6 = 30
const P7 = 31
const P8 = 32
const P9 = 33
const PX = 34
const T7 = 35
const LU = 36
const LM = 37
const LT = 38
const LR = 39
const SB = 40
const ST = 41
const SI = 42
const BL = 43
const BT = 44
const KK = 45
const SK = 46
const B1 = 47
const B2 = 48
const B3 = 49
const B4 = 50
const B5 = 51
const B6 = 52


export class Bloc {
  constructor(public textureURL: string, public canGoThrough: boolean, public isEnd: boolean) { }
}



@Injectable({
  providedIn: 'root'
})


export class MapTheme {

  public blocs = {
  }

  constructor() {
    this.blocs[VI] = new Bloc("assets/textures/vide.png", true, false)
    this.blocs[T1] = new Bloc("assets/textures/bloc_pierre.png", false, false)
    this.blocs[T2] = new Bloc("assets/textures/bloc_pierre2.png", false, false)
    this.blocs[T3] = new Bloc("assets/textures/bloc_pierre3.png", false, false)
    this.blocs[T4] = new Bloc("assets/textures/bloc_pierre_coin_droit.png", false, false)
    this.blocs[T5] = new Bloc("assets/textures/leftTopBloc.png", false, false)
    this.blocs[T6] = new Bloc("assets/textures/rightTopBloc.png", false, false)
    this.blocs[T7] = new Bloc("assets/textures/middleTopBloc.png", false, false)
    this.blocs[D1] = new Bloc("assets/textures/bloc_noire.png", false, false)
    this.blocs[D2] = new Bloc("assets/textures/bloc_noire_pierre.png", false, false)
    this.blocs[CG] = new Bloc("assets/textures/coinPatternEtageGauche.png", false, false)
    this.blocs[CD] = new Bloc("assets/textures/coinPatternEtageDroit.png", false, false)
    this.blocs[P1] = new Bloc("assets/textures/poteau2Bas.png", true, false)
    this.blocs[P2] = new Bloc("assets/textures/poteau2milieu.png", true, false)
    this.blocs[P3] = new Bloc("assets/textures/poteau2Haut.png", true, false)
    this.blocs[P4] = new Bloc("assets/textures/poteauGaucheCutBas.png", true, false)
    this.blocs[P5] = new Bloc("assets/textures/poteauGaucheCutMilieu.png", true, false)
    this.blocs[P6] = new Bloc("assets/textures/poteauGaucheCutHaut.png", true, false)
    this.blocs[P7] = new Bloc("assets/textures/poteauDroitCutBas.png", true, false)
    this.blocs[P8] = new Bloc("assets/textures/poteauDroitCutMilieu.png", true, false)
    this.blocs[P9] = new Bloc("assets/textures/poteauDroitCutHaut.png", true, false)
    this.blocs[PX] = new Bloc("assets/textures/topBlocBlack.png", true, false)
    this.blocs[F1] = new Bloc("assets/textures/mFlagBas.png", true, false)
    this.blocs[F2] = new Bloc("assets/textures/mFlagMid.png", true, false)
    this.blocs[F3] = new Bloc("assets/textures/mFlagTop.png", true, false)
    this.blocs[F4] = new Bloc("assets/textures/topMiniFlag.png", true, false)
    this.blocs[D4] = new Bloc("assets/textures/mFlagMidShield.png", true, false)
    this.blocs[M1] = new Bloc("assets/textures/mFlagBasFlag.png", true, false)
    this.blocs[M2] = new Bloc("assets/textures/mFlagMidWall.png", true, false)
    this.blocs[M3] = new Bloc("assets/textures/mFlagTopWall.png", true, false)
    this.blocs[PD] = new Bloc("assets/textures/haut_coldroit.png", true, false)
    this.blocs[PG] = new Bloc("assets/textures/haut_colgauche.png", true, false)
    this.blocs[L1] = new Bloc("assets/textures/lightWall.png", true, false)  // chandelle
    this.blocs[K1] = new Bloc("assets/textures/WallKnightBas.png", true, false) // pattern chevalier
    this.blocs[K2] = new Bloc("assets/textures/WallKnightHaut.png", true, false)
    this.blocs[S1] = new Bloc("assets/textures/Shield2.png", true, false)
    this.blocs[LU] = new Bloc("assets/textures/lustreDurHaut.png", true, false) //pattern lustre bloc
    this.blocs[LR] = new Bloc("assets/textures/lustreDurBas.png", true, false)
    this.blocs[LM] = new Bloc("assets/textures/ChandelierCable_Mid.png", true, false)
    this.blocs[LT] = new Bloc("assets/textures/ChandelierCable_Top.png", true, false)
    this.blocs[SB] = new Bloc("assets/textures/swordBot.png", true, false) // pattern big sword
    this.blocs[ST] = new Bloc("assets/textures/swordTop.png", true, false)
    this.blocs[SI] = new Bloc("assets/textures/sign1.png", true, false) // panneau tete de mort 
    this.blocs[BL] = new Bloc("assets/textures/block-big.png", true, false) // bloc
    this.blocs[BT] = new Bloc("assets/textures/face-block.png", true, false) //bloc
    this.blocs[KK] = new Bloc("assets/textures/Cactus.png", true, false) // cactus rond
    this.blocs[SK] = new Bloc("assets/textures/skulls.png", true, false) // crane
    this.blocs[B1] = new Bloc("assets/textures/portedroitebas.png", true, true) // porte
    this.blocs[B2] = new Bloc("assets/textures/portehautdroite1.png", true, true)
    this.blocs[B3] = new Bloc("assets/textures/portedroitemilieu.png", true, true)
    this.blocs[B4] = new Bloc("assets/textures/portegauchebas.png", true, true)
    this.blocs[B5] = new Bloc("assets/textures/portegauchehaut.png", true, true)
    this.blocs[B6] = new Bloc("assets/textures/portegauchemilieu.png", true, true)


  }


}


@Injectable({
  providedIn: 'root'
})
export class MapService {


  public monsters : OsMonster[] = [
    new OsMonster(24, 18.2),
    new OsMonster(39, 18.2),
    new OsMonster(70, 18.2),
    new OsMonster(120, 18.2)
  ]
  public ogrs: OgrMonster[] = [
    new OgrMonster(110, 8.2), 
    new OgrMonster(45, 6.2), 
    new OgrMonster(140, 18.2),
    new OgrMonster(10, 11.2),

  ]
  public slims: SlimMonster[] = [
    new SlimMonster(86, 18.8),
    new SlimMonster(180, 7),
    new SlimMonster(202, 3),
    new SlimMonster(204, 3),
    new SlimMonster(206, 3),
  ]
  public druids: DruidMonster[] = [
    new DruidMonster(50, 18),
  ]
  
  public pieces : Piece[] = [
    new Piece(10, 8),
    new Piece(12, 8),
    new Piece(8, 8),
    new Piece(25, 5),
    new Piece(45, 3),
    new Piece(47, 3),
    new Piece(43, 3),
    new Piece(45, 14),
    new Piece(150, 8),
    new Piece(155, 7),
    new Piece(160, 6),
    new Piece(178, 4),
    new Piece(180, 4),
    new Piece(182, 4),
    new Piece(202, 3),
    new Piece(204, 3),
    new Piece(206, 3),
    new Piece(62, 15),
    new Piece(75, 8),
    new Piece(98.5, 9),
    new Piece(127.3, 8),
    new Piece(145.5, 9),
]  

  

  public map = [

    [T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI ,VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T2, T2, T3, T2, T2, T3, T2 ,T3, T3, T2, T2, T2, T3, T3, T3, T3, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, T1, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, T2, T2, T2, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T3, T3, T4, VI, T1, T3, T3, T4, VI, VI, VI, VI, T1, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T4, VI, VI, VI, VI, VI, T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, CG, D1, D1, CD, VI, CG, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T2, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T2, T2, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, PX, PX, PX, P3, P3, PX, PX, PX, PX, PX, M3, PX, PX, PX, PX, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T5, T7, T7, T6, KK, T5, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T2, T2, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, PX, PX, PX, P3, P3, PX, PX, PX, PX, PX, M3, PX, PX, PX, PX, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, PX, PX, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T3, T3, T3, T3, T4],
    [T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F4, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, P9],
    [CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F4, F2, F2, F2, F4, F2, P2, P2, F2, F2, ST, F2, F2, M2, F2, F2, ST, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, F4, F2, F2, F2, F4, F2, P2, P2, F2, F2, ST, F2, F2, M2, F2, F2, ST, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, SB, F2, F2, M2, F2, F2, SB, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, ST, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, SB, F2, F2, M2, F2, F2, SB, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, P6, PX, M3, PX, PX, PX, M3, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, S1, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M1, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, SB, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, P6, PX, M3, PX, PX, PX, M3, PX, P9, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, S1, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M1, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M2, F2, D4, F2, M2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, L1, F2, F2, F2, L1, F2, P2, P2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, L1, F2, F2, F2, L1, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M2, F2, D4, F2, M2, F2, P8, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, L1, F2, F2, F2, L1, F2, P2, P2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, B5, B2, F2, P8],
    [VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M1, F2, F2, F2, M1, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, K2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, K2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, K2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M1, F2, F2, F2, M1, F2, P8, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, K2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, K2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, B6, B3, F2, P8],
    [VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, K1, F1, F1, F1, P1, P1, F1, F1, F1, F1, F1, K1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, SI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, K1, F1, F1, F1, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, K1, F1, F1, F1, P1, P1, F1, F1, F1, F1, F1, K1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, F1, B4, B1, F1, P7],
    [T1, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, T1, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T2, T3, T3, T3, T3, T3, T3, T2, T3, T2, T3, T2, T3, T3, T1, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T2, T3, T3, T3, T2, T3, T2, T3, T3, T3, T3, T3, T2, T3, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T2, T2, T3, T3, T3, T2, T2, T2, T3, T3, T3, T2, T2, T3, T3, T3, T3, T2, T3, T2, T3, T3, T2, T2, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T2, T2, T2, T3, T3, T3, T3, T2, T3],
    [CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D2, D2, D2, D1, D1, D1, D1, D1, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D2, D2, D1 ,D2, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D2, D1, D2, D1, D1, D1, D1, D2, D1, D2, D1, D2, D1, D1, D1, D2, D1, D2, D1, D1, D1, D2, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D2, D1, D1],

  ]



  constructor() {}
  
  getMap(): number [] [] {
    return this.map
  }

}


