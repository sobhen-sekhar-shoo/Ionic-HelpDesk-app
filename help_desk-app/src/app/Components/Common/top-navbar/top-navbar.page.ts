import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.page.html',
  styleUrls: ['./top-navbar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TopNavbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
