import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  providers: [GroupService]
})
export class GroupListComponent implements OnInit {
  constructor(
    public readonly groupService: GroupService
  ) {}

  public ngOnInit(): void {
    this.groupService.fetchAllGroups()
  }

}
