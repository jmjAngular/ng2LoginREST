/**
 * Created by joseph on 11/8/16.
 */

export class LoginModel {
    constructor(public username:string,
                public password:string) {
    }
}

export class ServerResponse {

    public status:string;
    public message:string;
    public details:string;

    getStatus() {
        return this;
    }

}
