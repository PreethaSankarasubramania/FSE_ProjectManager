import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponentComponent } from './create-user-component.component';
import { CreateProjectComponentComponent } from '../create-project-component/create-project-component.component';
import { CreateTaskComponent } from '../create-task-component/create-task-component';
import { TaskListComponent } from '../task-list-component/task-list-component';
import { ListProjectComponentComponent } from '../list-project-component/list-project-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { TaskService } from '../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app.routing.module';
import { ModalService } from '../services/model.service';
import {ModalComponent } from '../directives/model.component'

describe('CreateUserComponentComponent', () => {
  let component: CreateUserComponentComponent;
  let fixture: ComponentFixture<CreateUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,  ReactiveFormsModule,HttpClientModule,AppRoutingModule ],
      declarations: [CreateTaskComponent,FilterPipe,ModalComponent,TaskListComponent,CreateProjectComponentComponent
      ,CreateUserComponentComponent,ListProjectComponentComponent,ListUserComponentComponent],
      providers: [TaskService,ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
