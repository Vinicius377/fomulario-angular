import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  private passwordIsShow: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  public setPasswordIsShow(): void {
    this.passwordIsShow = !this.passwordIsShow;
  }
  public getPasswordIsShow(): boolean {
    return this.passwordIsShow;
  }
}
