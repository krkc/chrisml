import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WebApiService } from "./web-api.service";

export const routes: Route[] = [
    { path: 'home', component: HomeComponent, providers: [WebApiService] }
];