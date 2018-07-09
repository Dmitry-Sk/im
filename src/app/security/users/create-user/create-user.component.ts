import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { Role } from '../../../domain/view-models/security/role';
import { CreateUserInfoForm } from '../../../domain/view-models/security/user';
import { UserService } from '../../shared/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userInfo: CreateUserInfoForm = new CreateUserInfoForm();
  roleList: Role[] = [];
  personTypes: Array<string> = ['Internal', 'External'];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getRoles();
  }

  private async getRoles() {
    try {
      this.roleList = await this.userService.getRoles();
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(userInfoForm: NgForm): Promise<void> {
    try {
      if (userInfoForm.valid) {
        await this.userService
          .createUser(this.userInfo)
          .then(userId => {
            this.toaster.pop(
              'success',
              'User Created',
              'User has been created successfully'
            );
            return userId;
          })
          .then(userId => {
            this.router.navigate(['../', userId, 'edit'], {
              relativeTo: this.route
            });
          });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
