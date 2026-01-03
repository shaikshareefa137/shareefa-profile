import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  users: any[] = [];
  loading: boolean = true;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.loading = false;
    });
  }
}
