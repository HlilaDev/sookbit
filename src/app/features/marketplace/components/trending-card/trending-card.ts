import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  imports: [],
  templateUrl: './trending-card.html',
  styleUrl: './trending-card.scss'
})
export class TrendingCard {

    @Input() card: {
      name: string; // Name of the game or item
      offers: number; // Number of offers available
      image: string; // Image URL for the game or item
    } | undefined;

}
