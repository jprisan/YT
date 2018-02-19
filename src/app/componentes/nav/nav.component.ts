import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
 // $('.button-collapse').sideNav(hover: false);
 }

}

