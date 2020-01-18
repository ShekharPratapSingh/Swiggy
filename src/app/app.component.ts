import { Component, OnInit } from "@angular/core";

import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "swiggyapp";

  ngOnInit() {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAs_THaUi3pzbc1S5hlrn9J4wzroq_sqFM",
      authDomain: "swiggy-af215.firebaseapp.com",
      databaseURL: "https://swiggy-af215.firebaseio.com",
      projectId: "swiggy-af215",
      storageBucket: "swiggy-af215.appspot.com",
      messagingSenderId: "607289027621",
      appId: "1:607289027621:web:da01caddc1e370606523cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
