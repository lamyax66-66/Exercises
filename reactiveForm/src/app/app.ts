import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm');

  userForm: FormGroup = new FormGroup({
    FullName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    Email: new FormControl("",[Validators.required,Validators.email]),
    Password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    Age: new FormControl("",[Validators.required,Validators.min(18)]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue])
  });

  onSubmit() {
  if (this.userForm.valid) {
    console.log(this.userForm.value);
  }
}
}
