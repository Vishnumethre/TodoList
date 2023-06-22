import { Component } from '@angular/core';
import { vishnuService } from './vishnu.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[vishnuService]
})
export class AppComponent {

  constructor(public vish: vishnuService, private accounts : AccountService){}
active = this.accounts.activeUsers;
inactive = this.accounts.inactiveUSers;
activecount=0;
  Todolist=[];
todol='';

  AddItem(f:any)
  {
   this.accounts.account[this.accounts.account.length-1].accountholderName=f;
   this.accounts.account[this.accounts.account.length-1].balance=200000;
  }
  print()
  {
    this.vish.mah();
  }
  setToinactive(id:number){
    this.accounts.inactiveUSers.push(this.accounts.activeUsers[id]);
    this.accounts.activeUsers.splice(id,1);
    this.activecount-= 1;
  }

  setToactive(id:number){
    this.accounts.activeUsers.push(this.accounts.inactiveUSers[id]);
    this.accounts.inactiveUSers.splice(id,1);
    this.activecount+=1;
  }
}
