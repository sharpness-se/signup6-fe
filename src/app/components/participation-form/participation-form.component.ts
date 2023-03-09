import { Component } from '@angular/core';
import { ParticipationFormService } from '../../services/participation-form.service';
import { Observable } from 'rxjs';
import { Participation, Status } from '../../../models/participation';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.scss'],
  providers: [ParticipationFormService],
})
export class ParticipationFormComponent {
  public participation$: Observable<Participation | null>;
  public signUpEvent$: Observable<SignUpEvent | null>;
  public user$: Observable<User | null>;
  public Status = Status;

  constructor(private participationFormService: ParticipationFormService) {
    this.participation$ = this.participationFormService.participation$;
    this.signUpEvent$ = this.participationFormService.signUpEvent$;
    this.user$ = this.participationFormService.user$;
  }

  public mupp(): void {
    this.participationFormService.fetchParticipation(-1, -1);
    this.participationFormService.fetchSignUpEvent(-1);
    this.participationFormService.fetchUser(-1);
  }
}
