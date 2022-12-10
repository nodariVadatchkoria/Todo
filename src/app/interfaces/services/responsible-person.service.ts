import { Injectable } from '@angular/core';
import {persons} from "../../shared/data/persons";
import {IResponsiblePersonInterface} from "../todoInterface/responsiblePerson.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResponsiblePersonService {

  constructor() { }

  getPersons(): Observable<IResponsiblePersonInterface[]> {
   return of(persons);
  }
 getPerson(id: number | string): Observable<IResponsiblePersonInterface | undefined> {
   return of(persons.find((person: IResponsiblePersonInterface) => person.id === id));
  }


}
