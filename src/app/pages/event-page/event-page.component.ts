import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ParticipationFormService } from '../participation-form/participation-form.service';
import { BC_HOME, Breadcrumb } from '../../../models/breadcrumb';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { SignUpEvent } from '../../../models/sign-up-event';
import { GroupService } from '../group-page/group.service';
import { LogentryService } from '../../services/logentry.service';
import { Logentry } from '../../../models/logentry';
import { TimeParser } from '../../util/time-parser';
import { ParticipationService } from '../../services/participation.service';
import { ParticipationStatuses, Status } from '../../../models/participation';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
  providers: [
    ParticipationFormService,
    GroupService,
    LogentryService,
    ParticipationService,
  ],
})
export class EventPageComponent implements OnInit, OnDestroy {
  public group: Group | null = null;

  public user: User | null = null;

  public event: SignUpEvent | null = null;

  public logentry: Logentry[] | null = null;

  public members: ParticipationStatuses | null = null;

  public Status = Status;

  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    public readonly participationFormService: ParticipationFormService,
    public readonly participationService: ParticipationService,
    public readonly logentryService: LogentryService,
    public readonly groupService: GroupService,

    private readonly translate: TranslateService
  ) {}

  public getTime(isoTime: string): string {
    return TimeParser.getTime(isoTime);
  }

  public hasEventPassed(isoTime: string): boolean {
    return TimeParser.hasEventPassed(isoTime);
  }

  public ngOnInit(): void {
    this.participationFormService.fetchSignUpEvent(
      this.route.snapshot.params['id']
    );
    this.participationFormService.signUpEvent$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event) => {
        this.event = event;
      });
    this.logentryService.fetchLogentries(this.route.snapshot.params['id']);

    this.participationService.fetchParticipationStatuses(
      this.route.snapshot.params['id']
    );
    this.participationService.status$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((statuses) => {
        this.members = statuses;
      });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get breadcrumbs(): Breadcrumb[] {
    const event: Breadcrumb = {
      label: this.event?.name ?? 'event',
    };
    return [BC_HOME, event];
  }
}
