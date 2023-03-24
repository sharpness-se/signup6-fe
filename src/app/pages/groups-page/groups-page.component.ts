import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {ActivatedRoute} from "@angular/router";
import {ParticipationFormService} from "../../services/participation-form.service";

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
  providers: [GroupService]
})
export class GroupsPageComponent implements OnInit {
  constructor(
    public readonly groupService: GroupService
  ) {}

  public ngOnInit(): void {
    this.groupService.fetchAllGroups()
  }

}
