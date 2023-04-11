import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  title = 'Login';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data:any) {
    if (data.UserId == "Admin" && data.Password == "Admin@123" ) {
     this.router.navigate(['/home']);
   } else {
     alert("Login failed");
   }
  }

}
