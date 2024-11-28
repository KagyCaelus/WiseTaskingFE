import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { BaseComponent } from './components/base/base.component';
import { AuthGuard } from './guards/auth.guard';
import path from 'path';
import { TaskComponent } from './components/task/task.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {pathMatch: 'full', path: '', redirectTo: 'login'}, 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component:BaseComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component:HomeComponent},
    {path: 'workspace', component: WorkspaceComponent, children: [
      { path: 'tasks', component: TaskComponent },
      { path: 'categories', component: CategoryComponent }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
