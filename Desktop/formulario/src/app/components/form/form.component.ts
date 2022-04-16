import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  private passwordIsShow: boolean = true;

  ngOnInit(): void {}
  public data = new FormGroup({
    text: new FormControl({ value: '', disabled: true }, Validators.required),
    password: new FormControl(
      {
        value: '',
        disabled: true,
      },
      Validators.required
    ),
    email: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.email,
    ]),
    number: new FormControl({ value: '', disabled: true }, Validators.required),
    // checkbox: new FormArray([new FormControl()]),
    date: new FormControl({ value: '', disabled: true }, Validators.required),
    selection: new FormControl(
      {
        value: '',
        disabled: true,
      },
      Validators.required
    ),
  });
  public setPasswordIsShow(): void {
    this.passwordIsShow = !this.passwordIsShow;
  }
  public getPasswordIsShow(): boolean {
    return this.passwordIsShow;
  }
  public saveAndEditForm(e: Event): void {
    e.preventDefault();

    if (this.data.enabled) {
      if (this.data.valid) {
        this.data.disable();
        localStorage.setItem('values_input', JSON.stringify(this.data.value));
      } else {
        alert('preecha todos os campos corretamente!');
      }
    } else {
      this.data.enable();
    }
  }
}
