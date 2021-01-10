import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, NgModule, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { animConnectWithSpotifyClicked, introduce } from "./home.animations";

@Component({
  selector: "app-home-page",
  templateUrl: "./home.ng.html"
})
export class HomePage implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    introduce();
  }

  login() {
    animConnectWithSpotifyClicked(() => {
      document.location.href =
        "https://wheelspun-records-api.chrismoore3.repl.co/login";
    });
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
