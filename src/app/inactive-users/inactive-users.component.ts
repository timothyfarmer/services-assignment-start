import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setUserActive(id);
    this.users = this.userService.inactiveUsers;
  }
}
