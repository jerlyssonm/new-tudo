import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageUsersService } from '../manage-users.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public tasks:any;
  public id: any;
  constructor(
    private userService: ManageUsersService,
    private route: ActivatedRoute
    ) { 
      this.route.params.subscribe(params => this.id = params['id'])
    }

  ngOnInit(): void {
    this.tasks = this.userService.getTasks();

  }

}
