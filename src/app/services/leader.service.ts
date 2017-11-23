import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getECLeader(): Leader {
    return LEADERS.filter((leader) => (leader.brief === 'EC'))[0];
  }
}
