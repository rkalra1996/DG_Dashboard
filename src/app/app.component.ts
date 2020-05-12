import { Component } from '@angular/core';
import {faTachometerAlt, faTools} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  icons = {
    faTachometerAlt,
    faTools,
  };

  constructor(private readonly router: Router) {}

  currentRoute(routeToMatch: string) {
    if (this.router.url.split('/').includes(routeToMatch)) {return true; } else {return false;}
  }
}
