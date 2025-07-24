import { Component } from '@angular/core';
import { PaymentsBanner } from "../../components/banners/payments-banner/payments-banner";
import { Hero } from "../../components/hero/hero";
import { TrendingGames } from "../../components/trending-games/trending-games";

@Component({
  selector: 'app-home',
  imports: [PaymentsBanner, Hero, TrendingGames],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
