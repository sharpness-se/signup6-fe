import { Component, Input, OnInit } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input() user?: User;
  @Input() size: 's' | 'm' | 'l' = 'm';

  img!: CloudinaryImage;

  public ngOnInit(): void {
    if (this.user?.imageProvider === 'Cloudinary') {
      const cld = new Cloudinary({
        cloud: {
          cloudName: environment.cloudinaryCloudName,
        },
      });
    }
  }
}
