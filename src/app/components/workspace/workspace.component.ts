import { Component, OnInit, ViewChild } from '@angular/core';
import { task } from '../../models/task';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TaskService } from '../../services/tasks/task.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
}
