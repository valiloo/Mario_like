import { Routes, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component'
import { MapComponent } from './map.component';
import { PlayersnameComponent } from '../playersname/playersname.component';
import { Component } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';


export { ROUTES };
const ROUTES: Routes = [
    
    { path: 'route', component: Router},
    {path: 'menu', component: MenuComponent},
    { path: 'map', component: MapComponent},
    { path: 'settings', component: SettingsComponent},
    {path: 'player', component: PlayersnameComponent},
    {path: '', redirectTo: '/menu', pathMatch: 'full'},
];

