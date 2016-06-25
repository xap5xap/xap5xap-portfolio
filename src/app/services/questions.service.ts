import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class QuestionsService {

  questions: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.questions = af.database.list('/questions');
  }

  save(question: any) {
    this.questions.push(question);
  }

}
