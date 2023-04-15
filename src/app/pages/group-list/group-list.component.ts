import { Component, OnInit } from '@angular/core';
import { BC_GROUPS, BC_HOME, Breadcrumb } from 'src/models/breadcrumb';
import {GroupListService} from "./group-list.service";
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupListService],
})
export class GroupListComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [BC_HOME, BC_GROUPS];
  constructor(public readonly groupListService: GroupListService) {}

  public ngOnInit(): void {
    this.groupListService.fetchAllGroups();
  }
}
