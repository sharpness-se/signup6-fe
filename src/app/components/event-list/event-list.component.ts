import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() groupId!: number;
  @Input() all: boolean = false;

  constructor() { }

  public ngOnInit(): void {

  }
}


