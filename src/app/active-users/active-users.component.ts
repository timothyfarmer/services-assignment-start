import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements  OnInit {
  users = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setUserInactive(id);
    this.users = this.userService.activeUsers;
  }
}