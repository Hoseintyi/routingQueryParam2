import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../interface/app.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editName = true
  editMode: boolean= false;
  user: IUser | undefined;

  constructor(private userSerive: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.editName = this.route.snapshot.queryParams['editing'] === '1' ? false : true;
    this.user = this.userSerive.user.find(user=>user.id === +this.route.parent?.snapshot.params['id']);
  }

  onChangeName(name: string | undefined)
  {
    if(this.user?.name && name != undefined ){
      this.user.name = name;
      this.router.navigate(['/users'])
    }
  }

}
