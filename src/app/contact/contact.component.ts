import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control, AbstractControl} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: ControlGroup;
  firstname: Control;
  lastname: Control;
  email: Control;
  message: Control;

  constructor(formBuilder: FormBuilder) {
    this.firstname = formBuilder.control('');
    this.lastname = formBuilder.control('', Validators.compose([Validators.required]));
    this.email = formBuilder.control('');
    this.message = formBuilder.control('');

    this.contactForm = formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      phone: formBuilder.control(''),
      email: this.email,
      message: this.message,
    });
  }

  ngOnInit() {
  }

  showErrors(): boolean {
    for (let controlname in this.contactForm.controls) {
      let control: AbstractControl = this.contactForm.find(controlname);
      if (control.dirty && control.errors) {
        return true;
      }
    }
    return false;
  }

  send() {
    console.log('form', this.contactForm.value);

  }
}
