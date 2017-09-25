import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UsersService } from '../_services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // userInput: string = '';
    //
    // constructor( private _usersService: UsersService ) { }
    //
    // ngOnInit() {
    //     // this.userInput = prompt('Please enter your name:')
    //     // console.log(this.userInput);
    //     this.handleLogin(prompt('Please enter your name:'));
    //
    //
    //
    // }
    //
    // handleLogin(username) {
    //     console.log(username);
    //     this._usersService.create(username);
    // }

    constructor( private _redirect: Router ) {

    }

    ngOnInit() {

    }

    onPlay() {
        this._redirect.navigate(['/lets_play']);
    }

}
