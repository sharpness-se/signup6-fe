import { Component, OnDestroy, OnInit } from '@angular/core';
import { BC_GROUPS, BC_HOME, Breadcrumb } from '../../../models/breadcrumb';
import { Group } from '../../../models/group';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/pages/group-page/group.service';
import { Subject, takeUntil } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  providers: [GroupService],
})
export class GroupPageComponent implements OnInit, OnDestroy {
  public group: Group | null = null;
  private onDestroy$ = new Subject<void>();
  usersLength: number | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly groupService: GroupService,
    private readonly translate: TranslateService
  ) {}

  public ngOnInit(): void {
    this.groupService.fetchGroup(this.route.snapshot.params['id']);
    this.groupService.group$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((group) => {
        this.group = group;
      });
    this.groupService.fetchUsers(this.route.snapshot.params['id']);

    this.groupService.users$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((users) => {
        this.usersLength = users.length;
      });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get breadcrumbs(): Breadcrumb[] {
    const group: Breadcrumb = {
      label: this.group?.name ?? 'group',
    };
    return [BC_HOME, BC_GROUPS, group];
  }

  get futureLabel(): string {
    return this.translate.instant('group.upcomingEvents');
  }

  get allLabel(): string {
    return this.translate.instant('group.allEvents');
  }
}
