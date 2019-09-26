import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task-component/create-task-component';
import { TaskListComponent } from './task-list-component/task-list-component';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './directives/model.component';
import { ModalService } from './services/model.service';
import { CreateProjectComponentComponent } from './create-project-component/create-project-component.component';
import { ListProjectComponentComponent } from './list-project-component/list-project-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { CreateUserComponentComponent } from './create-user-component/create-user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe, 
    CreateTaskComponent,
    TaskListComponent,
    ModalComponent,
    CreateProjectComponentComponent,
    ListProjectComponentComponent,
    ListUserComponentComponent,
    CreateUserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
