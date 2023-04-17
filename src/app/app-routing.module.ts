import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationFormComponent } from './pages/participation-form/participation-form.component';
import { GroupListPageComponent } from './pages/group-list-page/group-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {GroupPageComponent} from "./pages/group-page/group-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'groups', component: GroupListPageComponent },
  { path: 'groups/:id', component: GroupPageComponent },
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
