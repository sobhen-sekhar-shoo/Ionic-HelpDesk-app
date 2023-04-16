import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeftMenuPage } from "../../Common/left-menu/left-menu.page";
import { FooterPage } from "../../Common/footer/footer.page";
import { TopNavbarPage } from "../../Common/top-navbar/top-navbar.page";
import { HomePage } from "../../Pages/home/home.page";

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.page.html',
    styleUrls: ['./main-layout.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, LeftMenuPage, FooterPage, TopNavbarPage, HomePage]
})
export class MainLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
