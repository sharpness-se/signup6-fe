import {Component} from '@angular/core';
import {ParticipationFormService} from "../../services/participation-form.service";
import {Observable} from "rxjs";
import {Participation} from "../../../models/participation";

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.scss'],
  providers: [ParticipationFormService]
})
export class ParticipationFormComponent {

  public participation$: Observable<Participation>;
  constructor(private participationFormService: ParticipationFormService) {
    this.participation$ = this.participationFormService.participation$;
  }

  public mupp(): void {
    this.participationFormService.fetchParticipation(-1, -1);
  }
}
