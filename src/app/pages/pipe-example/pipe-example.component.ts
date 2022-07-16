import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  number = 0;
  text = 'Hello World!';
  date = new Date;
  pessoa = { nome:'Mateus', idade: 26, profissao: 'Desenvolvedor'};
  nomes = ['Mateus'];

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text);
  }

  mudaValor() {
    this.number = 123456789;
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
