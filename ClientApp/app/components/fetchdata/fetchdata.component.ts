import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    public countries: string[];
    public ORIGIN_URL = location.origin;

    //constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
    //    http.get(originUrl + '/api/SampleData/WeatherForecasts').subscribe(result => {
    //        this.forecasts = result.json() as WeatherForecast[];
    //    });

    //    http.get(originUrl + '/api/SampleData/GetKeyCountries').subscribe(result => {
    //        this.countries = result.json() as string[];
    //    });

    //}

    constructor(http: Http) {
        var originUrl = location.origin;

        http.get(originUrl + '/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        });

        http.get(originUrl + '/api/SampleData/GetKeyCountries').subscribe(result => {
            this.countries = result.json() as string[];
        });

    }}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
