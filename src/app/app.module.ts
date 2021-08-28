import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CitySearchComponent } from "./city-search/city-search.component";
import { ResultPageComponent } from "./result-page/result-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitySearchComponent,
    ResultPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
