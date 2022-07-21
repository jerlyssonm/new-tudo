import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../manage-users.service';
import {DB} from '../mockDB';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dbNow: any;
  public taskIncomplete:any;
  public taskCompleted:any; 

  constructor(private UserService: ManageUsersService) { }

  ngOnInit(): void { 
    this.dbNow = this.UserService.getTasks();
    this.taskCompleted = this.dbNow.filter((item: any) => item.completed)
    this.taskIncomplete = this.dbNow.filter((item: any) => !item.completed)
    }
}
