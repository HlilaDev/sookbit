import { Component } from '@angular/core';
import { MainHeader } from "../../main-header/main-header";
import { MainFooter } from "../../main-footer/main-footer";
import { DashboardRoutingModule } from "../../../features/dashboard/dashboard-routing-module";

@Component({
  selector: 'app-main-layout',
  imports: [MainHeader, MainFooter, DashboardRoutingModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
