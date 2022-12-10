import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../interfaces/services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 total: number = 0;
 completed: number = 0;
 inProgress: number = 0;

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res) => {
       this.total = res.length;
        this.completed = res.filter((item) => item.status === 'completed').length;
        this.inProgress = this.total - this.completed;
      });
    }



}
