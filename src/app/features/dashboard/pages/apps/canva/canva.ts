import { Component } from '@angular/core';

@Component({
  selector: 'app-canva',
  imports: [],
  templateUrl: './canva.html',
  styleUrl: './canva.scss'
})
export class Canva {

  shareProduct() {
    const shareData = {
      title: 'Canva Pro Subscription',
      text: 'Get 1 year of Canva Pro for only $2.99! Delivered via Telegram, no login needed!',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.error('Sharing failed', error));
    } else {
      alert('Sharing is not supported in your browser.');
    }
  }

}
