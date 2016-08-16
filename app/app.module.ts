/**
 * Created by jmj on 11/8/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {AppComponent}  from './app.component';
import {LoginService} from "./login.service";

@NgModule({
    imports: [BrowserModule,HttpModule,FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [LoginService]
})
export class AppModule {
}
