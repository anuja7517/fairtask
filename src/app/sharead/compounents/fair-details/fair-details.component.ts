import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FairsService } from '../../serives/fairs.service';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  fairId ! : string;
  fairObj! : Ifair;
  constructor( private _routes : ActivatedRoute,
                  private _fairserive : FairsService) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe((params :Params) =>{
      this.fairId = params['fairId'];
      this.fairObj = this._fairserive.fetchFair(this.fairId)
    })
  }

}
