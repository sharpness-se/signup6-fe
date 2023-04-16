import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'signup6-fe';

  constructor(private readonly translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(window.navigator.language.slice(0,2));
  }
}
