/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { QuestionsService } from './questions.service';

describe('QuestionsService Service', () => {
  beforeEachProviders(() => [QuestionsService]);

  it('should ...',
      inject([QuestionsService], (service: QuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
