import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../interfaces/services/todo.service";
import {ResponsiblePersonService} from "../../interfaces/services/responsible-person.service";
import {Subscription} from "rxjs";
import {IResponsiblePersonInterface} from "../../interfaces/todoInterface/responsiblePerson.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  subscribtion: Subscription | undefined;
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    responsiblePersonId: new FormControl('', Validators.required),
  });

  persons: IResponsiblePersonInterface[] = [];

  todoId: string | undefined;

  constructor(
    private ResponsiblePersonService: ResponsiblePersonService,
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }



  ngOnInit(): void {
    this.getPerson();
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.todoId = params['id'];
        this.getTodoById(params['id'])
        }
    });
  }
  getTodoById(id: number | string) {
    this.subscribtion = this.todoService.getTodoById(id).subscribe((res) => {
      if (res){
        this.form.patchValue(res);
      }

    });
  }

 getPerson(){
   this.subscribtion = this.ResponsiblePersonService.getPersons().subscribe((res) => {

      this.persons = res;
    });
 }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return
    const {responsiblePersonId} = this.form.value;
    let responsiblePerson: IResponsiblePersonInterface | undefined;
    if (responsiblePersonId) {
       responsiblePerson = this.persons.find(person => person.id === +responsiblePersonId);
    }
    if (this.todoId) {
      this.subscribtion = this.todoService.updateTodoById(this.todoId, {
        ...this.form.value,
        responsiblePerson: responsiblePerson
      }).subscribe(() => {
          this.router.navigate(['/']);
        });
    }else {
      this.subscribtion = this.todoService.addTodo({...this.form.value, responsiblePerson: responsiblePerson})
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }

  }
 ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
 }
}
