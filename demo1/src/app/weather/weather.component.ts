import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName = '';
  cityName = '';
  temp = null;
  isLoading = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.weatherService.getTemp('tokyo')
    //   .then(temp => console.log(temp))
    //   .catch(err => console.log(err));
  }

  getWeather() {
    if (this.txtCityName === '') {
      this.cityName = '';
      return;
    }

    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
      .then(temp => {
        this.cityName = this.txtCityName;
        this.temp = temp;
      })
      .catch(err => {
        alert("can't find your city");
        this.cityName = '';
      })
      .finally(() => {
        this.txtCityName = '';
        this.isLoading = false;
      });
  }

  getMessage() {
    if (this.isLoading) {
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
  }

}
