import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  // Array para armazenar as tarefas
  todos: Array<Todo> = [];

  todo: Todo = {
    id: 0,
    title: '',
    done: false
  }

  constructor() { }

  ngOnInit(): void {

    let items: any = localStorage.getItem('todos');

    let todos = JSON.parse(items); // convertendo para um array de objetos
    
    if (!todos) {
      this.todos = [];
    }
    else {
      this.todos = todos;
    }
  }

  // Adiciona uma tarefa
  addTodo(title: string) {
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false
    });

    // convertendo array de objetos para string
    // localStorage armazena dados localmente, pois ao fechar a aba do navegador os dados seriam perdidos, assim ele quando reabrir os dados ainda estarão lá
    localStorage.setItem('todos', JSON.stringify(this.todos));  
    // console.log(this.todos);
  }

  // Remove uma tarefa
  removeTodo(todo: any) {
    console.log('O elemento Pai recebeu', todo);

    // busca o elemento informado e retorna seu index
    let index = this.todos.indexOf(todo); 

    // splice remove o elemento do index informado, apenas 1 vez (pode remover mais de uma vez o mesmo elemento em outras posições)
    this.todos.splice(index, 1) ;

    // Atualiza após exclusão
    localStorage.setItem('todos', JSON.stringify(this.todos));  

  }

}
