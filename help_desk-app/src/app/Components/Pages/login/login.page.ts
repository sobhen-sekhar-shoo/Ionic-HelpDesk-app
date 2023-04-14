import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';
import {LoginAuthService} from "../../../Services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  title = 'Login';
  constructor(private router: Router, private loginAuth:LoginAuthService) { }

  ngOnInit() {
  }

  onSubmit(data:any) {
  //   this.loginAuth.GetUser(data.UserId, data.Password).subscribe((data:any)=>{
  //     console.log(data)
  //   })
    
    if (data.UserId  == "Admin" && data.Password == "Admin@123" ) {
     this.router.navigate(['/client/dashboard']);
   } else {
     alert("Login failed");
   }
  }

}
