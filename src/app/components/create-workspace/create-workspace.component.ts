import { Component, Inject } from '@angular/core';
import { workspaceUser } from '../../models/workspace-user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrl: './create-workspace.component.css'
})
export class CreateWorkspaceComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateWorkspaceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: workspaceUser,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
