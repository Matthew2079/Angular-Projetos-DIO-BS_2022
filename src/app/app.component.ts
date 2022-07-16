import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  count = 0;
  nome = "Mateus Frahm "; 
  text = '';

  pessoas = [{ firstName: '', lastName: '', age: 0 }];

  // Definindo a injeção do serviço a este componente
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {

    console.log(this.pessoas);

    // Função que conta até 10 e após este zera o valor
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000) // indicado o tempo de atualização 1s

    this.getPeople();
    
  }

  clicou(nome: string): void {
    console.log('Clicou:', nome)
  }

  // subscribe inscreve ao método para obter os valores
  // 'people' variavel que recebe o retorno da consulta da função de callback
  getPeople() {
    this.peopleService.getPeople().subscribe(people => this.pessoas = people)
  }

}
