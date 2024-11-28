import { Component, OnInit } from '@angular/core';
import { workspace } from '../../models/workspace';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogLeaveComponent } from '../dialog-leave/dialog-leave.component';
import { workspaceUser } from '../../models/workspace-user';
import { environment } from '../../environment/environment';
import { CreateWorkspaceComponent } from '../create-workspace/create-workspace.component';
import { WorkspaceService } from '../../services/workspaces/workspace.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router, private dialog : MatDialog, private workspaceSvc: WorkspaceService) {}
  ngOnInit(): void {
    this.getallWorkspaces()
  }

  user: user = {
    username: '',
    email: '',
    biography: ''
  }

  workspacecreate : workspaceUser = {
    name: '',
    description: '',
    password: '',
    repeatpassword: '',
    userId: Number(localStorage.getItem('userId'))
  }

  workspaces: workspace[] = []

  goToWorkspace(workspaceid: number) : void {
    this.router.navigate(['/user/workspace'])
  }

  openDialogDelete(workspaceid: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.workspaceSvc.deleteWorkspace(workspaceid).pipe(map(res => {
          this.getallWorkspaces()
        })).subscribe()
      }
    });
  }

  getallWorkspaces() {
    this.workspaceSvc.getAllUserWorkspaces(Number(localStorage.getItem('userId'))).pipe(map(res => {
      if(res==null) {
        this.workspaces = res
      } else {
        this.workspaces = res
      }
    })).subscribe()
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateWorkspaceComponent, {
      data: {name: this.workspacecreate.name, description: this.workspacecreate.description, 
        password: this.workspacecreate.password, repeatPassword: this.workspacecreate.repeatpassword
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.workspacecreate.name = result.name
      this.workspacecreate.description = result.description
      this.workspacecreate.password = result.password
      this.workspacecreate.repeatpassword = result.repeatpassword
      
      this.createWorkspace()
    });
  }

  createWorkspace(): void {
    this.workspaceSvc.createWorkspace(this.workspacecreate).pipe(map(res => {
        console.log(res)
        this.getallWorkspaces()
      }
    )).subscribe();
  }
}
