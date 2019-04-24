import { Injectable } from '@angular/core';
import { Monster, OsMonster, } from './models/monster';
import {OgrMonster} from './models/ogr';

export const VI = 0
export const T1 = 1
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




@Injectable({
  providedIn: 'root'
})


export class MapTheme {


  public textures = {
  }

  constructor() {


    this.textures[VI] = "assets/textures/vide.png" // Texture representant le vide //

    this.textures[T1] = "assets/textures/bloc_pierre.png" // bloc pierre coin gauche //
    this.textures[T2] = "assets/textures/bloc_pierre2.png" //bloc pierre classique principal //
    this.textures[T3] = "assets/textures/bloc_pierre3.png" // bloc pierre avec "ovale" au milieu //
    this.textures[T4] = "assets/textures/bloc_pierre_coin_droit.png"
    this.textures[T5] = "assets/textures/leftTopBloc.png" // bloc construction étage gauche
    this.textures[T6] = "assets/textures/rightTopBloc.png" //  bloc construction étage droit
    this.textures[T7] = "assets/textures/middleTopBloc.png" // bloc entre poteau pour étage


    this.textures[D1] = "assets/textures/bloc_noire.png" // bloc noire sombre dessous decor //
    this.textures[D2] = "assets/textures/bloc_noire_pierre.png" // bloc noire sombre avec pierre //

    this.textures[CG] = "assets/textures/coinPatternEtageGauche.png"// bloc de pierre colonne gauche//
    this.textures[CD] = "assets/textures/coinPatternEtageDroit.png" // bloc de pierre colonne droite //

    this.textures[P1] = "assets/textures/poteau2Bas.png" // bloc poteau partie basse //
    this.textures[P2] = "assets/textures/poteau2milieu.png" // bloc poteau partie milieu //
    this.textures[P3] = "assets/textures/poteau2Haut.png" //bloc poteau partie haute //
    this.textures[P4] = "assets/textures/poteauGaucheCutBas.png" // bloc poteau gauche exterieur bas
    this.textures[P5] = "assets/textures/poteauGaucheCutMilieu.png" // bloc poteau gauche exterieur milieu
    this.textures[P6] = "assets/textures/poteauGaucheCutHaut.png" // bloc poteau droit exterieur haut
    this.textures[P7] = "assets/textures/poteauDroitCutBas.png" // bloc poteau droit exterieur bas
    this.textures[P8] = "assets/textures/poteauDroitCutMilieu.png" // bloc poteau droit exterieur milieu
    this.textures[P9] = "assets/textures/poteauDroitCutHaut.png" // bloc poteau droit exterieur haut
    this.textures[PX] = "assets/textures/topBlocBlack.png" // bloc entre poteaux haut quand étage supérieur


    this.textures[F1] = "assets/textures/mFlagBas.png" // bloc drapeau partie basse //
    this.textures[F2] = "assets/textures/mFlagMid.png" // bloc drapeau partie milieu //
    this.textures[F3] = "assets/textures/mFlagTop.png" // bloc drapeau partie haute //
    this.textures[F4] = "assets/textures/topMiniFlag.png" // miniFlag Top Bloc

    this.textures[D4] = "assets/textures/mFlagMidShield.png" // bloc mur + bouclier //
    this.textures[M1] = "assets/textures/mFlagBasFlag.png" //bmpc drapeau partie basse basse //
    this.textures[M2] = "assets/textures/mFlagMidWall.png"
    this.textures[M3] = "assets/textures/mFlagTopWall.png"

    this.textures[PD] = "assets/textures/haut_coldroit.png"
    this.textures[PG] = "assets/textures/haut_colgauche.png"

    this.textures[L1] = "assets/textures/lightWall.png"  // chandelle

    this.textures[K1] = "assets/textures/WallKnightBas.png" // pattern chevalier
    this.textures[K2] = "assets/textures/WallKnightHaut.png"

    this.textures[S1] = "assets/textures/Shield2.png"

    this.textures[LU] = "assets/textures/lustreDurHaut.png" //pattern lustre bloc
    this.textures[LR] = "assets/textures/lustreDurBas.png"
    this.textures[LM] = "assets/textures/ChandelierCable_Mid.png"
    this.textures[LT] = "assets/textures/ChandelierCable_Top.png"

    this.textures[SB] = "assets/textures/swordBot.png" // pattern big sword
    this.textures[ST] = "assets/textures/swordTop.png"

    this.textures[SI] = "assets/textures/sign1.png" // panneau tete de mort 

    this.textures[BL]= "assets/textures/block-big.png" // bloc
    this.textures[BT]= "assets/textures/face-block.png" //bloc

    this.textures[KK]= "assets/textures/Cactus.png" // cactus rond
    this.textures[SK]= "assets/textures/skulls.png" // crane

    this.textures[B1]= "assets/textures/portedroitebas.png" // porte
    this.textures[B2]= "assets/textures/portehautdroite1.png"
    this.textures[B3]= "assets/textures/portedroitemilieu.png"
    this.textures[B4]= "assets/textures/portegauchebas.png"
    this.textures[B5]= "assets/textures/portegauchehaut.png"
    this.textures[B6]= "assets/textures/portegauchemilieu.png"
  }

  getTexture() {
    return this.textures
  }
}


@Injectable({
  providedIn: 'root'
})
export class MapService {

  public monsters: OsMonster[] = [new OsMonster(19, 19),]
  public ogrs: OgrMonster[] =  [new OgrMonster(15, 19),]

  public map = [
    [T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI ,VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, BT, BT, BT, BT, BT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI,VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BT, BT, BT, BT, BT, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, T1, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, BT, BT, BT, BT, BT, BT, BT, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, LM, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T4, VI, VI, VI, VI, VI, T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T2, T2, T2, T2, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, PX, PX, PX, P3, P3, PX, PX, PX, PX, PX, M3, PX, PX, PX, PX, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, KK, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, PX, PX, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [T1, T2, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F4, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, PX, PX, PX, PX, P9],
    [CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F4, F2, F2, F2, F4, F2, P2, P2, F2, F2, ST, F2, F2, M2, F2, F2, ST, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [T5, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T7, T6, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, F2, F2, F2, P2, P2, F2, F2, SB, F2, F2, M2, F2, F2, SB, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, ST, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BT, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, P6, PX, M3, PX, PX, PX, M3, PX, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, S1, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, M1, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, SB, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P6, P9, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BL, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, F2, P8],
    [VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M2, F2, D4, F2, M2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, L1, F2, F2, F2, L1, F2, P2, P2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, P5, F2, L1, F2, F2, F2, L1, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BT, BT, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, B5, B2, F2, P8],
    [VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, P5, F2, M1, F2, F2, F2, M1, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, F2, F2, K2, F2, F2, F2, P2, P2, F2, F2, F2, F2, F2, K2, F2, F2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BL, P5, F2, F2, F2, K2, F2, F2, F2, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BL, BL, BL, VI, VI, VI, VI, VI, VI, P5, P8, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P5, F2, B6, B3, F2, P8],
    [VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, F1, F1, F1, K1, F1, F1, F1, P1, P1, F1, F1, F1, F1, F1, K1, F1, F1, F1, F1, F1, P7, VI, VI, VI, VI, VI, SI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BL, BL, P4, F1, F1, F1, K1, F1, F1, F1, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, BL, BT, BT, BT, BL, VI, VI, VI, VI, VI, VI, P4, P7, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P4, F1, B4, B1, F1, P7],
    [T1, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, T1, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T4, VI, VI, VI, VI, VI, VI, VI, VI, T1, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T3, T2, T3, T3, T3, T2, T3, T3, T3, T3, T3, T3, T2, T3, T2, T3, T2, T3, T3, T3, T2, T3, T2, T3, T3, T2, T3, T3, T3, T2, T3],
    [CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, CD, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, VI, VI, VI, VI, CD, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D2, D2, D2, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D2, D1, D1],

  ]

  

  constructor() {


  }
  getMap(): number[][] {
    return this.map
  }
}

