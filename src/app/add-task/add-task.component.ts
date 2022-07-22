import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskData: any;
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    limit_date: new FormControl(''),
    category: new FormControl(''),
    members!: new FormControl(''),
    archives!: new FormControl(''),
    subtasks!: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  getTask(){
    this.taskData = this.taskForm.value;
    console.log(this.taskData)
  }
}
