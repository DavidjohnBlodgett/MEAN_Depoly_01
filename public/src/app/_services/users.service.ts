import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";
import { User } from '../_models/user';
import { Toolbox } from './-toolbox';

@Injectable()
export class UsersService {

    toolbox = new Toolbox();
    users: User[] = [];
    usersObserver = new BehaviorSubject(this.users);
    currentUser: User;
    currentUserObserver = new BehaviorSubject(this.currentUser);
    // TODO: may need to keep track of name entered... and use it on login to look up the correct obj to
    // populate the above var...

    constructor( private _http: Http ) { }

    retrieveAll() {
        this._http.get('/users')
        .subscribe(
              (response) => {
                    this.users = response.json();
                    console.log(this.users);
                    this.usersObserver.next(this.users);
                    this.currentUserObserver.next(this.currentUser);
              },
              (err) => {
                  console.log('ERROR FROM (GET) REQUEST TO API')
              }
        )

    }
    retrieveOne(id) {
        return this.toolbox.search(this.users, '_id' , id);
    }
    create(username) {
        var body = {};
        body['name'] = username;

        // NOTE: skip if user already exists

        var temp = this.toolbox.search(this.users, 'name', body['name']);
        if(temp['name']) {
            this.currentUser = temp;
            this.currentUserObserver.next(this.currentUser);
            return true;
        }

        return this._http.post('/users', body)
        .subscribe(
              (response) => {
                    this.retrieveAll();
                    this.currentUser = this.toolbox.search(this.users, 'name', body['name']);
                    this.currentUserObserver.next(this.currentUser);
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    createGame(gameResults) {
        this._http.post(`/users/${this.currentUser._id}`, gameResults)
        .subscribe(
              (response) => {
                    this.retrieveAll();
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }

}
