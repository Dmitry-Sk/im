import { Component } from '@angular/core';

import { environment } from './../environments/environment';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userLoggedIn = false;

  constructor(private authService: AuthService) {
    authService.configure(environment.authentification.config);
    authService.getUserManager().events.addUserLoaded(user => {
      if (user)
        this.userLoggedIn = true;
    });
    authService.authenticate();
  }
}
