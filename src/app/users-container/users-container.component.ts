import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {

 public users;
  public userName='';
  public userAge='';
  constructor(private userService:UserService) {
  }
  loadUsers(){
      this.userService.getUsers().subscribe(data=>{
      this.users=data;
    }
    );
    console.log(this.users);
  }
  ngOnInit(){
    this.loadUsers()
  }
  addUser(name,age){
    if(!name||!age) return;
    let user={
      name:name,
      age:age
    }
    this.userName='';
    this.userAge='';
    this.userService.add(user);
    this.loadUsers();
	}

}