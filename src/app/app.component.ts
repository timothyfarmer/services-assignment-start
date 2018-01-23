import { Component } from '@angular/core';
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.setUserInactive(id);
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.userService.setUserActive(id);
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
