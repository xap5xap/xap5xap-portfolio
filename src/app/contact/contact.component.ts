import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control, AbstractControl} from '@angular/common';
import {QuestionsService} from '../services/questions.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  providers: [QuestionsService]
})
export class ContactComponent implements OnInit {
  contactForm: ControlGroup;
  firstname: Control;
  lastname: Control;
  email: Control;
  message: Control;
  phone: Control;
  success: boolean = false;

  constructor(formBuilder: FormBuilder, private questionService: QuestionsService) {
    this.firstname = formBuilder.control('');
    this.lastname = formBuilder.control('', Validators.compose([Validators.required]));
    this.email = formBuilder.control('');
    this.message = formBuilder.control('');
    this.phone = formBuilder.control('');

    this.contactForm = formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
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
    this.questionService.save(this.contactForm.value);
    // this.reset();
    this.success = true;
    // setTimeout(() => {
    //   this.success = false;
    // }, 3000);

  }

  reset() {
    this.firstname.updateValue('');
    this.lastname.updateValue('');
    this.email.updateValue('');
    this.message.updateValue('');
    this.firstname.updateValue('');
  }
}
