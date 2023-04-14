import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.page.html',
  styleUrls: ['./left-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeftMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
