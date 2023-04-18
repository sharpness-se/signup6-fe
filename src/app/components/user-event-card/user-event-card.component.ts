import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SignUpEvent} from "../../../models/sign-up-event";
import {User} from "../../../models/user";
import {TimeParser} from "../../util/time-parser";
import {Participation} from "../../../models/participation";
import {ParticipationService} from "../../services/participation.service";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-user-event-card',
  templateUrl: './user-event-card.component.html',
  styleUrls: ['./user-event-card.component.scss'],
  providers: [ParticipationService]

})
export class UserEventCardComponent implements OnInit{

  @Input() event?: SignUpEvent;
  @Input() user: User | null = null;

  constructor(public participationService: ParticipationService) {
  }

  public getTimeRange(isoStartTime: string, isoEndTime: string): string {
    return TimeParser.getTime(isoStartTime) + ", " + TimeParser.getTimeRange(isoStartTime, isoEndTime)
  }

  public participation: Participation[] = [];

  public ngOnInit(): void {
    if (this.event && this.user) {
      this.participationService.fetchParticipation(this.event.id, this.user.id);
    }
  }

}
