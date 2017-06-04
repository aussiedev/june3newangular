import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AadharCard } from '../../aadhar-card';  // relative path to find the given class in dir structure
import { AadharCardService } from '../../aadhar-card.service'; // import the service

@Component({
  selector: 'app-aadhar-list',
  templateUrl: './aadhar-list.component.html',
  styleUrls: ['./aadhar-list.component.scss']
})
export class AadharListComponent implements OnInit {
  list: AadharCard[];  // declare a class level list that will hold the retrieved values from the REST service call
  normalMessage: string;

  constructor(private _aadharCardService: AadharCardService, private router: Router) {  // DI the service in the constructor

   }

  ngOnInit() {
    // Make a call to the service method, subscribe it and then assign the returned value to the local variable
    this._aadharCardService.getAadharCards()
    .subscribe((cards: AadharCard[]) => {
          console.log(cards);  //console log the retrieved cards
          this.list = cards;
    });
  }


  // Event that gets fired when a button (Add-New) is clicked
  addNewClick()
  {
    console.debug('Add-New button is clicked.....');

    // Fire the navigate method of Router to move to the defined routeEntry with some parameter and in this case it's zero (0).    
    this.router.navigate(['/aadharentry', 0]);
  }

  // This will redirect to the aadhar entry page with item id
  editItem(id: number)
  {
    this.router.navigate(['/aadharentry', id]);  
  }

}
