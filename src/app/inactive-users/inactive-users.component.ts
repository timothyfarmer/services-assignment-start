import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../shared/user.service';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent implements OnInit {
  users = [];
  count = 0;
  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setUserActive(id);
    this.users = this.userService.inactiveUsers;
    this.count = this.counterService.inactiveToActiveIncrement();
  }
}
