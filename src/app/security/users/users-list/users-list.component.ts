import { Component, OnInit } from '@angular/core';

import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import {
  GetUsersPagedQueryBase,
  User
} from '../../../domain/view-models/security/user';
import { UserService } from '../../shared/users/users.service';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersPagedResponse: PaginatedResponseViewModel<User>;
  pagedQueryOptions: GetUsersPagedQueryBase;
  tenantCode: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.tenantCode = this.authService.getTenantId();
    this.pagedQueryOptions = new GetUsersPagedQueryBase(this.tenantCode);
    this.getList();
  }

  async getList(): Promise<void> {
    try {
      const response = await this.userService.getList(this.pagedQueryOptions);
      if (!this.usersPagedResponse) {
        this.usersPagedResponse = response;
      } else {
        this.usersPagedResponse.Items = this.usersPagedResponse.Items.concat(
          response.Items
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  loadMoreUsers() {
    this.pagedQueryOptions.CurrentPage++;
    this.getList();
  }
}
