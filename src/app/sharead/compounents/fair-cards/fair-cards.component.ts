import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss']
})
export class FairCardsComponent implements OnInit {
@Input() fairObj ! : Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
