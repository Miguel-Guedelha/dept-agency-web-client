import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CitySearchComponent } from "./city-search/city-search.component";
import { ResultPageComponent } from "./result-page/result-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: CitySearchComponent },
  { path: "results", component: ResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
