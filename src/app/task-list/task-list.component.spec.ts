import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteTask', () => {
    it('should do something', () => {
      spyOn(component.delTask, 'emit');
      component.deleteTask('test');
      expect(component.delTask.emit).toHaveBeenCalled();
    });
  });

  describe('editTask', () => {
    it('should triger the handleTditBtn event', () => {
      spyOn(component.handleEditBtn, 'emit');
      component.editTask('task');
      expect(component.handleEditBtn.emit).toHaveBeenCalled();
    })
  });

  describe('handlUpdateTask', () => {
    it('should triger the handleEdit event', () => {
      spyOn(component.handleEdit, 'emit');
      let e = {
        preventDefault: ()=>'fun'
      }
      component.handlUpdateTask(e,'task','pre');
      expect(component.handleEdit.emit).toHaveBeenCalled();
    })
  });
});
