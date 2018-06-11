import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from "angularfire2/database"

interface boardGame {
  boardGame: string;
  info: string;
  owner: string;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

  export class LeaderboardComponent implements OnInit {
    displayedColumns = ['id', 'name', 'points'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    boardGameCollection: AngularFirestoreCollection<boardGame>;
    boardGames: Observable<boardGame[]>;
  
    constructor(private afs: AngularFirestore) {
      // Create 100 users
      const users: UserData[] = [];
      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }
  
    ngOnInit() {
      this.boardGameCollection = this.afs.collection('boardGames')
    this.boardGames = this.boardGameCollection.valueChanges()
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      id: id.toString(),
      name: name,
      points: Math.round(Math.random() * 100).toString()
    };
  }
  
  /** Constants used to fill up our data base. */
  const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  
  export interface UserData {
    id: string;
    name: string;
    points: string;
  }