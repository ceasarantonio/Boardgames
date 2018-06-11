import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, ViewChild } from '@angular/core';


import { AppComponent } from './app.component';


import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GamesComponent } from './component/games/games.component';
import { MembersComponent } from './component/members/members.component';
import { LeaderboardComponent } from './component/leaderboard/leaderboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';

//Third party
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from '../environments/environment';
import { MatExpansionModule } from '@angular/material/expansion';


export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    MembersComponent,
    LeaderboardComponent,
    NavbarComponent,
 
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
