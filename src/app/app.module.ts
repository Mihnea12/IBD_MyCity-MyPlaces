import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {GoogleMapComponent} from './google-demo/google-demo.component'
import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {MdbPopoverModule} from "mdb-angular-ui-kit/popover";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbRangeModule} from "mdb-angular-ui-kit/range";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRadioModule} from "mdb-angular-ui-kit/radio";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {MdbTooltipModule} from "mdb-angular-ui-kit/tooltip";
import {MdbValidationModule} from "mdb-angular-ui-kit/validation";
import {MdbScrollspyModule} from "mdb-angular-ui-kit/scrollspy";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {AlertModule} from "./_alert";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';
import { TopVisitedComponent } from './general-statistics/top-visited/top-visited.component';
import { TopExpensiveComponent } from './general-statistics/top-expensive/top-expensive.component';
import { TopLowPricedComponent } from './general-statistics/top-low-priced/top-low-priced.component';
import { TopRatedComponent } from './general-statistics/top-rated/top-rated.component';
import { MatTableModule } from '@angular/material/table';
import { FavoriteLocationsComponent } from './favorite-locations/favorite-locations.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { LocationVisitsComponent } from './location-info/location-visits/location-visits.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    RegisterComponent,
    LoginComponent,
    GeneralStatisticsComponent,
    TopVisitedComponent,
    TopExpensiveComponent,
    TopLowPricedComponent,
    TopRatedComponent,
    FavoriteLocationsComponent,
    LocationInfoComponent,
    LocationVisitsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    AlertModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
