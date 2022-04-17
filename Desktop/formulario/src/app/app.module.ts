import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, ReactiveFormsModule, AngularToastifyModule],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
