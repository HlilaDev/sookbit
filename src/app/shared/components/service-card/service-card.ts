import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
   @Input() title!: string;
  @Input() image!: string;
  @Input() price!: string;

}
