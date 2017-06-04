// First imports - @angular ones
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; //Import the Http, Response and Headers from the @angular/http

// Second imports - third party ones
import { Observable } from 'rxjs/Observable';  // Import the Observable from rxjs/Observable

import 'rxjs/add/operator/map';    //These two imports (adding map and catch opeators) required when we deal with rxjs while hitting RESTful services.
import 'rxjs/add/operator/catch';

// Third imports - local application ones
import { AadharCard } from './aadhar-card';  // Import the class that will be used in this service.  Importing from the actual name of the file.


@Injectable()
export class AadharCardService {
  baseUrl: string;

  // Constructor - DI injecting the http and then setting up some service level values
  constructor(private http: Http) {
      this.baseUrl = 'http://localhost:53725/api/card/';
   }

   // GetAadharCards - this method will retrieve the aadhar cards from the RESTful service that is available at the baseUrl mentioned above
   getAadharCards() : Observable<AadharCard[]> {
      return this.http.get(`${this.baseUrl}`)
                      .map((res: Response) => res.json());
   }


   // GetAadharCard(id) - this method will retrieve the details for the given card id
   getAadharCard(id: number): Observable<AadharCard>{
     // console out some info
     console.debug(id.toString());

     let newUrl = this.baseUrl + id.toString();
     console.debug(newUrl);

     return this.http.get(`${newUrl}`)
                      .map((res : Response) => res.json());

   }

   // addAadharCard - this method will POST the form data to the RESTful service to create an entry in the aadhar data store
   addAadharCard(aadharCard: AadharCard) : void {
      // set the headers for the POST call
      let requestHeaders = new Headers();
      requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
      console.debug(JSON.stringify(aadharCard));  // console out the values being passed to the service

      this.http.post(`${this.baseUrl}`, JSON.stringify(aadharCard), {headers: requestHeaders}).subscribe();  // Make a POST call to the service.  Pass in url, card object and headers.


   }

   updateAadharCard(aadharCard: AadharCard) : void {
      // set the headers for the PUT call
      let requestHeaders = new Headers();
      requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
      console.debug(JSON.stringify(aadharCard));  // console out the values being passed to the service

      this.http.put(`${this.baseUrl}`, JSON.stringify(aadharCard), {headers: requestHeaders}).subscribe();  // Make a PUT call to the service.  Pass in url, card object and headers.
     
   }





}
