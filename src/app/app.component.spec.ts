import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";

describe('AppComponent', () => {
  let component : AppComponent;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AppComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = TestBed.inject(AppComponent);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todoApp-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todoApp-ng');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('todoApp-ng app is running!');
  // });

  describe('updateTasks', () => {

    it('add and delete task from tasks', () => {
      // const fixture = TestBed.createComponent(AppComponent);
      component.updateTasks("newTask")
      let result = component.tasks.filter(ele=>ele.title === "newTask")
      expect(result.length).toBeTruthy();
      expect(result[0].title).toEqual("newTask");
      component.deleteTask("newTask")
      result = component.tasks.filter(ele=>ele.title === "newTask")
      expect(result.length).toBeFalsy();
    })

    it('delete task from task object', () => {
      // const fixture = TestBed.createComponent(AppComponent);
      console.log(component.tasks,"???????????>>>>>>>>>>>>>>>");
      
    })
  });
});
// .includes({title: 'newTask', editForm: false})