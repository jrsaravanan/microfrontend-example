import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'usr-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  usr: FormGroup;

  @Output()
  formChange = new EventEmitter<string>();

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.usr = this.form.group({
      username: [''],
      address: [''],
    });
  }

  submit() {
    this.formChange.emit(this.usr.getRawValue());
  }
}
