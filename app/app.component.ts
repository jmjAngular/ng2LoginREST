import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {LoginModel} from "./login.model";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {
    title = 'Login Form';
    model = new LoginModel("", "");

    constructor(private  loginService:LoginService) {
    }

    submitted = false;
    authenticated = false;
    invalid_login = false;

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;


    ngOnInit() {
        console.log('Calling ngOnInit...');
    }

    submitLogin() {

        this.loginService
            .authenticate(this.model)
            .then(resp => {
                console.log(resp.status);
                if (resp.status == "success") {
                    this.authenticated = true;
                    this.invalid_login = false;
                } else {
                    this.invalid_login = true;
                }
            })
            .catch(error => {
                console.log(error);
            }); // TODO: Display error message
    }

    logout() {
        this.authenticated = false;
        this.invalid_login = false;
    }
}
