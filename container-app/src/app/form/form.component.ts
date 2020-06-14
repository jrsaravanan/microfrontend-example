import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  url = "http://localhost:8081/main.js"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formChange(event: CustomEvent) {
    return this.router.navigate(['/details'], { state: event.detail} );
  }

  detailsEvent(event: CustomEvent) {
    console.log(event);
  }
}
