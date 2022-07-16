import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Mateus Frahm';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'Essa é uma imagem';
  buttonText = 'Clique Aqui!';
  textRed = true;
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 200;
  textInput = '';

  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicou(value: any) {
    console.log('Clicou aqui', value);
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }

}
