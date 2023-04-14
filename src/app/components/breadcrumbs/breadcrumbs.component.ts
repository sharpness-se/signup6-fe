import { Component, Input } from '@angular/core';
import { Breadcrumb } from '../../../models/breadcrumb';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
  constructor(private readonly translate: TranslateService) {}

  public getLabel(breadcrumb: Breadcrumb): string {
    return breadcrumb.translation
      ? this.translate.instant(breadcrumb.translation)
      : breadcrumb.label;
  }
}
