import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

import { CreateTaskComponent } from './create-task-component/create-task-component';
import { TaskListComponent } from './task-list-component/task-list-component';
import { CreateProjectComponentComponent } from './create-project-component/create-project-component.component';
import { CreateUserComponentComponent } from './create-user-component/create-user-component.component';

export const routes: Routes = [
  { 'path': 'projects/:id', component: CreateProjectComponentComponent },
  { 'path': 'users/:id', component: CreateUserComponentComponent },
  { 'path': 'tasks/:id', component: CreateTaskComponent },
  { 'path': '', component: TaskListComponent },
  { 'path': 'view-tasks', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
