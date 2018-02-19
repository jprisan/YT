import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../routes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    /* Materialize.toast('I am a toast!', 4000) */
  }

}
