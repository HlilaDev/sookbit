import { Component } from '@angular/core';
import { PaymentsBanner } from "../../components/banners/payments-banner/payments-banner";
import { Hero } from "../../components/hero/hero";

@Component({
  selector: 'app-home',
  imports: [PaymentsBanner, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
