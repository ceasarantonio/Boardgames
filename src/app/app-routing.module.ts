import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GamesComponent } from './component/games/games.component';
import { MembersComponent } from './component/members/members.component';
import { LeaderboardComponent } from './component/leaderboard/leaderboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'games', component: GamesComponent},
  {path: 'members', component: MembersComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
];
 

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
