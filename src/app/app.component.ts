import { Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {IntroComponent} from './intro/intro.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {ReferencesComponent} from './references/references.component';
import {CustomersComponent} from './customers/customers.component';
import {ContactComponent} from './contact/contact.component';
import {MapComponent} from './map/map.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, IntroComponent, AboutComponent, ServicesComponent,
    TestimonialsComponent, ShowcaseComponent, ReferencesComponent, CustomersComponent,
    ContactComponent, MapComponent, FooterComponent]
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
