import { Injectable } from '@angular/core';

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
    this.textures[D1] = "assets/textures/bloc_noire.png" // bloc noire sombre dessous decor //
    this.textures[D2] = "assets/textures/bloc_noire_pierre.png" // bloc noire sombre avec pierre //


    this.textures[CG] = "assets/textures/colonne_gauche.png" // bloc de pierre colonne gauche //
    this.textures[CD] = "assets/textures/colonne_droite.png" // bloc de pierre colonne droite //

    this.textures[P1] = "assets/textures/poteau2Bas.png" // bloc poteau partie basse //
    this.textures[P2] = "assets/textures/poteau2milieu.png" // bloc poteau partie milieu //
    this.textures[P3] = "assets/textures/poteau2Haut.png" //bloc poteau partie haute //
    this.textures[F1] = "assets/textures/mFlagBas.png" // bloc drapeau partie basse //
    this.textures[F2] = "assets/textures/mFlagMid.png" // bloc drapeau partie milieu //
    this.textures[F3] = "assets/textures/mFlagTop.png" // bloc drapeau partie haute //
    this.textures[D4] = "assets/textures/mFlagMidShield.png" // bloc mur + bouclier //
    this.textures[M1] = "assets/textures/mFlagBasFlag.png" //bmpc drapeau partie basse basse //
    this.textures[M2] = "assets/textures/mFlagMidWall.png" 
    this.textures[M3] = "assets/textures/mFlagTopWall.png"

    this.textures[PD] = "assets/textures/haut_coldroit.png"
    this.textures[PG] = "assets/textures/haut_colgauche.png"
  }

  getTexture() {
    return this.textures
  }
}


@Injectable({
  providedIn: 'root'
})
export class MapService {



  public map = [
    [VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P3, F3, M3, F3, F3, F3, M3, F3, P3, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P2, F2, M2, F2, D4, F2, M2, F2, P2, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P2, F2, M1, F2, F2, F2, M1, F2, P2, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, P1, F1, F1, F1, F1, F1, F1, F1, P1, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI, VI],
    [T1, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T4, VI, VI, VI, VI, T1, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3, T3],
    [CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, CD, VI, VI, VI, VI, CG, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D1, D2, D1, D1, D1, D1],

  ]
  constructor() {


  }
  getMap(): number[][] {
    return this.map
  }
}

