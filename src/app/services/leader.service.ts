import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getECLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.brief === 'EC'))[0]);
  }
}
