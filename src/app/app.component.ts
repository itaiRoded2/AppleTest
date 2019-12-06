import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.subscribeToRouteChanges();

  }

  subscribeToRouteChanges() {

    //For example if have 3 catagories and you go to detail/4 (you would see not found) if you then add new category and click that 
    //It should reload 
    //https://stackoverflow.com/questions/40983055/how-to-reload-the-current-route-with-the-angular-2-router
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });   

  }
}

