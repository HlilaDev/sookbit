import { Component } from '@angular/core';
import { Sidebar } from "../../sidebar/sidebar";
import { Header } from "../../dash-header/header";
import { DashboardRoutingModule } from "../../../features/dashboard/dashboard-routing-module";

@Component({
  selector: 'app-layout',
  imports: [ Sidebar, Header, DashboardRoutingModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
