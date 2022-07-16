import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Entrada de informação do componente todo-list
  @Input() todo: Todo = {
    id: 0,
    title: '',
    done: false
  }

  // Saida de informação para o componente todo-list
  @Output() remove = new EventEmitter
  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Remove a tarefa
  removeTodo(): void {
    this.remove.emit(this.todo);
  }

  // Marca como finalizado
  markAsDone():void {
    this.done = true;
  }

}
