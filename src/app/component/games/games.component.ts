import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';


interface boardGame {
  boardGame: string;
  boardGamePicture: string;
  info: string;
  owner: string;
  ownerFace: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {


  boardGameCollection: AngularFirestoreCollection<boardGame>;
  boardGames: Observable<boardGame[]>;

  constructor (private afs: AngularFirestore) {}
  
  ngOnInit(){
    this.boardGameCollection = this.afs.collection('boardGames')
    this.boardGames = this.boardGameCollection.valueChanges()
  }
}
