/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ReferencesComponent } from './references.component';

describe('Component: References', () => {
  it('should create an instance', () => {
    let component = new ReferencesComponent();
    expect(component).toBeTruthy();
  });
});
