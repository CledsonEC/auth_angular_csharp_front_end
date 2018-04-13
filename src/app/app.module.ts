import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { LoaderComponent } from './loader/loader.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
