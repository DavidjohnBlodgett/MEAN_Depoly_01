import { Component } from '@angular/core';
import { User } from './_models/user';
import { UsersService } from './_services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userInput: string = '';

  constructor( private _usersService: UsersService ) { }

  ngOnInit() {
      // this.userInput = prompt('Please enter your name:')
      // console.log(this.userInput);
      this.handleLogin(prompt('Please enter your name:'));



  }

  handleLogin(username) {
      console.log(username);
      this._usersService.create(username);
  }

}
