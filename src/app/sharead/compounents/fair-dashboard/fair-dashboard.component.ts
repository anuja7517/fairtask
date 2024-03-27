import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../serives/fairs.service';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
  fairArr !:Ifair[] 
  constructor(private _fairService  : FairsService) { }

  ngOnInit(): void {
   this.fairArr= this._fairService.fetchAllfairs();
  }

}
