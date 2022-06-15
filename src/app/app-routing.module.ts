import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent, children: [{path: 'edit', component: EdituserComponent}] },

  // {path: 'users/:id/edit', component: EdituserComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
