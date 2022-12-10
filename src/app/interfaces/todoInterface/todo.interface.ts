import {TodoStatus} from "../../types/todo-status";
import {IResponsiblePersonInterface} from "./responsiblePerson.interface";

export interface ITodo {
  id: number | string;
   title: string;
   description: string;
   status: TodoStatus;
   dueDate: Date;
   createdAt: Date;
    updatedAt?: Date;
    removedAt?: Date;
    responsiblePerson: IResponsiblePersonInterface;
  responsiblePersonId?: number | string;
}
