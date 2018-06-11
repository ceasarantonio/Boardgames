import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireObject } from "angularfire2/database"


interface member {
  member: string;
  memberFace: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  memberCollection: AngularFirestoreCollection<member>;
  members: Observable<member[]>;

  constructor (private afs: AngularFirestore) {}
  
  ngOnInit(){
    this.memberCollection = this.afs.collection('members')
    this.members = this.memberCollection.valueChanges()
  }
}
