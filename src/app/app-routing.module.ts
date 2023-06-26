import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationFormComponent } from './pages/participation-form/participation-form.component';
import { GroupListPageComponent } from './pages/group-list-page/group-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'groups', component: GroupListPageComponent },
  { path: 'groups/:id', component: GroupPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'events/:id', component: EventPageComponent },
  {
    path: 'participations/edit',
    component: ParticipationFormComponent,
    children: [
      {
        path: '?eventId=:event&userId=:user.id',
        component: ParticipationFormComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, //TODO 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
