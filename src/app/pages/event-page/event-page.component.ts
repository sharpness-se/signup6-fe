import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user-page/user.service";
import {TranslateService} from "@ngx-translate/core";
import {ParticipationFormService} from "../participation-form/participation-form.service";
import {BC_HOME, Breadcrumb} from "../../../models/breadcrumb";
import {Group} from "../../../models/group";
import {User} from "../../../models/user";
import {SignUpEvent} from "../../../models/sign-up-event";
import {GroupService} from "../group-page/group.service";
import {LogentryService} from "../../services/logentry.service";
import {Logentry} from "../../../models/logentry";
import {TimeParser} from "../../util/time-parser";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
  providers: [ParticipationFormService, GroupService, LogentryService]
})
export class EventPageComponent implements OnInit, OnDestroy{

  public group: Group | null = null;

  public user: User | null = null;

  public event: SignUpEvent | null = null;

  public logentry: Logentry[] | null = null;

  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    public readonly participationFormService: ParticipationFormService,

    public readonly logentryService: LogentryService,
    public readonly groupService: GroupService,

    private readonly translate: TranslateService
  ) {}

  public getTime(isoTime: string): string {
    return TimeParser.getTime(isoTime);
  }

  public ngOnInit(): void {
    this.participationFormService.fetchSignUpEvent(this.route.snapshot.params['id']);
    this.participationFormService.signUpEvent$.pipe(takeUntil(this.onDestroy$)).subscribe(event => {
      this.event = event;
      //TODO: Bättre sätt att hämta grupp id ?
      // @ts-ignore
      this.groupService.fetchUsers(event.group.id);
    })
    this.logentryService.fetchLogentries(this.route.snapshot.params['id']);
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
