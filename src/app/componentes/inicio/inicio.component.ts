import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider').slider();
    }

}
