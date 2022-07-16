import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  // Definindo qual será a tipagem do userForm utilizando as informações em FormGroup
  userForm: FormGroup;

  // Variavel para o método de busca
  users: Array<User> = [];

  // Variavel para o método de mapeamento de rota
  userId: any = '';

  // Injetando a Classe FormBuilder que irá permitir o uso de sintaxes para instanciar instâncias de formulários
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    // utilizando o group para mapear as entradas de dados do formulário
    // Por padrão são inicializados com valores informados
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''
    })

  }

  ngOnInit(): void {

    // Mapeando o Id da rota que está ativa
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);

      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }

    })

    this.getUsers();

  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`O Usuário ${result.nome} ${result.sobrenome} cadastrado com sucesso !`);
    }, (erro) => {
      console.log('Falha no cadastro', erro);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('Usuário atualizado', result);
    }, (erro) => {
      console.log('Falha na atualização de dados', erro);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  actionButton() {
    if(this.userId !== null) {
      this.updateUser();
    }
    else {
      this.createUser();
    }
    
  }

}
