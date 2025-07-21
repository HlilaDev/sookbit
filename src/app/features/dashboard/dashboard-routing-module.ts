import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { AboutUs } from './pages/about-us/about-us';
import { Canva } from './pages/apps/canva/canva';
import { Capcut } from './pages/apps/capcut/capcut';
import { Apps } from './pages/apps/apps';
import { Netflix } from './pages/apps/netflix/netflix';
import { Spotify } from './pages/apps/spotify/spotify';
import { Social } from './pages/social/social';
import { Iptv } from './pages/iptv/iptv';


const routes: Routes = [
    {path:'' ,component:Homepage , title:'home'},
    {path:'about-us' , component:AboutUs , title:'about-us'},
    {path:'canva' , component:Canva , title:'canva'},
    {path:'capcut' , component:Capcut , title:'capcut'},
    {path:'apps/netflix' , component:Netflix , title:'netflix'},
    {path:'apps/spotify' , component:Spotify , title:'spotify'},
    {path:'iptv' , component:Iptv , title:'iptv'},
    {path:'apps' , component:Apps , title:'soft-apps'},
        {path:'social' , component:Social , title:'social'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
