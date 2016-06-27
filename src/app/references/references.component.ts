import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-references',
  templateUrl: 'references.component.html',
  styleUrls: ['references.component.css']
})
export class ReferencesComponent implements OnInit {

  // constructor(private elementRef: ElementRef) {
  constructor() {
  }

  ngOnInit() {
    // var el = this.elementRef.nativeElement;

  }
}
