import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { DashboardRoutingModule } from "../../features/dashboard/dashboard-routing-module";

@Component({
  selector: 'app-layout',
  imports: [Footer, Sidebar, Header, DashboardRoutingModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
