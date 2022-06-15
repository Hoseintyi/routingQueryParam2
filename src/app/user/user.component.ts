import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../interface/app.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  editName = true
  editMode: boolean= false;

  user: IUser | undefined = {
    id:1,
    email:"asd@asd.com",
    name: "sdsd"
  };

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void 
  {
    this.user = this.userService.user.find(user=> user.id === +this.route.snapshot.params['id']);
    this.editName = this.route.snapshot.queryParams['editing'] === '1' ? false : true;
    // this.route.queryParams.subscribe((p)=>{
    //   if(p['editMode']===2)
    //   {
      
    //   }
    // });

    if(!this.user)
    {
      this.router.navigate(['/users']);
    }
  }


  openEditUser()
  {

    // absolute 
    // this.router.navigate(['/users' , this.user?.id , 'edit' ], {queryParams: { editMode: '1' , isAdmin: '1'} , fragment:'title' });

    // relative:
    this.router.navigate(['edit' ], {relativeTo: this.route , queryParams: { editing: '1' , isAdmin: '1'} , fragment:'title' });
    this.editMode=true;
    
  }

}
