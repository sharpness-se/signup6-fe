import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParticipationFormComponent } from './pages/participation-form/participation-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GravatarModule } from 'ngx-gravatar';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GroupListPageComponent } from './pages/group-list-page/group-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailsCardComponent } from './components/event-details-card/event-details-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EventListComponent } from './components/event-list/event-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserEventCardComponent } from './components/user-event-card/user-event-card.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { CloudinaryModule } from '@cloudinary/ng';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { EventMemberComponent } from './pages/event-page/event-member/event-member.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ParticipationFormComponent,
    HomePageComponent,
    GroupListPageComponent,
    EventDetailsCardComponent,
    BreadcrumbsComponent,
    GroupPageComponent,
    EventListComponent,
    UserPageComponent,
    UserEventCardComponent,
    EventPageComponent,
    UserAvatarComponent,
    EventMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'sv',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    GravatarModule,
    CloudinaryModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
