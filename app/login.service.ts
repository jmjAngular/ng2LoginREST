import {Injectable} from '@angular/core';
import {Http}     from '@angular/http';
import {contentHeaders} from './common/headers';
import 'rxjs/add/operator/toPromise';
import {LoginModel, ServerResponse} from "./login.model";

export class Reponse {
    status:string;
}

@Injectable()
export class LoginService {
    logi_url = 'http://localhost:8001/login';

    constructor(private http:Http) {
    }

    authenticate(model:LoginModel):Promise<any> {

        return this.http
            .post(this.logi_url, JSON.stringify(model), {headers: contentHeaders})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
