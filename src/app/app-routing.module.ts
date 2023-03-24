import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationFormComponent } from './pages/participation-form/participation-form.component';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'groups', component: GroupListComponent },
  {
    path: 'participations/edit',
    component: ParticipationFormComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, //TODO 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
