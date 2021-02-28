import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  @Output() handleAddTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(task: string) {
    this.handleAddTask.emit(task);
  }
}
