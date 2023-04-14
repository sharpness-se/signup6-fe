import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { BC_GROUPS, BC_HOME, Breadcrumb } from 'src/models/breadcrumb';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupService],
})
export class GroupListComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [BC_HOME, BC_GROUPS];
  constructor(public readonly groupService: GroupService) {}

  public ngOnInit(): void {
    this.groupService.fetchAllGroups();
  }
}
