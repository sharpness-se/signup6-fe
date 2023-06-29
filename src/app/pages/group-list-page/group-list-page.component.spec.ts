import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListPageComponent } from './group-list-page.component';
import {ActivatedRoute} from "@angular/router";

describe('GroupListPageComponent', () => {
  let component: GroupListPageComponent;
  let fixture: ComponentFixture<GroupListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupListPageComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
