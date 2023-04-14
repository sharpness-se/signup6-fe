import { Component } from '@angular/core';
import { BC_HOME, Breadcrumb } from 'src/models/breadcrumb';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public breadcrumbs: Breadcrumb[] = [BC_HOME];
}
