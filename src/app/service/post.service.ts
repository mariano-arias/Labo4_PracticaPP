import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private firestore: AngularFirestore) {
  }

  getPostsAll() : Observable<any>{
    return this.firestore.collection("posts").snapshotChanges();
  }
}