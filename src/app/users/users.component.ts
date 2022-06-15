import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/app.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.user;
  }

}
