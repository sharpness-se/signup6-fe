import { Component, OnInit } from '@angular/core';
import { BC_GROUPS, BC_HOME, Breadcrumb } from 'src/models/breadcrumb';
import {GroupListPageService} from "./group-list-page.service";
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list-page.component.html',
  styleUrls: ['./group-list-page.component.scss'],
  providers: [GroupListPageService],
})
export class GroupListPageComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [BC_HOME, BC_GROUPS];
  constructor(public readonly groupListService: GroupListPageService) {}

  public ngOnInit(): void {
    this.groupListService.fetchAllGroups();
  }
}
