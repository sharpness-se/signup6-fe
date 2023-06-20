import { Component, Input } from '@angular/core';
import { Status } from 'src/models/participation';
import { User } from 'src/models/user';

@Component({
  selector: 'app-event-member',
  templateUrl: './event-member.component.html',
  styleUrls: ['./event-member.component.scss'],
})
export class EventMemberComponent {
  @Input() user: User | null = null;
  @Input() status: Status | null = null;
  @Input() event: number | undefined = undefined;

  public Status = Status;
}
