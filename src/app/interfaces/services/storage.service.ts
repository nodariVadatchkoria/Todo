import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get(key: string): any {
    const value = localStorage.getItem(key);
    return  value? JSON.parse(value): null;
  }
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
