import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.html',
  styleUrl: './social.scss'
})
export class Social {

  socialAccounts = [
    {
      platform: 'Instagram',
      followers: 150000,
      niche: 'Fitness',
      engagement: 'High',
      price: 120,
      image: 'assets/images/social/instagram.jpg',
      telegram: 'https://t.me/YourTelegramBot'
    },
    {
      platform: 'TikTok',
      followers: 200000,
      niche: 'Comedy',
      engagement: 'Very High',
      price: 95,
      image: 'assets/images/social/tiktok.jpg',
      telegram: 'https://t.me/YourTelegramBot'
    },
    {
      platform: 'Facebook',
      followers: 50000,
      niche: 'News & Media',
      engagement: 'Medium',
      price: 80,
      image: 'assets/images/social/facebook.jpg',
      telegram: 'https://t.me/YourTelegramBot'
    },
    {
      platform: 'YouTube',
      followers: 100000,
      niche: 'Gaming',
      engagement: 'High',
      price: 200,
      image: 'assets/images/social/youtube.jpg',
      telegram: 'https://t.me/YourTelegramBot'
    }
  ];

}
