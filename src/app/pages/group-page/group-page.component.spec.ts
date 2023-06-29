import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageComponent } from './group-page.component';
import {ActivatedRoute} from "@angular/router";

describe('GroupPageComponent', () => {
  let component: GroupPageComponent;
  let fixture: ComponentFixture<GroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
