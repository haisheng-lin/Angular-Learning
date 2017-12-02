import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';

import { Observable } from 'rxjs/Observable';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { 

  }

  submitFeedback(feedback: Feedback): Observable<Feedback> {

    // 先做 post，确保做完 post 才能 get
    // 返回的是 this.restangular... 这个变量
    return this.restangular.all('feedback').post(feedback, () => {
      this.restangular.all('feedback').getList({
        firstname: feedback.firstname,
        lastname: feedback.lastname,
        telnum: feedback.telnum,
        email: feedback.email,
        agree: feedback.agree,
        contacttype: feedback.contacttype,
        message: feedback.message
      }).map(feedbacks => feedback[0]);
    });
  }
}
