import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CitySearchService } from "../city-search.service";
import { City } from "../entities/city";

@Component({
  selector: "app-result-page",
  templateUrl: "./result-page.component.html",
  styleUrls: ["./result-page.component.css"],
})
export class ResultPageComponent implements OnInit {
  cityData: City = null;

  constructor(
    private citySearchService: CitySearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCityData();
  }

  multipleLocations(): boolean {
    return this.cityData.locations.length > 1;
  }

  onChoice(index: number) {
    let temp = this.cityData.locations[index];
    this.cityData.locations = [temp];
  }

  getCityData(): void {
    this.citySearchService
      .getByName(this.route.snapshot.queryParams["city"])
      .subscribe((cityData) => (this.cityData = cityData));
  }
}
