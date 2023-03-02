import { Component } from '@angular/core';
import { districtDetails } from 'src/assets/district';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  data = districtDetails

}
