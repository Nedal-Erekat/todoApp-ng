import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { ApiService } from "./api.service";

// create custome type
interface Task { 
  title: string;
  editForm?: boolean; //optional
}

type TaskName = 'item 1' | 'item 2'; // it needs to be assign to exactly


const test: TaskName = 'item 1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'todoApp-ng';
  jokes: Object={};
  constructor(private _http: ApiService) {}

  // how do we can empty tasks without through error ?
  tasks: Task[] = [
    { 
      title: "do",
      editForm: false 
    }
  ];
  available = this.tasks.length;

  ngOnInit() {
    this._http.justAcall().subscribe( data =>{
      console.log(data);
      this.jokes = data;
      
    });
  }

  updateTasks(newTask: string) {
    
    const addedTask: Task = {
      title: newTask,
      editForm: false,
    };

    this.tasks.push(addedTask);
  }



  deleteTask(choosedTask: string) {
    // should we update the variable in this way ?
    this.tasks=this.tasks.filter((task: any)=> task.title != choosedTask);
  }

  updateTask(updatedTask: object) {
    let [newTask, prev] = Object.values(updatedTask)
    this.tasks=this.tasks.map((ele: any)=>{
      if (ele.title === prev) {
        return {
          task: newTask,
          editForm: false
        }
      }
      return ele;
    })    
  }

  riseFlag(task: string) {
    this.tasks = this.tasks.map((ele: any)=>{
      if (ele.title === task) {
        return {...ele, editForm: !ele.editForm};
      }
      return ele;
    })
  }

 
}