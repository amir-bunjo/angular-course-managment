import { TitleModel } from './../titlemodel';

import { Component, OnInit, Input } from '@angular/core';
import { VariableAst } from '@angular/compiler';



@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // sada nevazno   @Input() title: TitleModel;

  @Input() naslov: string= 'Home';

  constructor() { }
  ngOnInit() {
    
  }

}


