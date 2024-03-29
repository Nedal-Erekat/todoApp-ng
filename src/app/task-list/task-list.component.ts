import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() top: string='';
  @Input() items: any;
  @Output() itemsChange =new EventEmitter<object>();
  @Output() delTask = new EventEmitter<string>();
  @Output() handleEdit = new EventEmitter<object>();
  @Output() handleEditBtn = new EventEmitter<string>();

  ele: string = 'no way';

  
  deleteTask (task: string) {   
    this.delTask.emit(task);
  }

  editTask (task: string) {    
    this.handleEditBtn.emit(task)
  }

  handlUpdateTask(event: any, newTask: string, prev: string) {
    event.preventDefault(); 
    this.handleEdit.emit({newTask, prev});
  }
}
