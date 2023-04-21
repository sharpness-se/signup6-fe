import { Component, Input } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user';
import { max } from '@cloudinary/url-gen/actions/roundCorners';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  private _user?: User;
  @Input() set user(user: User | null | undefined) {
    if(user) {
      this._user = user;
      this.someFunc(user);
    }
  };
  public get user(){
    return this._user;
  };

  @Input() size: 's' | 'm' | 'l' = 'm';

  public img?: CloudinaryImage;

  public resolveSize(): number {
    switch (this.size) {
      case 's':
        return 20;
    
      case 'm':
        return 40;
    
      case 'l':
        return 100;
    
      default:
        return 40;
    }
  }

  private someFunc(user: User): void {
    if (this.user?.imageProvider === 'Cloudinary') {
      const cld = new Cloudinary({
        cloud: {
          cloudName: environment.cloudinaryCloudName,
        },
      });
      const size = this.resolveSize();
      this.img = cld.image(this.generatePublicId(user))
      .resize(thumbnail()
      .width(size)
      .height(size)
      .gravity(focusOn(FocusOn.face()))
      )
      .roundCorners(max());;
    }
  }

  private generatePublicId(user: User): string {
    return 'v'+user.imageVersion+'/sharpness-signup/'+user.id;
  }
}
