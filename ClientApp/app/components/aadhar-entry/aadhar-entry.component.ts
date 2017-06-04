import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { AadharCard } from '../../aadhar-card';  // relative path to find the given class in dir structure
import { AadharCardService } from '../../aadhar-card.service'; // import the service


@Component({
  selector: 'app-aadhar-entry',
  templateUrl: './aadhar-entry.component.html',
  styleUrls: ['./aadhar-entry.component.scss']
})
export class AadharEntryComponent implements OnInit, OnDestroy {

  isSubmitted: boolean = false;
  model: AadharCard;
  private sub: any;
  entryId: number;

  constructor(
      private _aadharCardService: AadharCardService,
      private route: ActivatedRoute
      ) {  // DI the service in the constructor
   }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
          this.entryId = +params['id'];
          console.log(this.entryId);
    });
  
    if (this.entryId == 0)  // INSERT entry
    {
      this.model = new AadharCard();

      // Initialise the model variable and then use it on the form as viewModel
      this.model.AadharCardId = 0;
      this.model.DateOfBirth = new Date("2010-02-01T00:00:00");
    }
    else   // EDIT / VIEW entry
    {
      this.model = new AadharCard();

      this._aadharCardService.getAadharCard(this.entryId)
                                .subscribe((card: AadharCard) => {
                                  this.model = card;
                                  console.log(card);
                                });
    }
  }

  // Submits the new card details to the service method
  addCardToAadharStore(){
    console.debug(JSON.stringify(this.model));  // console out the inputted new card holder details

    if (this.model.AadharCardId == 0)
    {
      // add the record
      this._aadharCardService.addAadharCard(this.model);
    }
    else
    {
      // Update the record      
      this._aadharCardService.updateAadharCard(this.model);
    }
    this.isSubmitted = true;
  }


  // reset
  resetAadharInformation(){
        console.debug('Reset button is clicked.....');
    this.model = new AadharCard();

    // reset  values
    this.model.AadharCardId = 0;

    this.model.AadharNumber = '';
    this.model.City = '';
    this.model.FirstName = '';
    this.model.LastName = '';
    this.model.DateOfBirth = new Date(1976 + "/" + 11 + "/" + 10);
  }

  // Gets fired when the component is going out of scope
  ngOnDestroy(){
    this.sub.unsubscribe();

  }

}
