import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title1 = 'Welcome';
  day = new Date();
  JsonUse = {name: 'Nidhi', age: '23', address: {add1: 'Katargam', add2: 'Surat'}};
  title = 'Angular 6 Project!';
  todaydate = new Date();
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
  // tslint:disable-next-line:quotemark
  months = ['January', 'Feburary', 'March', 'April', 'May', "June", "July", "August", "September",  "October", "November", "December"];
  // isavailable = true;
  isavailable = false;
  fail = false;
    myClickFunction(event) {
    alert('Clicked');
    console.log(event);
  }
    changemonths(event) {
  console.log('Changed month from dropdown');
  console.log(event);
  alert('Changed month from the Dropdown');
  }
  // tslint:disable-next-line:member-ordering
  todaydate;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {

    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = 'component created.';
    this.componentproperty = this.myservice.serviceproperty;
  }

}
