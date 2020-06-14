import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'details-app',
  templateUrl: './details-app.component.html',
  styleUrls: ['./details-app.component.scss']
})
export class DetailsComponent implements OnInit {

  url = 'http://localhost:8082/main.js';
  details: string;

  constructor(private route: Router, private dataRoute: ActivatedRoute) {
   // const key: string = JSON.parse(this.dataRoute.snapshot.params['objectProducts']);
    // this.dataRoute.data.subscribe( data => console.log('data --- data ' + data ))
    console.log("entra state", route.getCurrentNavigation().extras.state);
    this.details = JSON.stringify(route.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
  }

}
