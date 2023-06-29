import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationFormComponent } from './participation-form.component';
import {MockProvider} from "ng-mocks";
import {ActivatedRoute} from "@angular/router";
import {ParticipationFormService} from "./participation-form.service";
xdescribe('ParticipationFormComponent', () => {
  let component: ParticipationFormComponent;
  let fixture: ComponentFixture<ParticipationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationFormComponent ],
      providers: [
        MockProvider(ActivatedRoute),
        MockProvider(ParticipationFormService)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
