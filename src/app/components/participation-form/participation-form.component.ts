import { Component, OnInit } from '@angular/core';
import { ParticipationFormService } from '../../services/participation-form.service';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Participation, Status } from '../../../models/participation';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.scss'],
  providers: [ParticipationFormService],
})
export class ParticipationFormComponent implements OnInit {
  public participation: Participation | null = null;
  public signUpEvent: SignUpEvent | null = null;
  public user: User | null = null;

  public Status = Status;

  public status = new FormControl<Status | null>(null, Validators.required);
  public comment = new FormControl<string>('');

  public participationForm = new FormGroup({
    status: this.status,
    comment: this.comment,
  });

  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly participationFormService: ParticipationFormService
  ) {
    combineLatest([
      this.participationFormService.participation$,
      this.participationFormService.signUpEvent$,
      this.participationFormService.user$,
    ])
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(([participation, signUpEvent, user]) => {
        this.participation = participation;
        this.signUpEvent = signUpEvent;
        this.user = user;

        if (this.participation) {
          this.updateForm(this.participation);
        }
      });
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = params['eventId'];
      const userId = params['userId'];
      this.fetchParticipation(eventId, userId);
    });
  }

  public onSubmit(): void {
    const status = this.status.value;
    const comment = this.comment.value;

    if (status && typeof comment === 'string' && this.participation) {
      const participation: Participation = {
        ...this.participation,
        status,
        comment,
      };
      this.participationFormService.submitParticipation(participation);
    }
  }
  public onCancel(): void {
    //TODO navigate back
  }
  public getTime(isoTime: string): string {
    return DateTime.fromISO(isoTime).toFormat('yyyy LLL dd');
  }

  private updateForm(participation: Participation): void {
    if (participation.status !== Status.Unregistered) {
      this.status.setValue(participation.status);
    }
    this.comment.setValue(participation.comment);
  }

  private fetchParticipation(eventId: number, userId: number): void {
    this.participationFormService.fetchParticipation(eventId, userId);
    this.participationFormService.fetchSignUpEvent(eventId);
    this.participationFormService.fetchUser(userId);
  }
}
