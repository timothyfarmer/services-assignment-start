import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  inactiveToActiveCount = 0;
  activeToInactiveCount = 0;
  constructor() { }

  inactiveToActiveIncrement(): number {
    this.inactiveToActiveCount++;
    console.log(this.inactiveToActiveCount);
    return this.inactiveToActiveCount;
  }

  activeToInactiveIncrement(): number {
    this.activeToInactiveCount++;
    console.log(this.activeToInactiveCount);
    return this.activeToInactiveCount;
  }

}
