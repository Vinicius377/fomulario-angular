import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    this.getStorageValues();
  }
  constructor(private _toastService: ToastService) {}

  private passwordIsShow: boolean = true;
  public setPasswordIsShow(): void {
    this.passwordIsShow = !this.passwordIsShow;
  }
  public getPasswordIsShow(): boolean {
    return this.passwordIsShow;
  }

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

  public saveAndEditForm(e: Event): void {
    e.preventDefault();
    if (this.data.enabled) {
      this.verifyValuesFields();
    } else {
      this.data.enable();
    }
  }
  private verifyValuesFields() {
    if (this.data.valid) {
      this.data.disable();
      localStorage.setItem('values_input', JSON.stringify(this.data.value));
      this._toastService.success('Os valores foram salvos!');
    } else {
      let fieldsInvalids: string[] = [];
      Object.keys(this.data.controls).forEach((fieldName) => {
        if (this.data.controls[fieldName].status === 'INVALID') {
          fieldsInvalids.push(fieldName);
        }
      });
      this._toastService.error(
        `O campo de ${fieldsInvalids[0]} está incorreto!`
      );
    }
  }
  private getStorageValues(): void {
    const storageData = localStorage.getItem('values_input');
    if (storageData) {
      this.data.setValue(JSON.parse(storageData));
    } else {
      this.data.enable();
    }
  }
  public clearFields(): void {
    localStorage.removeItem('values_input');
    this.data.reset();
    this.data.enable();
    this._toastService.warn('Os valores foram limpos do storage!');
  }
}
