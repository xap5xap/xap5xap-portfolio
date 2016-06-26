import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-references',
  templateUrl: 'references.component.html',
  styleUrls: ['references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    var el = this.elementRef.nativeElement;
    console.log('ngOnInit()', el);
  }

  prueba(evento) {
    console.log('prueba',evento);
  }
}
