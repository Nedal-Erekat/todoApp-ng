import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputComponent } from './task-input.component';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addNewTask', () => {
    it('should triger the jandleAddTask event', () => {
      spyOn(component.handleAddTask, 'emit');
      component.addNewTask('test');
      expect(component.handleAddTask.emit).toHaveBeenCalled();
    });
  });
});
