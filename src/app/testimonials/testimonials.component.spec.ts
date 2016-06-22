/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TestimonialsComponent } from './testimonials.component';

describe('Component: Testimonials', () => {
  it('should create an instance', () => {
    let component = new TestimonialsComponent();
    expect(component).toBeTruthy();
  });
});
