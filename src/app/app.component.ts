import { Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {IntroComponent} from './intro/intro.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, IntroComponent]
})
export class AppComponent {
  title = "hola";
  // constructor(private elementRef: ElementRef) {
  constructor() {

  }

  ngOnInit() {

    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    animations();
    sliders();
    fullScreenContainer();
    utils();
    sliding();
    map1();
    counters();
    parallax();
    demo();
    loadMasonry();
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');

  }
}
