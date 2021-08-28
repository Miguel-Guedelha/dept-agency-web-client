import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CitySearchService } from "../city-search.service";

@Component({
  selector: "app-city-search",
  templateUrl: "./city-search.component.html",
  styleUrls: ["./city-search.component.css"],
})
export class CitySearchComponent implements OnInit {
  private cityName: string = "";
  previousSearches: string[] = [];

  constructor(
    private router: Router,
    private citySearchService: CitySearchService
  ) {}

  ngOnInit(): void {
    this.previousSearches = this.citySearchService.getPreviousSearches();
  }

  edit(cityName: string): void {
    this.cityName = cityName;
  }

  onSubmit(): void {
    this.router.navigateByUrl(`/results?city=${this.cityName}`);
  }

  onPreviousSearch(index: number) {
    this.router.navigateByUrl(`/results?city=${this.previousSearches[index]}`);
  }
}
