import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ValidateService } from './validate.service';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public name;
  public address;
  public email;
  public url = 'https://api.myjson.com/bins/j7w4a';
  public mydata;
  public names = [
    'Alma	Mckenzie',
    'Kath Byrd',
    'Kyle	Graham',
    'Justin Chambers',
    'Ebony Barker',
    'Pam Becker',
    'May Sutton',
    'Brett Jennings',
    'Hannah Underwood',
    'Wendy Mclaughlin',
    'Rene	Sutton',
    'Sam Harris',
    'Marilyn Parsons',
    'Samuel	Vargas',
    'Anthony Martin',
    'Kristina	Roberts',
    'Randolph	Barton',
    'Shelia	Miles',
    'Scott Thompson',
    'Rosa	Fernandez'
  ]

  constructor(
    private toastrService: ToastrService,
    private validateService: ValidateService,
    private registerService: RegisterService,
    private http: HttpClient
  ) {}

  fillNameInput(nameLi) {
    this.name = nameLi;
  }

  onSubmit() {
    let newUser = {
      name: this.name,
      address: this.address,
      email: this.email
    }
    if(!this.validateService.validateRegister(newUser)) {
      this.toastrService.error('Please fill all the details', '', {
        timeOut: 3000
      });
      return false;
    } else {
      this.registerService.getAllUser().subscribe(
        data => {
          this.mydata = data;
          this.mydata.push(newUser);
          this.registerService.registerUser(this.mydata).subscribe(
            data => {
              console.log(data);
              this.name = '';
              this.address = '';
              this.email = '';
              this.toastrService.success('User information saved to cloud', '', {
                timeOut: 3000
              })
            }
          )
        }
      )
    }
  }
}
