import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DB} from './mockDB'

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor() { 
    
  }

  public getTasks(): Observable<any> {   
    return DB[0].tasks;
  }
}
