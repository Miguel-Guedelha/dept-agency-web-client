import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "./backend.service";
import { City } from "./entities/city";

@Injectable({
  providedIn: "root",
})
export class CitySearchService {
  private previousSearches: string[] = [];

  constructor(private backend: BackendService) {}

  getByName(cityName: string): Observable<City> {
    if (!this.previousSearches.find((x) => x === cityName)) {
      this.previousSearches.push(cityName);
    }
    return this.backend.getDataByCity(cityName);
  }

  getPreviousSearches(): string[] {
    return this.previousSearches;
  }
}
