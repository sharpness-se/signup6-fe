import {Component, OnDestroy, OnInit} from '@angular/core';
import {BC_GROUPS, BC_HOME, Breadcrumb} from "../../../models/breadcrumb";
import {User} from "../../../models/user";
import {ActivatedRoute} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "./user.service";
import {Group} from "../../../models/group";
import {SignUpEvent} from "../../../models/sign-up-event";
import {Participation} from "../../../models/participation";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  providers: [UserService]
})
export class UserPageComponent implements OnInit, OnDestroy {

  public group: Group | null = null;

  public user: User | null = null;

  public events: SignUpEvent[] = [];

  public participation: Participation[] = [];
  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    public readonly userService: UserService,
    private readonly translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.userService.fetchUser(this.route.snapshot.params['id']);
    this.userService.user$.pipe(takeUntil(this.onDestroy$)).subscribe(user => {
      this.user = user;
    })

    this.userService.fetchUpcomingEventsByUser(this.route.snapshot.params['id']);



  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get breadcrumbs(): Breadcrumb[] {
    const user: Breadcrumb = {
      label: this.user?.firstName ?? 'user',
    };
    return [BC_HOME, user];
  }

}
