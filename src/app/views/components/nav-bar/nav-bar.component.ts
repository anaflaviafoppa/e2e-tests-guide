import { Component, OnInit } from '@angular/core';
import {Route} from '../../../app-routing.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeEnum = Route;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigate(route:string): void {
    this._router.navigate([route]).then(() => {})
  }

}
