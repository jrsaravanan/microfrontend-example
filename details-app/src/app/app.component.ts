import { Component, Input } from '@angular/core';

@Component({
  selector: 'details-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sec App';

  @Input()
  details: string;

}
