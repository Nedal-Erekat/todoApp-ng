import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoApp-ng';

  // how do we can empty tasks without through error ?
  tasks = [
    {
      task:"create PR",
      editForm: false
    }, {
      task:"create task",
      editForm: false
    }];
    available = this.tasks.length;
  updateTasks(newTask: string) {
    
    let addedTask = {
      task: newTask,
      editForm: false
    }
    this.tasks.push(addedTask);
  }

  deleteTask(choosedTask: string) {
    // should we update the variable in this way ?
    this.tasks=this.tasks.filter(task=> task.task != choosedTask);
  }

  updateTask(updatedTask: object) {
    let [newTask, prev] = Object.values(updatedTask)
    this.tasks=this.tasks.map(ele=>{
      if (ele.task === prev) {
        return {
          task: newTask,
          editForm: false
        }
      }
      return ele;
    })    
  }

  riseFlag(task: string) {
    this.tasks = this.tasks.map(ele=>{
      if (ele.task === task) {
        return {...ele, editForm: !ele.editForm};
      }
      return ele;
    })
  }

 
}