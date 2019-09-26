import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProjectComponentComponent } from './create-project-component.component';
import { CreateUserComponentComponent } from '../create-user-component/create-user-component.component';
import { CreateTaskComponent } from '../create-task-component/create-task-component';
import { TaskListComponent } from '../task-list-component/task-list-component';
import { ListProjectComponentComponent } from '../list-project-component/list-project-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DatePipe } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app.routing.module';
import { ModalService } from '../services/model.service';
import {ModalComponent } from '../directives/model.component'

describe('CreateProjectComponentComponent', () => {
  let component: CreateProjectComponentComponent;
  let fixture: ComponentFixture<CreateProjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,  ReactiveFormsModule,HttpClientModule,AppRoutingModule ],
      declarations: [ CreateProjectComponentComponent,CreateUserComponentComponent,
        CreateTaskComponent,TaskListComponent,ListProjectComponentComponent,ListUserComponentComponent,
        ModalComponent,FilterPipe ],
      providers: [ProjectService,ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
