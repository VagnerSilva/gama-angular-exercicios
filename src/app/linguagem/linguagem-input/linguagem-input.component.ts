import { Component, OnInit } from '@angular/core';
import { LinguagemService } from 'src/app/linguagem.service';
import { Linguagem } from 'src/app/models/linguagem';

@Component({
  selector: 'app-linguagem-input',
  templateUrl: './linguagem-input.component.html',
  styleUrls: ['./linguagem-input.component.css']
})
export class LinguagemInputComponent implements OnInit {

  data: Linguagem = {
    id: null,
  };

  constructor(private linguagemService: LinguagemService) { }

  ngOnInit() {
  }


  addLinguagem() {
    // console.log(this.data);
    this.linguagemService.postLinguagem(this.data).subscribe(v => {
      // console.log(v);

      this.data = {id: null};
    });
  }

}
