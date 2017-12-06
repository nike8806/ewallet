import { Component, OnInit } from '@angular/core';
import { pages } from '../../pages';
import * as _ from 'lodash';
@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public pages = [];

  constructor() { 
      Object.keys(pages).forEach((pageName)=>{
        this.pages.push(pages[pageName]);
      });
  }
  
  ngOnInit() {
  }

}
