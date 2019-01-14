import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()

export class WeatherService {

    constructor(private http: Http) { }

    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=a2efc2ed66b9e8f0a0b24aeb5e87b2bc&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp);
    }
}