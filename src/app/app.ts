import { Component, NgModule, VERSION } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AccessTokenGuard } from "./common/access_token_guard";
import { fadeAnimation } from "./route_animations";

declare var anime: any;              // declare like this

@Component({
  selector: "app-body",
  template: `
    <main class="absolute w-screen bg-black">
      <div [@fadeAnimation]="getRouterOutletState(o)">
        <router-outlet #o="outlet"></router-outlet>
      </div>
    </main>
  `,
  animations: [fadeAnimation]
})
export class AppComponent {
  getRouterOutletState(outlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.state
    );
  }
}

const ROUTES = [
  {
    path: "",
    loadChildren: () => import("./home").then(m => m.HomePageModule),
    data: {
      state: "home"
    },
    canActivate: [AccessTokenGuard]
  },
  {
    path: "spin",
    loadChildren: () => import("./spin").then(m => m.SpinPageModule),
    data: {
      state: "spin"
    }
  }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AccessTokenGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
