import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username: string;
    private client_id = 'bcb6902c510eadb894a0';
    private client_secret = '89c5156b0a97cbbd761519cf29659db130f19e52';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'sjois91';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' +this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' +this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}