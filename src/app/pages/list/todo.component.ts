import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../interfaces/services/todo.service";
import {IResponsiblePersonInterface} from "../../interfaces/todoInterface/responsiblePerson.interface";
import {ITodo} from "../../interfaces/todoInterface/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  constructor(
    private todoService: TodoService,
  )
  { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res) => {

      this.todos = res;
    });
  }

  delete(id: number | string) {
    this.todoService.removeTodoById(id)
      .subscribe(() => {
        this.getTodos();
      });
  }

  complete(id: number | string) {
    this.todoService.completeTodoById(id)
      .subscribe(() => {
        this.getTodos();
      });
  }
}
