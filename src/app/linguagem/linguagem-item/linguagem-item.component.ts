import { Component, OnInit, Input } from '@angular/core';
import { Linguagem } from 'src/app/models/linguagem';

@Component({
  selector: 'app-linguagem-item',
  templateUrl: './linguagem-item.component.html',
  styleUrls: ['./linguagem-item.component.css']
})
export class LinguagemItemComponent implements OnInit {

  @Input() data: Linguagem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
