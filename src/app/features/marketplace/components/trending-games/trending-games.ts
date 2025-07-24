import { Component } from '@angular/core';
import { TrendingCard } from "../trending-card/trending-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-games',
  imports: [TrendingCard , CommonModule],
  templateUrl: './trending-games.html',
  styleUrl: './trending-games.scss'
})
export class TrendingGames {

   trendingGames = [
    { 
      name: 'Valorant', 
      offers: 579, 
      image: 'assets/images/cards/freefire.jpg' 
    },
    { 
      name: 'RBL', 
      offers: 767, 
      image: 'assets/images/cards/freefire.jpg' 
    },
    { 
      name: 'Free Fire', 
      offers: 334, 
      image: 'assets/images/cards/freefire.jpg' 
    },
    { 
      name: 'Resident Evil Village', 
      offers: 31, 
      image: 'assets/images/cards/freefire.jpg'
    }
  ];

}
