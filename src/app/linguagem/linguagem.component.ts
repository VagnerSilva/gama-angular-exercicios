import { Component, OnInit } from '@angular/core';
import { LinguagemService } from '../linguagem.service';
import { Linguagem } from '../models/linguagem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-linguagem',
  templateUrl: './linguagem.component.html',
  styleUrls: ['./linguagem.component.css']
})
export class LinguagemComponent implements OnInit {

  itens: Observable<Linguagem[]> =  this.lingService.getLinguagem();

  constructor(private lingService: LinguagemService) { }

  ngOnInit() {
  }

}
