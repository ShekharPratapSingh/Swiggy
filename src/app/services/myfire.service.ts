import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MyfireService {

  constructor() { }
  getDataFromdatabase(uid) {
    let ref = firebase.database().ref("/users"+uid);
    return ref
      .once('value')
      .then(snapshot => snapshot.val())
    .catch(err => console.log(err))
  }
}
