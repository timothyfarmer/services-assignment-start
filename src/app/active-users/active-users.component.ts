import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../shared/user.service';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent implements  OnInit {
  users = [];
  count = 0;
  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setUserInactive(id);
    this.users = this.userService.activeUsers;
    this.count = this.counterService.activeToInactiveIncrement();
  }
}
